import React from 'react';
import './Health.css';
import img2 from './images/instagram.png';
import img3 from './images/facebook.png';
import img4 from './images/twitter.png';
import img5 from './images/whatsapp.png';
import { Link } from 'react-router-dom';

const Homeinsure = () => {
  return (
    <>
      <div className='health-form'>
        <div className='health-top'>
          <h1>
            "Protecting your <lable> home</lable> is safeguarding your sanctuary. Invest in <br/>security, invest in <lable>peace</lable> of mind."
          </h1>
          <p>Customize and create your own Home insurance</p>
        </div>

          <div className='pricing'>
            <table border='2px solid' cellPadding='10px'>
              <tr>
                <th><h1>Details</h1></th>
                <th colSpan='4'><h1>Criteria</h1></th>
              </tr>
              <tr>
                <td><h2>Coverage type :</h2></td>
                <th>Standard Home</th>
                <th>Comprehensive Home</th>
                <th>Basic Home</th>
                <th>Premium Home</th>
              </tr>
              <tr>
                <td><h2>Premium Range :</h2></td>
                <td>25,000</td>
                <td>1,00,000</td>
                <td>1,50,000</td>
                <td>20,0000</td>
              </tr>
              <tr>
                <td><h2>Deductible :</h2></td> 
                <td>20,787</td>
                <td>41,575</td>
                <td>24,945</td>
                <td>62,379</td>
              </tr>
              <tr>
                <td><h2>Additional Benefits :</h2></td>
                <td>Roadside Assistance, Rental Car Coverage</td>
                <td>Accident Forgiveness, Glass Coverage</td>
                <td>New Car Replacement, 24/7 Claims Support</td>
                <td>Flexible Payment Options, Online Account Access</td>
              </tr>
            </table>
          </div>
          <Link to="/services/homeinsure/form" className='link'> <button className='apply'>Apply now</button></Link>
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
            <p>Fraud</p>
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

export default Homeinsure;
