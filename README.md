# OM Play Web

기존 iOS 앱 `OM Play`를 웹 기반으로 옮긴 정적 프로젝트입니다.

## 포함된 기능

- 7개의 오디오 버튼
- 같은 버튼 재클릭 시 재생/일시정지 토글
- 다른 버튼 클릭 시 기존 재생 중지 후 새 트랙 반복 재생
- 정지 버튼
- 모바일/데스크톱 대응 레이아웃

## 실행 방법

정적 파일이라 별도 빌드 없이 열 수 있지만, 브라우저 호환을 위해 간단한 로컬 서버 실행을 권장합니다.

```bash
cd om-web
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000` 으로 접속하면 됩니다.

## GitHub 업로드

```bash
git init
git add .
git commit -m "Add OM Play web version"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## GitHub Pages 배포

이 프로젝트는 정적 사이트이므로 GitHub Pages로 바로 배포할 수 있습니다.

1. GitHub 저장소 업로드
2. 저장소 `Settings`
3. `Pages`
4. `Deploy from a branch`
5. `main` 브랜치와 `/root` 선택

배포 후 `https://<github-username>.github.io/<repo-name>/` 형태의 주소로 접속할 수 있습니다.
