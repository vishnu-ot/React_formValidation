import React from "react";
import { upperCaseFirst } from "upper-case-first";
import './RadioButton.css'
export function RadioButton({
  name,
  id,
  type,
  formDataHandler,
  errorField,
  isValidOnBlur,
  value,
}) {
  return (
    <div className="input-section radio-groups" style={{ width: "auto" }}>
      <div className="radio-btn" style={{ width: "50px" }}>
        <label htmlFor={id} className="radio-buttons">
          {upperCaseFirst(id)}
        </label>
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          onBlur={isValidOnBlur}
          onChange={formDataHandler}
        />
      </div>
    </div>
  );
}
