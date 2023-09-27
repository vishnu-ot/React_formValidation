import React from "react";

function SelectItems({ name, errorField, formDataHandler,  isValidOnBlur }) {
  return (
    <div className="input-section drop-down">
      <label htmlFor="">{name}</label>
      <select name="country" id="" onChange={formDataHandler} onBlur={isValidOnBlur}>
        <option value="" className="select-option">
          Select
        </option>
        <option className="select-option" value="india">
          India
        </option>
        <option className="select-option" value="uae">
          UAE
        </option>
        <option className="select-option" value="usa">
          USA
        </option>
      </select>
      {errorField.country && <p className="danger">Country is required</p>}
    </div>
  );
}

export default SelectItems;
