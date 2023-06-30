import { useEffect } from 'react';
import TodoPage from './pages/TodoPage';
import { TOKEN } from './utils/constants';
import { AuthAPI } from './utils/api';
import { setAccessToken } from './utils/localStorage';

function App() {
  // 임시 코드 (로그인 해야 투두리스트 불러올 수 있기 때문)
  useEffect(() => {
    if (localStorage.getItem(TOKEN)) return;

    AuthAPI.signin({
      email: 'dkssudgktpdy1@',
      password: 'dkssudgktpdy1!',
    }).then(({ access_token }) => {
      setAccessToken(access_token);
    });
  }, []);

  return <TodoPage />;
}

export default App;
