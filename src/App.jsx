import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './Components/Form';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoutes from './Utils/PrivateRoutes';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/*" exact element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
