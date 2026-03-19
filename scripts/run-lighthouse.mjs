import { spawn } from "node:child_process";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";
import lighthouse from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";

const repoRoot = process.cwd();
const serverPort = 4173;
const lighthousePort = 9222;
const targetUrl = `http://127.0.0.1:${serverPort}/index.html`;
const configPath = path.join(repoRoot, ".lighthouserc.json");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url) {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(url, { method: "GET" });
      if (response.ok) {
        return;
      }
    } catch {
      // Keep polling until the static server responds.
    }

    await sleep(250);
  }

  throw new Error(`Static server did not become ready at ${url}`);
}

function startStaticServer() {
  const child = spawn(process.execPath, ["scripts/static-server.mjs"], {
    cwd: repoRoot,
    env: {
      ...process.env,
      PORT: String(serverPort),
    },
    stdio: "inherit",
  });

  return child;
}

function parseAssertionConfig(assertions = {}) {
  return Object.entries(assertions)
    .filter(([key]) => key.startsWith("categories:"))
    .map(([key, value]) => {
      const [level, options = {}] = value;
      return {
        category: key.replace("categories:", ""),
        level,
        minScore: Number(options.minScore || 0),
      };
    });
}

function summarizeScores(lhr) {
  return Object.entries(lhr.categories || {}).reduce((summary, [key, category]) => {
    summary[key] = category.score;
    return summary;
  }, {});
}

function evaluateThresholds(lhr, assertionConfig) {
  const failures = [];

  for (const assertion of assertionConfig) {
    const actualScore = Number(lhr.categories?.[assertion.category]?.score ?? 0);
    if (actualScore >= assertion.minScore) {
      continue;
    }

    const message = `${assertion.category} score ${actualScore.toFixed(2)} is below ${assertion.minScore.toFixed(2)} (${assertion.level})`;
    if (assertion.level === "error") {
      failures.push(message);
      continue;
    }

    process.stdout.write(`Lighthouse warning: ${message}\n`);
  }

  if (failures.length) {
    throw new Error(failures.join("\n"));
  }
}

const rawConfig = JSON.parse(await readFile(configPath, "utf8"));
const outputDir = path.join(repoRoot, rawConfig.ci.upload.outputDir || "lighthouse-report");
const assertionConfig = parseAssertionConfig(rawConfig.ci.assert?.assertions);
const onlyCategories = rawConfig.ci.collect?.settings?.onlyCategories || ["performance", "accessibility", "best-practices", "seo"];

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

const serverProcess = startStaticServer();
let browser;

try {
  await waitForServer(targetUrl);

  browser = await chromium.launch({
    headless: true,
    args: [`--remote-debugging-port=${lighthousePort}`],
  });

  const runnerResult = await lighthouse(
    targetUrl,
    {
      port: lighthousePort,
      output: ["html", "json"],
      logLevel: "info",
      onlyCategories,
      disableStorageReset: true,
    },
    desktopConfig
  );

  if (!runnerResult) {
    throw new Error("Lighthouse did not return a result.");
  }

  const reports = Array.isArray(runnerResult.report) ? runnerResult.report : [runnerResult.report];
  const [htmlReport = "", jsonReport = ""] = reports;
  const summary = summarizeScores(runnerResult.lhr);

  await writeFile(path.join(outputDir, "report.html"), htmlReport, "utf8");
  await writeFile(path.join(outputDir, "report.json"), jsonReport || JSON.stringify(runnerResult.lhr, null, 2), "utf8");
  await writeFile(path.join(outputDir, "summary.json"), JSON.stringify(summary, null, 2), "utf8");

  process.stdout.write(`Lighthouse summary: ${JSON.stringify(summary)}\n`);
  evaluateThresholds(runnerResult.lhr, assertionConfig);
} finally {
  if (browser) {
    await browser.close();
  }

  if (serverProcess.exitCode === null) {
    serverProcess.kill();
  }
}
