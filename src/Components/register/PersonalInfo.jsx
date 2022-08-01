import React from 'react';
import InputShow from '../InputShow';
import { useDispatch, useSelector } from 'react-redux';

const PersonalInfo = ({ setPage }) => {
  const email = useSelector((state) => state.auth.email);
  const phone = useSelector((state) => state.auth.phone);
  const name = useSelector((state) => state.auth.name);
  const day = useSelector((state) => state.auth.day);
  const mounth = useSelector((state) => state.auth.mounth);
  const year = useSelector((state) => state.auth.year);
  return (
    <div>
      <InputShow placeholder="Name" defaultValue={name} setPage={setPage} />
      <InputShow placeholder="Email" defaultValue={email} setPage={setPage} />
      <InputShow
        placeholder="Birth Date"
        defaultValue={mounth + ' ' + day + ',' + year}
        setPage={setPage}
      />
    </div>
  );
};

export default PersonalInfo;
