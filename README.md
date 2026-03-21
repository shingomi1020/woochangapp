# 투두리스트 및 캘린더 앱

현재 폴더에 있던 Todo 리스트와 Calendar 초안을 정리해 다시 구성한 Vite + React 앱입니다.

기본 동작 방식:

- `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`가 있으면 Supabase 테이블을 사용합니다.
- 값이 없거나 연결에 실패하면 브라우저 로컬 저장소로 자동 전환됩니다.

## 실행 방법

1. 의존성 설치

```bash
npm install
```

2. 환경 변수 파일 준비

```bash
copy .env.example .env
```

3. Supabase SQL Editor에서 `supabase/schema.sql` 내용을 실행

4. 개발 서버 실행

```bash
npm run dev
```

## Supabase 연결

`.env` 예시:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
VITE_SUPABASE_TABLE_NAME=todos
```

현재 SQL 스키마는 빠른 연결용으로 `anon`과 `authenticated`에 모두 열려 있습니다. 실제 서비스로 운영할 때는 인증과 RLS 정책을 더 좁혀야 합니다.

## GitHub 연결

현재 폴더를 GitHub 저장소에 올릴 때 기본 순서는 아래와 같습니다.

```bash
git init -b main
git add .
git commit -m "Initial todo calendar app"
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

이미 저장소를 만들어 둔 상태라면 `git remote add origin ...` 이후 바로 푸시하면 됩니다.

## 배포

`main` 브랜치에 푸시하면 [deploy-pages.yml](/C:/Users/desig/OneDrive/문서/투두리스트%20및%20캘린더%20앱/.github/workflows/deploy-pages.yml) 이 자동으로 GitHub Pages 배포를 수행합니다.

Pages 설정은 GitHub 저장소의 `Settings > Pages`에서 `Build and deployment: GitHub Actions`로 두면 됩니다.
