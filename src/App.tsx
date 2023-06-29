import { useEffect } from 'react';
import TodoPage from './pages/TodoPage';
import { AuthApi } from './apis/lib/auth';
import { TOKEN } from './utils/constants';

function App() {
  // 임시 코드 (로그인 해야 투두리스트 불러올 수 있기 때문)
  useEffect(() => {
    if (localStorage.getItem(TOKEN)) return;

    AuthApi.signIn('dkssudgktpdy1@', 'dkssudgktpdy1!').then(
      ({ access_token }) => {
        localStorage.setItem(TOKEN, access_token);
      },
    );
  }, []);

  return <TodoPage />;
}

export default App;
