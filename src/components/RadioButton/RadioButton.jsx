import React from "react";

export function RadioButton({ name, id, type, formDataHandler, errorField }) {
  return (
    <div className="input-section radio-groups" style={{width:"auto"}}>
      <div className="radio-btn" style={{ width: "50px" }}>
        <label htmlFor="male" className="radio-buttons">
          Male
        </label>
        <input
          id="male"
          type="radio"
          name="gender"
          value="male"
          onChange={formDataHandler}
        />
      </div>
      {errorField.gender && <p className="danger">Gender Name is required</p>}
    </div>
  );
}
