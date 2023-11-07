import React, { useState } from 'react';
import form2styles from "./FormData.module.css"

function FormData() {
    let [input, setinput] = useState({ fn: '', sn: '', age: '', email: '', pass: '', cpass: '', ph: '' });
    const [storedata, setstoredata] = useState([]);
  
    const updatesetinput = ({ target: { value, name } }) => {
      setinput({ ...input, [name]: value });
    };
  
    const onsubmitdata = (e) => {
      e.preventDefault();
      setstoredata([ input]);
      setinput({
        fn: '',
        sn: '',
        age: '',
        email: '',
        pass: '',
        cpass: '',
        ph: '',
      });
    };

    return (
        <section>
          <div>
            <form onSubmit={onsubmitdata}>
         <label htmlFor="">First Name :</label>
         <input value={input.fn} type="text" placeholder="FirstName" onChange={updatesetinput} name="fn" required/>
         <label htmlFor="">Last Name :</label>
                <input value={input.sn} type="text" placeholder="LastName" onChange={updatesetinput} name="sn" required/>
         <label htmlFor="">Age :</label>
                <input value={input.age} type="tel" placeholder="Age" onChange={updatesetinput} name="age" required/>
         <label htmlFor="">E-Mail :</label>
                <input value={input.email} type="email" placeholder="E-mail" onChange={updatesetinput} name="email" required/>
         <label htmlFor="">Password :</label>
                <input value={input.pass} type="password" placeholder="Password" onChange={updatesetinput} name="pass" />
         <label htmlFor="">Confrom Password :</label>
                <input value={input.cpass} type="password" placeholder="Confrom Password" onChange={updatesetinput} name="cpass" />
         <label htmlFor="">Phone Number :</label>
                <input value={input.ph} type="text" placeholder="Phone Number" onChange={updatesetinput} name="ph" required />
                <button type="submit">Submit</button>
              
            </form>
          </div>
          <div  className={form2styles.hidediv}>
            {storedata.map((details, index) => {
              return (
                <div key={index}>
                 <h4><span>Full Name :</span> {details.fn} {details.sn}</h4>
      <h4><span>Age :</span> {details.age}</h4>
      <h4><span>E-mail :</span> {details.email}</h4>
      <h4><span>Phone Number : </span>{details.ph}</h4>
                </div>
              );
              
            })}
          </div>
        </section>
      ) 
}
export default FormData;
