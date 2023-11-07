import React, { useState } from 'react';
import Form1styles from './FormDataSearch.module.css';

function Form1() {
  const [input, setinput] = useState({ fn: '', sn: '', age: '', email: '', pass: '', cpass: '', ph: '' });
  const [storedata, setstoredata] = useState([]);
  const [search, setsearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const getInput = ({target:{value,name}}) => {
    setinput({...input,[name]:value});
  };

  const onsubmitdata = (e) => {
    e.preventDefault();
    setstoredata([...storedata, input]);
    setinput({fn:'',sn:'',age:'',email:'',pass:'',cpass:'',ph:''});
  };

  const searchdata = ({target:{value} }) => {
    setsearch(value);
    viewresults();
  };

  const viewresults = () => {
   if(search.trim() == ""){
      alert("field cannot be empty")
   }
   else{
    const filteredResults = storedata.filter((details) => {
      return details.fn.toLowerCase().includes(search.toLowerCase()) || details.sn.toLowerCase().includes(search.toLowerCase());
    })
    setSearchResults(filteredResults);
  }
};

  return (
    <section>
    <div className={Form1styles.inputfield}>
    <div className={Form1styles.input1}>
      <form onSubmit={onsubmitdata}>
         <label htmlFor="">First Name :</label>
         <input value={input.fn} type="text" placeholder="First Name" onChange={getInput} name="fn" required/>
         <label htmlFor="">Last Name :</label>
                <input value={input.sn} type="text" placeholder="Last Name" onChange={getInput} name="sn" required/>
         <label htmlFor="">Age :</label>
                <input value={input.age} type="tel" placeholder="Age" onChange={getInput} name="age" required/>
         <label htmlFor="">E-Mail :</label>
                <input value={input.email} type="email" placeholder="E-mail" onChange={getInput} name="email" required/>
         <label htmlFor="">Password :</label>
                <input value={input.pass} type="password" placeholder="Password" onChange={getInput} name="pass" />
         <label htmlFor="">Confrom Password :</label>
                <input value={input.cpass} type="password" placeholder="Confirm Password" onChange={getInput} name="cpass" />
         <label htmlFor="">Phone Number :</label>
                <input value={input.ph} type="text" placeholder="Phone Number" onChange={getInput} name="ph" required />
                <button type="submit">Submit</button>
            </form>
      </div>
      <div className={Form1styles.storedata}>
        {storedata.map((details, index) => {
          return (
            <div key={index}>
        <hr />
 <h4><span>Full Name:</span> {details.fn.toUpperCase()} {details.sn.toUpperCase()}</h4>
  <h4><span>Age:</span> {details.age}</h4>
  <h4><span>E-mail:</span> {details.email}</h4>
  <h4><span>Phone Number:</span> {details.ph}</h4>
            </div>
          );
          
        })}
      </div>
    </div>

    <div className={Form1styles.searchbar}>
    <input type="search" placeholder='Enter your Details' onChange={searchdata} />
          <button type="button" onClick={viewresults}>Search</button>
        <div>
    
          {searchResults.map((det, index) => {
            return (
              <div key={index} style={{color:"red"}}>
                <h3><span>Full Name:</span> {det.fn.toUpperCase()} {det.sn.toUpperCase()}</h3>
                <h3><span>Age: </span>{det.age}</h3>
                <h3><span>E-mail: </span>{det.email}</h3>
                <h3><span>Phone Number:</span> {det.ph}</h3>
              </div>
            );
          })}
        </div>
    </div>
    </section>
  );
}

export default Form1;






