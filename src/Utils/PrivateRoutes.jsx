import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useIsLoggedIn } from '../config/hooks';
const PrivateRoutes = () => {
  const isLoggedIn = useIsLoggedIn();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
