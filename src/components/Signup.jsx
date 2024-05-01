import { useState } from 'react';
import './Signup.css';
import signupimage from './images/signup.jpg';
import axios from 'axios'



const Signup = () => {

  const [values ,setvalues]=useState({
    username:"",
    email:"",
    password:"",
    conformpassword:""
  })
  const handleChange=(event)=>{
    setvalues({...values,[event.target.name]:[event.target.value]})
  }
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:8081/register',values)
    .then(res => console.log("Registred successfully!!!"))
    .catch(err => console.log(err));
  }
  return (
    <div className='formcontainer'>
      <div className='imagecontainer'>
        <img src={signupimage} alt='image not found' />
      </div>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type='text' name='username' required onChange={handleChange}/><br/><br/>
        
        <label>Email:</label>
        <input type='email' name='email' required onChange={handleChange}/><br/><br/>
        
        <label>Password:</label>
        <input type='password' name='password' required onChange={handleChange}/><br/><br/>
        
        <label>Conform Password:</label>
        <input type='password' name='conformpassword' required onChange={handleChange}/><br/><br/>
        
        <input type='submit' value='Submit'/><br/><br/>
      </form>
    </div>
  );
}

export default Signup;
