import React from "react";
import { upperCaseFirst } from "upper-case-first";
export function InputFields({ formDataHandler, type, name, id, errorField, isValidOnBlur }) {
  return (
    <div className="input-section">
      <label htmlFor="fname">{upperCaseFirst(name)}</label>
      <input type={type} name={name} onChange={formDataHandler} id={id} onBlur={isValidOnBlur} />
    </div>
  );
}
 