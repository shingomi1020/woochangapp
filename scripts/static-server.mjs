import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};

function resolveRequestPath(urlPathname) {
  const cleanPath = urlPathname === "/" ? "/index.html" : urlPathname;
  const normalized = path.normalize(cleanPath).replace(/^(\.\.[/\\])+/, "");
  return path.join(rootDir, normalized);
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "127.0.0.1"}`);
    const filePath = resolveRequestPath(url.pathname);
    const extension = path.extname(filePath).toLowerCase();
    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": contentTypes[extension] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(body);
  } catch (error) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  process.stdout.write(`Static server ready on http://127.0.0.1:${port}\n`);
});
