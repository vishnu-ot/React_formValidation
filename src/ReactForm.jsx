import React, { useState } from "react";
import "./styles/global.css";
import "./App.css";
function ReactForm() {
  const formHandler = (e) => {
    e.preventDefault();
   
    if (formValidate()) {
      return;
    } else {
      console.log("something went wrong");
    }
    if (emailValidate()) {
      return;
    } else {
      console.log("something went wrong");
    }

    if (genderValidate()) {
      return;
    } else {
      console.log("something went wrong");
    }
    if (countryValidate()) {
      return;
    } else {
      console.log("something went wrong");
    }
  };

  const [formFields, setFormFields] = useState({
    firstname: "",
    email: "",
    country: "",
    gender: "",
  });

  const [errorField, setErrorField] = useState({
    firstname: false,
    email: false,
    country: false,
    gender: false,
  });
  console.log(errorField);
  const inputHandler = (e) => {
    let { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formValidate = () => {
    if (formFields.firstname == "") {
      setErrorField((prev) => ({
        ...prev,
        firstname: true,
      }));
      return false;
    } else {
      setErrorField((prev) => ({
        ...prev,
        firstname: false,
      }));
      return true;
    }
  };
  const emailValidate = () => {
    if (formFields.email == "") {
      setErrorField((prev) => ({
        ...prev,
        email: true,
      }));
      return false;
    } else {
      setErrorField((prev) => ({
        ...prev,
        email: false,
      }));
      return true;
    }
  };
  const genderValidate = () => {
    if (formFields.gender == "") {
      setErrorField((prev) => ({
        ...prev,
        gender: true,
      }));
      return false;
    } else {
      setErrorField((prev) => ({
        ...prev,
        gender: false,
      }));
      return true;
    }
  };
  const countryValidate = () => {
    if ((formFields.country = "")) {
      setErrorField((prev) => ({
        ...prev,
        country: true,
      }));
      return false;
    } else {
      setErrorField((prev) => ({
        ...prev,
        country: false,
      }));
      return true;
    }
  };

  return (
    <form onSubmit={formHandler} autoComplete="off">
      <h1>Registration Form</h1>
      <p className="caption"> Please fill the form</p>
      <div className="input-section">
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          name="firstname"
          onChange={inputHandler}
          id="fname"
        />
        {errorField.firstname && (
          <p className="danger">First Name is required</p>
        )}
      </div>
      <div className="input-section">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={inputHandler} id="email" />
        {errorField.email && <p className="danger">Email is required</p>}
      </div>
      <div className="input-section radio-groups">
        <label htmlFor="" className="gender-label">
          Gender
        </label>
        <div>
          <label htmlFor="male" className="radio-buttons">
            Male
          </label>
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            onChange={inputHandler}
          />
          <label htmlFor="female" className="radio-buttons female-radio">
            Female
          </label>
          <input
            id="female"
            type="radio"
            value="female"
            name="gender"
            onChange={inputHandler}
          />
        </div>
        {errorField.gender && <p className="danger">Gender Name is required</p>}
      </div>
      <div className="input-section drop-down">
        <label htmlFor="">Country:</label>
        <select name="country" id="" onChange={inputHandler}>
          <option value="" className="select-option">
            Select
          </option>
          <option className="select-option" value="india">
            {" "}
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
      <input type="submit" className="button" />
    </form>
  );
}

export default ReactForm;
