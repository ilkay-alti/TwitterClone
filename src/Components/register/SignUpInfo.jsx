import React from 'react';
import InputArea from '../InputArea';

const SignUpInfo = () => {
  const [switchState, setSwitchState] = React.useState(false);
  return (
    <div>
      <InputArea type="text" placeholder="Name" maxLength="50" />

      {switchState ? (
        <InputArea type="phone" placeholder="Phone" maxLength="18" />
      ) : (
        <InputArea type="text" placeholder="Email" maxLength="50" />
      )}
      <div className="text-right">
        <span
          onClick={() => {
            setSwitchState(!switchState);
          }}
          className="cursor-pointer text-[#1D9BF0] underline-offset-2  "
        >
          Use email instead
        </span>
      </div>
      <div className="mt-5">
        <h3 className="text-[15px] text-[#E7E9EA] mb-2 font-bold">
          Date of birth
        </h3>
        <p className="text[#71767B] text-[14px]">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </p>
      </div>
      <div className="my-4"></div>
    </div>
  );
};

export default SignUpInfo;
