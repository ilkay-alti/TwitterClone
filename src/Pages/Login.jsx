import React from 'react';
import Logo from '../Assets/Logo.svg';
import Logo2 from '../Assets/Logo2.svg';
import AuthButton from '../Components/AuthButton';
const Login = () => {
  return (
    <div className="flex grid-cols-2 h-full ">
      <div className="bg-login-bg bg-center w-full flex justify-center items-center p-8">
        <img src={Logo} className="max-h-[380px]" alt="logo" />
      </div>
      <div className=" min-w-[45vw] bg-black p-4 flex items-center ">
        <div className="p-5">
          <div className="text-[#E7E9EA] font-extrabold  ">
            <img src={Logo2} className=" pb-3" alt="logo" />
            <h1 className="my-12 text-[64px] tracking-[-1.2px]">
              Happening now
            </h1>
            <h3 className="mb-8 text-[31px]">Join Twitter today.</h3>
            <AuthButton css="mb-[20px]">Sign up with Google</AuthButton>
            <AuthButton>Sign up with Apple</AuthButton>
            <div className="flex justify-center items-center my-1 max-w-[300px]">
              <div className="flex-1 h-[1px] bg-white opacity-20" />
              <div className="mx-2 text-[15px]">or</div>
              <div className="flex-1 h-[1px] bg-white opacity-20" />
            </div>
            <AuthButton css="bg-[#1A8CD8] border-[#1A8CD8] text-white mb-[8px]">
              Sign up with phone or email
            </AuthButton>
            <h5 className="text-[11px] mb-5 text-[#71767B]">
              By signing up, you agree to the Terms of Service and Privacy
              <br />
              Policy, including Cookie Use.
            </h5>
            <div className="mt-10">
              <h3 className="mb-5">Already have an account?</h3>
              <AuthButton css="bg-[#000] text-[#1D9BF0] border-[#1D9BF0]">
                Sign in
              </AuthButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
