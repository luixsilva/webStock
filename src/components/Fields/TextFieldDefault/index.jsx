import React from "react";
import "../TextFieldDefault/index.css";

export const Field = ({ label, type, name, id, placeholder }) => {
  return (
    <>
      {/* <div className="field-container"> */}
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
        <input
          className="field-input"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      {/* </div> */}
    </>
  );
};
