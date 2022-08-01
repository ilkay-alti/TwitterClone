import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeEmail, changePhone, changeName } from '../Redux/authSlice';

export default function InputArea({ ...props }) {
  const [leng, setleng] = React.useState(0);
  const dispatch = useDispatch();
  const handleSelectChange = (e) => {
    if (props.placeholder === 'Name') {
      dispatch(changeName(e.target.value));
      setleng(e.target.value.length);
    }
    if (props.placeholder === 'Email') {
      dispatch(changeEmail(e.target.value));
      setleng(e.target.value.length);
    }
    if (props.placeholder === 'Phone') {
      dispatch(changePhone(e.target.value));
      setleng(e.target.value.length);
    }
  };

  console.log(useSelector((state) => state.auth));
  return (
    <label className="block relative py-3 ">
      <input
        className={`${props.css} w-full  h-16 border-2 outline-none bg-black px-3  border-[#333639] rounded-lg focus:border-[#1D9BF0] peer`}
        type={props.type}
        maxLength={props.maxLength}
        required={true}
        onChange={handleSelectChange}
      />

      <small className=" absolute flex text-lg text-[#E7E9EA] top-1/2 left-3 -translate-y-1/2 cursor-text pointer-events-none peer-valid:scale-[0.8333] peer-focus:scale-[0.8333] peer-focus:top-6 peer-valid:top-6 peer-valid:text-[#1D9BF0] peer-focus:text-[#1D9BF0] transition-all">
        {props.placeholder}
      </small>
      <small className=" absolute flex text-lg text-[#E7E9EA]  right-2 -translate-y-1/2 cursor-text pointer-events-none top-6 scale-[0.8333] invisible  peer-focus:visible ">
        {leng} / {props.maxLength}
      </small>
    </label>
  );
}
