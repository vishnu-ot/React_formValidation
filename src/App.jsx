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

    if (validationOnSubmit()) {
      alert("Form submitted successfully");
    }
    console.log("Somrthing is wrong");
  };

  const [newCheckBoxItems, setNewCheckBoxItems] = useState([]);
  const validationOnSubmit = () => {
    const errors = {
      firstname: false,
      email: false,
      country: false,
      gender: false,
      skills: false,
    };
    if (formFields.firstname === "") {
      errors["firstname"] = true;
    }
    if (formFields.email === "") {
      errors["email"] = true;
    }
    if (formFields.country === "") {
      errors["country"] = true;
    }
    if (formFields.firstname === "") {
      errors["firstname"] = true;
    }
    if (formFields.gender === "") {
      errors["gender"] = true;
    }
    if (formFields.skills === "") {
      errors["skills"] = true;
    }

    setErrorField(errors);

    if (Object.values(errors).some((value) => value === true)) {
      return false;
    }
    return true;
  };

  const [formFields, setFormFields] = useState({
    firstname: "",
    email: "",
    country: "",
    gender: "",
    skills: [],
  });

  const [errorField, setErrorField] = useState({
    firstname: false,
    email: false,
    country: false,
    gender: false,
    skills: false,
  });

  const formDataHandler = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
    isValidOnBlur(event);
  };

  const isValidOnBlur = (e) => {
    const { name, value } = e.target;
    let error = false;
    if (name === "firstname" && value === "") {
      error = true;
    } else if (
      name === "email" &&
      (value === "" ||
        !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          value
        ))
    ) {
      error = true;
    } else if (name === "country" && value === "") {
      error = true;
    } else if (name === "gender" && value === "") {
      error = true;
    }
    setErrorField((prev) => {
      return { ...prev, [name]: error };
    });
  };

  const checkBoxHandler = (e) => {
    let newCheckBoxItems = [...formFields.skills];
    if (e.target.checked) {
      newCheckBoxItems.push(e.target.value);
    } else {
      newCheckBoxItems = newCheckBoxItems.filter(
        (item) => item !== e.target.value
      );
    }
    setFormFields((prev) => {
      return { ...prev, [e.target.name]: newCheckBoxItems };
    });
  };
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
        isValidOnBlur={isValidOnBlur}
      />
      {errorField.firstname && <p className="danger">First Name is required</p>}
      <InputFields
        formDataHandler={formDataHandler}
        type="email"
        name="email"
        id="email"
        errorField={errorField}
        isValidOnBlur={isValidOnBlur}
      />
      {errorField.email && <p className="danger">Email is required</p>}
      <label htmlFor="" className="gender-label">
        Gender
      </label>{" "}
      <div className="gender-grps">
        <RadioButton
          type="radio"
          errorField={errorField}
          name="gender"
          value="female"
          id="female"
          formDataHandler={formDataHandler}
          isValidOnBlur={isValidOnBlur}
        />
        <RadioButton
          type="radio"
          errorField={errorField}
          name="gender"
          value="male"
          id="male"
          formDataHandler={formDataHandler}
          isValidOnBlur={isValidOnBlur}
        />
      </div>
      {errorField.gender && <p className="danger"> Gender is required</p>}
      <SelectItems
        name="Country"
        errorField={errorField}
        formDataHandler={formDataHandler}
        isValidOnBlur={isValidOnBlur}
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
            onChange={checkBoxHandler}
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
            onChange={checkBoxHandler}
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
            onChange={checkBoxHandler}
          />
          <label htmlFor="angular" className="checkbox-label">
            Angular
          </label>
        </div>
      </div>
      {errorField.skills && <p className="danger">Skill is required</p>}
      <input type="submit" className="button" />
    </form>
  );
}
