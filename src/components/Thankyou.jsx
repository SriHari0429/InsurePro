import React, { useState, useEffect } from 'react';
import './Thankyou.css';
import thankyou from './images/Thankyou.gif';
import img2 from './images/instagram.png';
import img3 from './images/facebook.png';
import img4 from './images/twitter.png';
import img5 from './images/whatsapp.png';

const Thankyou = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomCode = '';

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomCode += characters.charAt(randomIndex);
  }

  return randomCode;
};

const RandomCodeGenerator = () => {
  const [code, setCode] = useState('');

  useEffect(() => {
    const newCode = Thankyou();
    setCode(newCode);
  }, []); 

  return (
    <>
      <div className='thankyou'>
        <div className='top'>
          <img src={thankyou} alt='image not found' />
          <h1>Thanks for Registration...!!!</h1>
          <h2>We will reach out to you shortly</h2>
        </div>

        <div className='random'>
          <h2>Your reference number is</h2>
          <h3>{code}</h3>
          <p>Make sure to take a snap of this number to verify with our client</p>
        </div>
      </div>

      <footer>
      <div className='social'>
      <img src={img2} alt='image not found'></img>
      <img src={img3} alt='image not found'></img>
      <img src={img4} alt='image not found'></img>
      <img src={img5} alt='image not found'></img>
      </div>
      <div className='cols'>
        <div className='col1'>
          <h2>Individual</h2>
          <p>Life insurance</p>
          <p>Motor insurance</p>
          <p>Learn insurance</p>
        </div>
        <div className='col2'>
          <h2>About protective</h2>
          <p>About us</p>
          <p>Careers</p>
          <p>News</p>
        </div>
        <div className='col3'>
          <h2>Support</h2>
          <p>Contact us</p>
          <p>Fruad</p>
        </div>
        <div className='col4'>
          <h2>My account</h2>
          <p>Login</p>
          <p>Sign up</p>
        </div>
      </div>
      <h2>© insurePro, India   |  All Rights reserves  |  Terms of use  |  Privacy policy  |  Accessibility </h2>
    </footer>
    </>
  );
};

export default RandomCodeGenerator;
