import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function DropDownSmall() {
  const [selectlang, setSelectLang] = useState(false);
  const [indexs, setIndexs] = useState(0);

  const options = [
    {
      index: 0,
      label: (
        <>
          <img
            src="https://www.bts.co.th/files/uploads/home-page/img/thai.jpg"
            alt="thai-logo"
            className="nav-small-lang-pic"
          />
          ภาษาไทย
        </>
      ),
    },

    {
      index: 1,
      label: (
        <>
          <img
            src="https://www.bts.co.th/files/uploads/home-page/img/United_Kingdom.png"
            alt="thai-logo"
            className="nav-small-lang-pic"
          />
          ภาษาอังกฤษ
        </>
      ),
    },
  ];

  const langChange = (e, param) => {
    e.preventDefault();
    setIndexs(param.index);
    setSelectLang(!selectlang);
  };

  return (
    <>
      <div
        className="nav-small-lang"
        onClick={() => setSelectLang(!selectlang)}
      >
        <div>{options[indexs].label}</div>
        <div>{selectlang ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
      </div>
      {selectlang ? (
        <ul className="nav-small-lang-ul">
          {options.map((num) => (
            <li key={num.index} onClick={(e) => langChange(e, num)}>
              {num.label}
            </li>
          ))}
        </ul>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default DropDownSmall;
