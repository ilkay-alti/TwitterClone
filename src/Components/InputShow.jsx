import React from 'react';

export default function InputArea({ ...props }) {
  return (
    <div className="p-3">
      <button className=" flex flex-col py-3  w-full  h-16 border-2 outline-none bg-black px-3  border-[#333639] rounded-lg  ">
        <div className="  flex text-lg text-[#E7E9EA] left-3 -translate-y-1/2 scale-[0.8333]   ">
          {props.placeholder}
        </div>
        <div className={`${props.css} -mt-3 mx-2`}>{props.defaultValue}</div>
      </button>
    </div>
  );
}
