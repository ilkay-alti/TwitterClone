import React from 'react';
import { useDispatch } from 'react-redux';
import { singOut } from '../Redux/authSlice';
const Home = () => {
  const dispatch = useDispatch();

  const handleSingOut = (e) => {
    dispatch(singOut());
  };

  return (
    <div>
      <div>Home</div>
      <button onClick={handleSingOut} className="w-fit h-fit bg-red-400">
        Click
      </button>
    </div>
  );
};

export default Home;
