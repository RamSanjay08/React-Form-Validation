
//? this is 3
import React, { useState } from 'react';
import Formstyles from "../components/Form1/Form1.module.css"

function Form() {
  const [input, setinput] = useState({
    fn: '',
    ln: '',
    age: '',
    email: '',
    pass: '',
    cpass: '',
    ph: '',
  });
  
  const [submitted, setSubmitted] = useState(true);
  const [storedDetails, setStoredDetails] = useState([]);

  const updatesetinput = ({ target: { value, name } }) => {
    setinput({ ...input, [name]: value });
  };

  const senddata = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setStoredDetails([...storedDetails, input]);
  };

  return (
    <div className={Formstyles.main}>
      {submitted ? (
   
          <div className={Formstyles.second}>
          <form onSubmit={senddata}>
            <input type="text" placeholder="FirstName" onChange={updatesetinput} name="fn" required/>
            <input type="text" placeholder="SecondName" onChange={updatesetinput} name="ln" required/>
            <input type="tel" placeholder="Age" onChange={updatesetinput} name="age" required/>
            <input type="email" placeholder="E-mail" onChange={updatesetinput} name="email" required/>
            <input type="password" placeholder="Password" onChange={updatesetinput} name="pass" />
            <input type="password" placeholder="Confrom Password" onChange={updatesetinput} name="cpass" />
            <input type="text" placeholder="Phone Number" onChange={updatesetinput} name="ph" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className={Formstyles}>
        {storedDetails.map((details, index) => (
          <div key={index} className={Formstyles}>
            <h4>Full Name: {details.fn} {details.ln}</h4>
            <h4>Age: {details.age}</h4>
            <h4>E-mail: {details.email}</h4>
            <h4>Phone number: {details.ph}</h4>
          </div>
        ))}
      </div>
      )}
    
    </div>
  );
}

export default Form;

