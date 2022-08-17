import { Outlet, Navigate } from 'react-router-dom';
import { useIsLoggedIn } from '../config/hooks';

const UserLayout = () => {
  const isLoggedIn = useIsLoggedIn();
  if (isLoggedIn === null) {
    return <div className="bg-black w-full h-full">LOADINGGG....</div>;
  } else if (isLoggedIn === false) {
    return <Navigate replace to={'/login'} />;
  }
  return <Outlet />;
};

export default UserLayout;
