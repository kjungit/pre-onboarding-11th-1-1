import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { getAccessToken } from '../utils/localStorage';

export function Root() {
  const location = useLocation();
  const isLogined = getAccessToken() !== null;

  return (
    <>
      <Header isLogined={isLogined} />
      <Outlet />
      <Footer />
    </>
  );
}
