
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Homeform = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    age: "",
    dob: "",
    insurancetype: "",
    plan: "",
    email: "",
    mobilenumber: ""
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8081/homeform', values)
      .then(res => console.log("Registered successfully!!!"))
      .catch(err => console.log(err));

      navigate('/services/health/form/thankyou');
  };


  return (
    <>
      <div className='forms'>
        <form className='container1' onSubmit={handleSubmit}>
        <div className='header'>
                <h1>Home insurance Form</h1>
            </div>
            <div className='container6'>
            <label>Name : </label>
          <input type='text' placeholder='Enter your Firstname name' name="name" className='name' required onChange={handleChange}></input>
            </div>

          <div className='container2'>
            <label>Age : </label> <br />
            <input type='number' placeholder='Enter your age' name='age' required onChange={handleChange}></input><br />
            <label>DOB :</label> <br /><input type='date' name="dob" required onChange={handleChange}></input><br />
          </div>

          <div className='container3'>
            <label>Type of insurance :</label> <br /><input type='text' value='Home insurance' name="insurancetype" required onChange={handleChange}></input><br />
            <label>Your Plan :</label> <br />
            <select name="plan" required onChange={handleChange}>
              <option><b>Standard Home</b></option>
              <option><b> Comprensive Home</b></option>
              <option><b>Basic Home</b></option>
              <option><b>Premium Home</b></option>
            </select>
          </div>

          <div className='container4'>
            <label>Email:</label> <br />
            <input type='email' placeholder='Enter your email' name='email' required onChange={handleChange}></input><br />
            <label>Mobile no:</label> <br /><input type='number' placeholder=' Enter your Mobile number' name='mobilenumber' required onChange={handleChange}></input>
          </div>

          <div className='container5'>
            <input type='submit' name="submit" value="Submit" className='sub'></input>
            <input type='reset' name="submit" value="Clear" className='sub'></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default Homeform;
