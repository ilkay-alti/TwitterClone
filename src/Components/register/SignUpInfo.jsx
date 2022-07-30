import React from 'react';
import DateArea from '../DateArea';
import InputArea from '../InputArea';

const SignUpInfo = () => {
  const [switchState, setSwitchState] = React.useState(false);
  const [day, setDay] = React.useState([]);
  const [mounth, setMounth] = React.useState([]);
  const [year, setYear] = React.useState([]);

  React.useEffect(() => {
    setDay([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
    ]);
    setMounth([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);
    setYear([
      '1990',
      '1991',
      '1992',
      '1993',
      '1994',
      '1995',
      '1996',
      '1997',
      '1998',
      '1999',
      '2000',
      '2001',
      '2002',
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
    ]);
  }, []);

  return (
    <div>
      <InputArea type="text" placeholder="Name" maxLength="50" />

      {switchState ? (
        <InputArea type="tel" placeholder="Phone" maxLength="18" />
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
      <div className="my-4 flex flex-row gap-x-4">
        <DateArea dataSource={mounth} placeholder="Mounth" css=" basis-1/2" />
        <DateArea dataSource={day} placeholder="Day" css=" basis-1/4" />
        <DateArea dataSource={year} placeholder="Year" css=" basis-1/4" />
      </div>
    </div>
  );
};

export default SignUpInfo;
