import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDay, changeMounth, changeYear } from '../Redux/authSlice';

export default function DateArea({ ...props }) {
  const [focus, setFocus] = React.useState(false);
  const dispatch = useDispatch();
  const handleSelectChange = (e) => {
    if (props.placeholder === 'Day') {
      dispatch(changeDay(e.target.value));
      setFocus(true);
    }
    if (props.placeholder === 'Mounth') {
      dispatch(changeMounth(e.target.value));
      setFocus(true);
    }
    if (props.placeholder === 'Year') {
      dispatch(changeYear(e.target.value));
      setFocus(true);
    }
  };
  console.log(useSelector((state) => state.auth));
  return (
    <label className={`${props.css} relative block`}>
      <select
        onChange={handleSelectChange}
        className={`w-full h-14 border-2 outline-none bg-black px-3  border-[#333639] focus:border-[#1D9BF0] rounded-lg peer relative pt-3`}
      >
        <option value="" selected disabled hidden></option>
        {props.dataSource.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <small
        className={classNames({
          'absolute flex text-lg top-1/2 text-[#E7E9EA] left-3 -translate-y-1/2 cursor-text pointer-events-none scale-[0.8333] peer-focus:scale-[0.8333]  peer-focus:top-3  peer-focus:text-[#1D9BF0] transition-all': true,
          'top-3': focus === true,
        })}
      >
        {props.placeholder}
      </small>
    </label>
  );
}
