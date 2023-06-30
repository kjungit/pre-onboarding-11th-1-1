# 원티드 프리온보딩 프론트엔드 인턴십 1주차 과제 
> 동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 인턴십 선발 과제의 Best Pratice를 만들고 제출해주세요

> Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.

진행 기간: 2023.06.27 ~ 2023.06.30

<br/>

## 목차 
- [🔗 배포 링크](#-배포-링크)
- [⚙️ 실행 방법](#️-실행-방법)
- [🔗 사전 선발 과제](#-사전-선발-과제)
  - [브랜치 전략](#브랜치-전략)
  - [커밋 메시지 컨벤션](#커밋-메시지-컨벤션)
- [🤝 팀 규칙](#-팀-규칙)
- [📂 폴더 구조](#-폴더-구조)
- [🛠️ 기술 스택](#️-기술-스택)
- [📖 서비스 소개](#-서비스-소개)
  - [기능 구현](#기능-구현)
  - [페이지](#페이지)
- [👑 Best Practice](#-best-practice)
- [😃 팀원](#-팀원)

<br/>

## 🔗 배포 링크
<!-- 링크 작성 -->

<br/>

## ⚙️ 실행 방법

```
$ npm install
$ npm start
```

<br/>

## 🔗 사전 선발 과제
| 이름   | GitHub Repository                                                                 |
| ------ | --------------------------------------------------------------------------------- |
|김범준|[@kjungit](https://github.com/kjungit/wanted-pre-onboarding-frontend)|
|김현진|[@who0803](https://github.com/who0803/wanted-pre-onboarding-frontend)|
|박희진|[@hihijin](https://github.com/hihijin/wanted-pre-onboarding-frontend)|
|손수민|[@sonmansu](https://github.com/sonmansu/wanted-pre-onboarding-frontend)|
|유지현|[@yoojiih](https://github.com/yoojiih/wanted-pre-onboarding-frontend)|
|전영범|[@Boom0704](https://github.com/Boom0704/wanted-pre-onboarding-frontend)|
|태강희|[@khkh0109](https://github.com/khkh0109/wanted-pre-onboarding-frontend)|

<br/>

## 🤝 팀 규칙 
### 브랜치 전략 
- upstream에는 main 브랜치만 존재
- 브랜치명: `feature/#이슈번호-간단한설명`
  - ex: `feature/#7-setting`
- fork 해서 브랜치파서 작업한뒤 `origin:main`으로 PR 날림
- 코드리뷰 받고 승인 받으면 `origin:main`에 merge

<br/>

### 커밋 메시지 컨벤션 
|타입|설명|
| --- | --- |
|Feat| 새로운 기능 추가|
|Fix|버그 수정|
|Env|개발 환경 관련 |
|Style|코드 스타일 수정 (세미 콜론, 인덴트 등의 스타일적인 부분만)|
|Refactor|코드 리팩토링 (더 효율적인 코드로 변경 등)|
|Design|CSS 등 디자인 추가/수정iE|
|Comment|주석 추가/수정|
|Docs|내부 문서 추가/수정|
|Test|테스트 추가/수정|
|Chore|빌드, 패키지 관련 코드 수정|
|Rename|파일 및 폴더명 수정|
|Remove|파일 삭제|

<br/>

## 📂 폴더 구조 
```
📦 src
├── 📂 types
│   ├── 📄 common.ts
├── 📂 utils // (공통 함수 정의 )
│   ├── 📄 api.ts
│   ├── 📄 localStorage.ts
├── 📂 components
│   ├── 📂 common(공통 컴포넌트)
│   │   ├── 📄 Form.tsx        
│   ├── 📂 login(개별로 쓰는 컴포넌트)
│ 	│   ├── 📄 LoginInput.tsx
│   ├── 📂 join(개별로 쓰는 컴포넌트)
│ 	│   └── 📄 JoinInput.tsx
│   └── 📂 todo(개별로 쓰는 컴포넌트)
│ 	    └── 📄 TodoInput.tsx
├── 📂 pages
│   ├── 📄 LoadingPage.tsx
│   ├── 📄 JoinPage.tsx
│   ├── 📄 LoginPage.tsx
│   ├── 📄 TodoPage.tsx
│   └── 📄 ErrorPage.tsx
├── 📂 routers
│   ├── 📄 protectedRouter.ts
│   └── 📄 Router.tsx
├── 📄 App.tsx
└── 📄 Index.tsx
```

<br/>

## 🛠️ 기술 스택 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-000000?style=for-the-badge&logo=husky&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"> 

<br/>

## 📖 서비스 소개 
### 기능 구현 
- 회원 가입
- 로그인
- Todo CRUD
- 토큰 유무에 따른 페이지 리다이렉션

<br/>

### 페이지 

|**회원가입**|
| --- |
|<!-- img -->|
|**로그인**|
|<!-- img -->|
|**Todo**|
|<!-- img -->|


<br/>

## 👑 Best Practice
### 

<br/>

## 😃 팀원 

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/kjungit"><img src="https://avatars.githubusercontent.com/u/100064540?v=4" width="100px;" alt=""/><br /><sub><b>김범준(팀장)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/who0803"><img src="https://avatars.githubusercontent.com/u/65334125?v=4" width="100px;" alt=""/><br /><sub><b>김현진</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/hihijin"><img src="https://avatars.githubusercontent.com/u/117073214?v=4" width="100px;" alt=""/><br /><sub><b>박희진</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sonmansu"><img src="https://avatars.githubusercontent.com/u/80534651?v=4" width="100px;" alt=""/><br /><sub><b>손수민</b></sub></a><br /></td>
     <tr/>
     <td align="center"><a href="https://github.com/yoojiih"><img src="https://avatars.githubusercontent.com/u/33574807?v=4" width="100px;" alt=""/><br /><sub><b>유지현</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/Boom0704"><img src="https://avatars.githubusercontent.com/u/126732752?v=4" width="100px;" alt=""/><br /><sub><b>전영범</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/khkh0109"><img src="https://avatars.githubusercontent.com/u/77181642?v=4" width="100px;" alt=""/><br /><sub><b>태강희</b></sub></a><br /></td>
     <tr/>
  </tbody>
</table>

