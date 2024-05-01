
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Healthform = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fname: e.target.fname.value,
      lname: e.target.lname.value,
      age: e.target.age.value,
      dob: e.target.dob.value,
      insuranceType: e.target.insuranceType.value,
      plan: e.target.plan.value,
      email: e.target.email.value,
      number: e.target.number.value,
    };

    console.log('Form Data:', formData);
    alert('Form submitted successfully');

    navigate('/services/health/form/thankyou');
  };

  return (
    <>
      <div className='forms'>
        <form className='container1' onSubmit={handleSubmit}>
        <div className='header'>
                <h1>Health insurance form</h1>
            </div>
            <div className='container6'>
            <label>Name : </label>
          <input type='text' placeholder='Enter your Firstname name' name="fname" className='name' required></input>
          <input type='text' placeholder='Enter your Lastname name' name="lname" className='name' required></input>
            </div>

          <div className='container2'>
            <label>Age : </label> <br />
            <input type='number' placeholder='Enter your age' name='age' required></input><br />
            <label>DOB :</label> <br /><input type='date' name="dob" required></input><br />
          </div>

          <div className='container3'>
            <label>Type of insurance :</label> <br /><input type='text' value='Health insurance' name="insuranceType" required></input><br />
            <label>Your Plan :</label> <br />
            <select name="plan" required>
              <option><b>Plus -</b> 3 and 5 Lakh</option>
              <option><b>Power -</b> 10, 15 and 20 Lakhs</option>
              <option><b>Prime -</b> 25, 30, 50 and 100 Lakhs</option>
            </select>
          </div>

          <div className='container4'>
            <label>Email:</label> <br />
            <input type='email' placeholder='Enter your email' name='email' required></input><br />
            <label>Mobile no:</label> <br /><input type='number' placeholder=' Enter your Mobile number' name='number' required></input>
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

export default Healthform;
