import React from "react";
import { useState } from "react";
import FormStyles from "./Form.module.css";

function CustomFormValidation() {
  let [formData, setFormData] = useState({
    fn: "",
    mob: "",
    email: "",
    pass: "",
    cpass: "",
  });
  let [error, setError] = useState({});
  let [submittedData,setSubmittedData] = useState([])


  let handleSubmit = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  let submitData = (e) => {
    e.preventDefault();
    setError(validate(formData));
    let StoredData = [...submittedData,formData]
    localStorage.setItem('submittedData', JSON.stringify(submittedData))
    setSubmittedData(StoredData)
    setFormData({ fn: "", mob: "", email: "", pass: "", cpass: "" });
  };

  let validate = (fdata) => {
    let errorMessage = {};

    //^ Name Validation
    if (fdata.fn === "") {
      errorMessage.messagefn = "Name should not be Empty";
    } else if (fdata.fn.length < 6) {
      errorMessage.messagefn = "Character should be More than 6";
    }

    //^ Mobile Validation
    if (fdata.mob === "") {
      errorMessage.messagemob = "Mobile Number shoul not be Empty";
    } else if (fdata.mob.length !== 10) {
      errorMessage.messagemob = "mobile number should be 10 digits";
    }

    //^ Email Validation
    if (fdata.email === "") {
      errorMessage.messageemail = "Email Should not be Empty";
    } else if (!emailValidate(fdata.email)) {
      errorMessage.messageemail = "Invaild Email Format";
    }

    //^ Password Validation
    if (fdata.pass === "") {
      errorMessage.messagepass = "password should not be Empty";
    } else if (fdata.pass.length < 8) {
      errorMessage.messagepass = "password should be at least 8 characters";
    }

    //^ Confirm Password Validation
    if (fdata.cpass === "") {
      errorMessage.messagecpass = "confirm password should not be empty";
    } else if (fdata.cpass !== fdata.pass) {
      errorMessage.messagecpass = "password is not matching";
    }

    return errorMessage;
  };

  let emailValidate = (email) => {
    let emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  console.log(error);

  return (
    <div>
      <form action="" onSubmit={submitData}>
        <div className={FormStyles.inputDiv}>
          <input
            type="text"
            placeholder="Full Name"
            onChange={handleSubmit}
            value={formData.fn}
            name="fn"
          />
          <small>{error.messagefn && error.messagefn}</small>
        </div>
        <div className={FormStyles.inputDiv}>
          <input
            type="tel"
            placeholder="Mobile Number"
            onChange={handleSubmit}
            value={formData.mob}
            name="mob"
          />
          <small>{error.messagemob && error.messagemob}</small>
        </div>
        <div className={FormStyles.inputDiv}>
          <input
            type="text"
            placeholder="Email"
            onChange={handleSubmit}
            value={formData.email}
            name="email"
          />
          <small>{error.messageemail && error.messageemail}</small>
        </div>
        <div className={FormStyles.inputDiv}>
          <input
            type="password"
            placeholder="Password"
            onChange={handleSubmit}
            value={formData.pass}
            name="pass"
          />
          <small>{error.messagepass && error.messagepass}</small>
        </div>
        <div className={FormStyles.inputDiv}>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleSubmit}
            value={formData.cpass}
            name="cpass"
          />
          <small>{error.messagecpass && error.messagecpass}</small>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default CustomFormValidation;
