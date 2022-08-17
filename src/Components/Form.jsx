import React from 'react';
import { useState } from 'react';
import SignUpInfo from './register/SignUpInfo';
import PersonalInfo from './register/PersonalInfo';
import PersonalPassword from './register/PersonalPassword';
import Close from '../Assets/Close.svg';
import BackArrow from '../Assets/BackArrow.svg';
import { useDispatch, useSelector } from 'react-redux';
import { stateChangeEmail } from '../Redux/loginSlice';
import { register } from '../Redux/authSlice';

const Form = () => {
  const [page, setPage] = useState(0);
  const FormTitles = [
    'Create your account',
    'Personal Info',
    'Personal Password',
  ];
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const err = useSelector((state) => state.auth.error);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(register({ name, email, password }));
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo />;
    } else if (page === 1) {
      return <PersonalInfo />;
    } else {
      return <PersonalPassword />;
    }
  };
  return (
    <>
      <div className="absolute m-auto top-0 left-0 bottom-0 right-0 bg-black w-[600px] h-[650px] text-[#E7E9EA] rounded-2xl">
        {/* //! Header */}

        <div className="flex items-center h-[53px] px-4 text-xl font-bold  ">
          <button className="min-w-[56px] h-[28px]  ">
            <h1 className="h-[28px] w-[28px] rounded-full hover:opacity-100 hover:bg-white hover:bg-opacity-20 p-1 ">
              {page === 0 ? (
                <button
                  onClick={() => {
                    dispatch(stateChangeEmail());
                  }}
                >
                  <img src={Close} className=" pb-3" alt="logo" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setPage(page - 1);
                  }}
                >
                  <img src={BackArrow} className=" pb-3" alt="logo" />
                </button>
              )}
            </h1>
          </button>
          <h1>
            Step {page + 1} of {FormTitles.length}
          </h1>
        </div>

        {/* //! Body */}
        <div className="px-20  ">
          <div>
            <h1 className="h-[76px] flex items-center text-[31px] font-bold text-white">
              {FormTitles[page]}
            </h1>
            {err && <div className="text-red-500">{err}</div>}
            {PageDisplay()}
          </div>
        </div>

        {/* //!Footer */}
        <div className="px-20 ">
          <button
            onClick={() => {
              page === FormTitles.length - 1
                ? handleSubmit()
                : setPage(page + 1);
            }}
            disabled={page === FormTitles.length + 1}
            className="w-full h-[50px] bg-white rounded-full text-black my-6  "
          >
            {page === 2 ? 'Sign Up' : 'Next'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
