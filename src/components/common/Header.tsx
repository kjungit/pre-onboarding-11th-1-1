import { Link, useNavigate } from 'react-router-dom';
import { getAccessToken, removeAccessToken } from '../../utils/localStorage';
import { PATH } from '../../utils/constants';

function Header() {
  const isLogined = getAccessToken();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeAccessToken();
    navigate(`/${PATH.signIn}`);
  };

  return (
    <header className='bg-black'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between '>
          <Link to={`/${PATH.todo}`}>
            <h1 className='text-sm font-bold text-white sm:text-xl'>
              wanted-pre-onboarding-frontend
            </h1>
          </Link>
          {isLogined ? (
            <div>
              <button
                onClick={handleLogout}
                className='nline-flex items-center justify-center rounded-md p-2 font-bold text-gray-200 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              >
                로그아웃
              </button>
            </div>
          ) : (
            <div className='flex text-sm sm:text-[16px] '>
              <Link
                to={`/${PATH.signIn}`}
                className='nline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              >
                로그인
              </Link>
              <Link
                to={`/${PATH.signUp}`}
                className='nline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              >
                회원가입
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
