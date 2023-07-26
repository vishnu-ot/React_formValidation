import React from "react";

export function InputFields({ formDataHandler, type, name, id, errorField }) {
  return (
    <div className="input-section">
      <label htmlFor="fname">{name}</label>
      <input type={type} name={name} onChange={formDataHandler} id={id} />
      {errorField.firstname && <p className="danger">First Name is required</p>}
    </div>
  );
}
