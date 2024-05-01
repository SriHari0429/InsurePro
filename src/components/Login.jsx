import React, { useState } from 'react';
import './Login.css'
import loginimage from './images/login.jpg'
import axios from 'axios'

const Login = () => {
  const [values, setvalues] = useState({
    username: '',
    password: '',
  });
  const handleChange=(event)=>{
    setvalues({...values,[event.target.name]:[event.target.value]})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login',values)
    .then(res => console.log("Registred successfully!!!"))
    .catch(err => console.log(err));

  };


  return (
    <div className='formcontainer'>
      <div className='imagecontainer'>
          <img src={loginimage} alt='image not found'/>
      </div>
    
    <form onSubmit={handleSubmit} className='loginform'>
      <div>
        <h1>Login</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"         
          onChange={handleChange}
        />
  
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"     
          onChange={handleChange}
        />
      </div>

      <button type="submit" className='sbutton'>Login</button>
    </form>
    </div>

  );
};

export default Login;
