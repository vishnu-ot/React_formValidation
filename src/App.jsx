import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState();
  const [country, setCountry] = useState();
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(fname);
    console.log(email);
    console.log(gender);
    console.log(country);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const fnameHandler = (e) => {
    setFname(e.target.value);
  };
  const genderHandler = (e) => {
    setGender(e.target.value);
  };
  const coutryHandler = (e) => {
    setCountry(e.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="">First Name:</label>
        <input type="text" name="firstname" onChange={fnameHandler} />
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input type="email" name="email" onChange={emailHandler} />
      </div>
      <div>
        <label htmlFor="">Gender:</label>
        <label htmlFor="">Male</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={genderHandler}
        />
        <label htmlFor="">Female</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={genderHandler}
        />
      </div>
      <div>
        <label htmlFor="">Country:</label>
        <select name="country" id="" onChange={coutryHandler}>
          <option value="">Select</option>
          <option value="india">India</option>
          <option value="uae">UAE</option>
          <option value="usa">USA</option>
        </select>
      </div>
      <input type="submit" onSubmit={submitHandler} />
    </form>
  );
}

export default App;
