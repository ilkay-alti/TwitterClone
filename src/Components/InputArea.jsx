import React from 'react';

export default function InputArea({ ...props }) {
  const [focus, setFocus] = React.useState(false);

  return (
    <label className="block relative py-3 ">
      <input
        className={`${props.css} w-full  h-16 border-2 outline-none bg-black px-3  border-[#333639] rounded-lg focus:border-[#1D9BF0] peer`}
        type={props.type}
        maxLength={props.maxLength}
        required={true}
      />

      <small className=" absolute flex text-lg text-[#E7E9EA] top-1/2 left-3 -translate-y-1/2 cursor-text pointer-events-none peer-valid:scale-[0.8333] peer-valid:top-6 transition-all">
        {props.placeholder}
      </small>
      <small className=" absolute flex text-lg text-[#E7E9EA]  right-2 -translate-y-1/2 cursor-text pointer-events-none peer-valid:visible top-6 scale-[0.8333] invisible peer-valid:visible">
        0 / {props.maxLength}
      </small>
    </label>
  );
}
