<div align="center">
  <img width="470" alt="preonboarding" src="https://github.com/khkh0109/frontend-mentor-challenges/assets/77181642/1fc461e0-3112-4b89-8be9-d55858f1124b">
</div>

<div align="center">
<h1>원티드 프리온보딩 프론트엔드 인턴십 1주차 과제 </h1>	

> 동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 인턴십 선발 과제의 Best Pratice를 만들고 제출해주세요. <br/>
> Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.

진행 기간: 2023.06.27 ~ 2023.06.30
</div>

<br/>
<br/>

<div align="center">
<h2>😃 팀원</h2>

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/kjungit"><img src="https://avatars.githubusercontent.com/u/100064540?v=4" width="100px;" alt=""/><br /><sub><b>권범준(팀장)</b></sub></a><br /></td>
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
</div>

<br/>
<br/>
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

<br/>

## 🔗 배포 링크
https://pre-onboarding-11th-1-1.vercel.app/

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
|권범준|[@kjungit](https://github.com/kjungit/wanted-pre-onboarding-frontend)|
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
📦src
  ├── 📄index.css
  ├── 📄index.tsx
  ├── 📄App.tsx
  ├── 📂components
  ├── 📂hooks
  ├── 📂pages
  ├── 📂routers
  ├── 📂types
  └── 📂utils
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
|![회원가입](https://github.com/khkh0109/frontend-mentor-challenges/assets/77181642/9c9a8120-7b5a-430e-a7ea-d83de3401eb1)|

|**로그인**|
| --- |
|![로그인](https://github.com/khkh0109/frontend-mentor-challenges/assets/77181642/a6c68a93-31a5-44b7-a4d5-39ae565bdf6a)|

|**Todo**|
| --- |
|![todo](https://github.com/khkh0109/frontend-mentor-challenges/assets/77181642/bade3616-3715-42f6-9542-87fcbd2f83f7)|


<br/>

## 👑 Best Practice
### 선정 기준 
1. 코드의 가독성 및 재사용성
- 가독성은 협업을 하면서도 중요하며, 유지 보수성을 향상
- 중복 코드를 최소화 하고 재사용 가능한 유틸리티 함수 작성(useHook)
2. 확장성 
- 애플리케이션의 기능을 유연하게 확장하고 유지 관리할 수 있도록 작성
3. 사용자 편의성 
- 사용자들이 웹 또는 앱 인터페이스를 쉽게 이해하고 조작할 수 있도록 설계

### 수행 방향 
- Best Practice를 선정하기전 각자 구현한 코드를 설명하며 코드리뷰를 진행
- 각자 맡은 코드 구현 방법들을 정리 후 스크럼을 통해 Best Practice 선정
- 코드컨벤션 및 언어, 라이브러리, 폴더구조 정리
- Best Practice로 뽑힌 구현방식중 구현하지 않은 부분들을 나누어 업무 분담
- 이슈 작성 및 개별적으로 코드 구현 후 pr 후 코드리뷰를 진행 하고 merge

### 구현사항 
---
### 📌 Todo 컴포넌트
1. Todo 관련 로직을 커스텀 훅으로 분리
- 기존 TodoPage와 TodoList에 혼재돼있던 Todo 관련 로직을 `useTodo` 라는 커스텀 훅으로 분리시킴. 이러한 분리는 다음의 이점을 가진다고 판단함
	- Todo 관련 로직은 `useTodo` 훅에 의해 관리되며, 이로 인해 응집력과 유지보수성이 향상됨
    - 추후에 Todo를 저장하는 방식이 변경된다면 `useTodo` 훅 내에서만 수정하면 됨
  - TodoPage 컴포넌트에서 비즈니스 로직을 분리함으로써, TodoPage 컴포넌트의 코드가 간결해지고 관심사가 분리됨

2. Todo 아이템의 수정 상태를 state 변수로 관리
- 투두 아이템의 수정 상태를 TodoItem 내의 상태 변수로 관리할지, Todo 객체의 속성으로 관리할지에 대한 논의 후에 상태 변수로 결정
  1) TodoItem 컴포넌트 내의 상태 변수로 수정 상태 관리
    ```tsx
    export default function TodoItem({id, todo, isCompleted, updateTodo, deleteTodo
    }: TodoItemProps) {
      const [isOnModify, setIsOnModify] = useState(false);
    ```

  2) TOdo 객체의 속성으로 수정 상태를 관리
    ```tsx
    export interface Todo {
      id: number;
      isCompleted: boolean;
      todo: string;
      isOnModify: boolean; // 추가
    }
    ```

    후자의 접근 방식은 Todo를 수정할 때마다 선택된 Todo에 해당하는 Todo를 Todo 배열에서 검색해야 하는 비효율이 존재함. 또한, Todo 배열을 관리하는 부모 (TodoPage) 컴포넌트부터 리랜더링이 되어야 한다는 단점이 존재함

    반면, 전자의 접근 방식은 불필요한 반복문을 돌리지 않아도 되고 자식 (TodoItem) 컴포넌트만 리랜더링됨

3. Todo 수정 시 setTodo 호출로 리랜더링하기
- Todo를 수정한 후, 변경된 Todo를 화면에 표시하기 위해 두 가지 방법이 존재함
  1) `getTodos` API를 호출하여 전체 Todo 배열을 업데이트하는 방법
  2) `setTodos`만 호출하는 방법

  Todo 수정할 때 `getTodos` API를 다시 호출하면 저장 시 깜빡임 현상이 나타남
  update api 호출이 성공했다면, todo가 정상적으로 업데이트되었단 것이 때문에 `getTodos` api를 다시 호출할 필요가 없다고 판단되어 `setTodos`만 호출하기로 함
  이 방식은 불필요한 네트워크 요청과 깜빡임 문제를 없앨 수 있음


<br/>

### 📌 확장성을 고려한 validation 유틸 함수

- input values를 입력 받아 error message와 isDiabled 요소를 리턴해주는 유틸 함수
- 유효성 검사 로직을 매개변수로 분리하여 유틸 함수를 사용하는 곳에서 유효성 검사 로직을 작성할 수 있도록 확장성 있게 구현

```tsx
const validateInput = ({ authInput, validate }) => {
  const error = validate(authInput);

  const isValid = () => {
    return (
      Object.values(error).every((err) => err === '') &&
      Object.values(authInput).every((val) => val !== '')
    );
  };

  return {
    error,
    isDisabled: !isValid(),
  };
};
```

<br/>

### 📌 localStorage 함수화
- localStorage key가 변경될 수 있으니 함수로 관리하는게 유지보수 측면에서 효과적일 것이라고 판단 
- get, remove시 key를 전달하지 않아도 함수만 사용하면 바로 토큰을 다룰 수 있게 변경 

```ts
export const getAccessToken = (): string | null => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken;
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const removeAccessToken = () => {
  localStorage.removeItem('accessToken');
};
```

<br/>

### 📌 axios 인스턴스 생성
- 논의: 토큰이 필요한 요청과 필요없는 요청의 인스턴스를 분리 vs 한가지 인스턴스만 두고 토큰 유무에따라 다르게 처리
- 문제점: axios 인스턴스가 굳이 2개라 코드가 길어졌고, 다른 컴포넌트에서 쓸 때 토큰이 필요한 요청인지 아닌 요청인지 각자 구분해서 써야해서 번거로움

```ts
//토큰이 필요한 요청과 필요없는 요청의 인스턴스를 분리
//다른 컴포넌트에서 토큰이 필요한 요청이면 tokenRequest 사용
//토큰이 필요없는 요청이면 nonTokenRequest 사용
const BASE_URL = process.env.REACT_APP_BASE_URL;
const nonTokenRequest = axios.create({ baseURL: BASE_URL });
const tokenRequest = axios.create({ baseURL: BASE_URL }
{
        headers: {
          "Content-Type": "application/json",
        },
      }
);
)

tokenRequest.interceptors.request.use(config => {
  config.headers = {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  };

  return config;
});
```

- 해결법:
  - axios 인스턴스를 애초에 하나만 두고 localstorage에 토큰이 있다면 이제는 토큰이 필요한 요청밖에 없으므로 localstorage에 토큰 유무만 확인
  - 또한 localstorage에 토큰을 불러올 때 만약 토큰이 없다면 null로 받아지므로 헤더에는 아무것도 담기지 않게 구현

```ts
//한가지 인스턴스만 두고 토큰 유무에따라 다르게 처리
export const API = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
```

<br/>

### 📌 api요청 처리 방법 선택
- 논의: 클래스 문법을 사용한 정적 메서드vs 객체의 메서드
- 문제점 : 하드코딩된 요청 URL, 코드의 중복, 코드의 구조화부재로 가독성 저해

```ts
export const TodoAPI = {
async get(): Promise<ITodoResponse[]> {
    const { data } = await API.get('/todos');
    return data;
  }

  async post(todo: string): Promise<ITodoResponse> {
    const { data } = await API.post('/todos', todo);
    return data;
  }

  async put(todo: ITodo, id: number): Promise<ITodoResponse> {
    const { data } = await API.put(`/todos/${id}`, todo);
    return data;
  }

  async delete(id: number): Promise<string> {
    const { data } = await API.delete(`/todos/${id}`);
    return data;
  }
}
```

- 해결법: 
  - 클래스 구조와 객체지향적인 접근으로 코드의 구조화와 모듈화시켜 코드 가독성 향상
  - private 멤버를 사용하여 정보 은닉과 캡슐화, 공통 요청 URL을 관리하여 코드의 재사용성과 중복 제거하고 유지보수성을 향상
```ts
export class TodoAPI {
  private static TODOS = '/todos';

  static async get(): Promise<ITodoResponse[]> {
    const { data } = await API.get(this.TODOS);
    return data;
  }

  static async post(todo: string): Promise<ITodoResponse> {
    const { data } = await API.post(this.TODOS, todo);
    return data;
  }

  static async put(todo: ITodo, id: number): Promise<ITodoResponse> {
    const { data } = await API.put(`${this.TODOS}/${id}`, todo);
    return data;
  }

  static async delete(id: number): Promise<string> {
    const { data } = await API.delete(`${this.TODOS}/${id}`);
    return data;
  }
}
```

<br/>

### 📌 createBrowserRouter
- browserRouter와 차이점이라기 보다는 리액트에 새로운 개념들을 사용할 수 있고 많은 기능들이 추가되어 있음
- loader, action 과 같은 비동기 동작들을 params로 전달하여 사용

#### 1. App.tsx 에서 RouterProvider 연결
```tsx
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to='/todo' />,
      },
      {
        path: 'join',
        element: <JoinPage />,
        loader: redirectTodo,
      },
      {
        path: 'login',
        element: <LoginPage />,
        loader: redirectTodo,
      },
      {
        path: 'todo',
        element: <TodoPage />,
        loader: redirectLogin,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
```
#### 라우팅 구현 설명
- 라우팅할 path, element를 작성하여 라우팅 설정
- children에서는 배열에 중첨된 라우터를 추가하여 사용
- 현재 todo 에서는 “/“ 메인 페이지를 사용하지 않기에 index값을 true로 설정하여 “/” 접근시 “/todo”페이지로 전환되도록 설정


#### 2. Outlet
```tsx
export function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
```
#### Outlet 구현 설명
- root경로에서 Header, Footer 설정


#### 3. redirect
```tsx
export const redirectPage = () => {
  const token = getAccessToken();

  if (token === null) {
    return redirect('/login');
  } else {
    return redirect('/todo');
  }
};

export const redirectLogin = () => {
  const token = getAccessToken();

  if (token === null) {
    return redirect('/login');
  }

  return null;
};

export const redirectTodo = () => {
  const token = getAccessToken();

  if (token) {
    return redirect('/todo');
  }

  return null;
};
```
#### redirect 구현 설명
- createBrowserRouter에서 loader로 페이지 접근시 token확인 후 redirect 처리되도록 설정

<br/>


