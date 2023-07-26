import React, { useState } from "react";
import "./styles/global.css";
import "./App.css";
import { InputFields } from "./components/InputFields/InputFields";
import { RadioButton } from "./components/RadioButton/RadioButton";
import SelectItems from "./components/SelectItems/SelectItems";
export function App() {
  const formHandler = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const [formFields, setFormFields] = useState({
    firstname: "",
    email: "",
    country: "",
    gender: "",
    skills: [],
  });
  const formDataHandler = (event) => {
    const { name, value } = event.target;
    console.log(value, ".....typing data");
    console.log(name, "....name");
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [errorField, setErrorField] = useState({
    firstname: false,
    email: false,
    country: false,
    gender: false,
    skills: false,
  });

  return (
    <form onSubmit={formHandler} autoComplete="off">
      <h1>Registration Form</h1>
      <p className="caption"> Please fill the form</p>
      <InputFields
        formDataHandler={formDataHandler}
        type="input"
        name="firstname"
        id="firstname"
        errorField={errorField}
      />
      <InputFields
        formDataHandler={formDataHandler}
        type="email"
        name="email"
        id="email"
        errorField={errorField}
      />
      <label htmlFor="" className="gender-label">
        Gender
      </label>{" "}
      <div className="gender-grps">
        <RadioButton type="radio" errorField={errorField} />
        <RadioButton type="radio" errorField={errorField} />
      </div>
      <SelectItems
        name="country"
        errorField={errorField}
        formDataHandler={formDataHandler}
      />
      {/* <div className="input-section drop-down">
        <label htmlFor="">Country:</label>
        <select name="country" id="" onChange={formDataHandler}>
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
      </div> */}
      <div className="input-section">
        <div>
          <label htmlFor="" className="skill-label">
            Skills
          </label>
          <input
            type="checkbox"
            name="skills"
            id="javascript"
            value="javascript"
            className="checkbox-group"
          />
          <label htmlFor="javascript" className="checkbox-label">
            JavaScript
          </label>
          <input
            type="checkbox"
            name="skills"
            id="react"
            value="react"
            className="checkbox-group"
          />
          <label htmlFor="react" className="checkbox-label">
            React
          </label>
          <input
            type="checkbox"
            name="skills"
            id="angular"
            value="angular"
            className="checkbox-group"
          />
          <label htmlFor="angular" className="checkbox-label">
            Angular
          </label>
        </div>
      </div>
      <input type="submit" className="button" />
    </form>
  );
}
