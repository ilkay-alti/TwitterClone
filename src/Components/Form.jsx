import React from 'react';
import { useState } from 'react';
import SignUpInfo from './register/SignUpInfo';
import PersonalInfo from './register/PersonalInfo';
import OtherInfo from './register/OtherInfo';

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    username: '',
    nationality: '',
    other: '',
  });

  const FormTitles = ['Create your account', 'Personal Info', 'Other'];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };
  console.log(page);
  return (
    <form className="absolute m-auto top-0 left-0 bottom-0 right-0 bg-black w-[600px] h-[650px] text-[#E7E9EA] ">
      {/* //! Header */}
      <div className="flex items-center h-[53px] px-4 text-xl font-bold  ">
        <button className="min-w-[56px] h-[28px]  ">
          <h1 className="h-[28px] w-[28px] rounded-full hover:opacity-100 hover:bg-white hover:bg-opacity-20 ">
            x
          </h1>
        </button>
        <h1>
          Step {page + 1} of {FormTitles.length}
        </h1>
      </div>
      <h1 className="text-white">{FormTitles[page]}</h1>
      <div className="p-20">
        {/* //! Body */}
        <div>{PageDisplay()}</div>
        {/* //!Footer */}
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          className="w-full h-[50px] bg-white rounded-full text-black"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Form;
