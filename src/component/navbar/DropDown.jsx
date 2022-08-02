import React from "react";
import Select from "react-select";

function DropDown() {
  const colourStyles = {
    control: (styles, state) => ({
      ...styles,
      background: "none",
      border: "none",
      boxShadow: state.isFocused ? null : null,
      zIndex: 2,
      "&:hover": {
        color: "#5fb100",
      },
    }),

    singleValue: (styles, state) => ({
      ...styles,
      color: "inherit",
    }),

    dropdownIndicator: (styles, state) => ({
      ...styles,
      color: state.isFocused ? "inherit" : "inherit",
      "&:hover": {
        color: "#5fb100",
      },
    }),

    option: (styles, state) => {
      return {
        ...styles,
        color: "black",
        cursor: state ? "not-allowed" : "default",
      };
    },
  };

  const options = [
    {
      value: "thai",
      label: (
        <div>
          <img
            src={"https://www.bts.co.th/files/uploads/home-page2/img/thai.png"}
            style={{ width: "20px", marginRight: "5px" }}
            alt="thai-logo"
          />
          ภาษาไทย
        </div>
      ),
    },
    {
      value: "eng",
      label: (
        <div>
          <img
            src={"https://www.bts.co.th/files/uploads/home-page2/img/eng.png"}
            style={{ width: "20px", marginRight: "5px" }}
            alt="eng-logo"
          />
          ภาษาอังกฤษ
        </div>
      ),
    },
  ];

  return (
    <Select
      components={{
        IndicatorSeparator: () => null,
      }}
      styles={colourStyles}
      options={options}
      defaultValue={options[0]}
    />
  );
}

export default DropDown;
