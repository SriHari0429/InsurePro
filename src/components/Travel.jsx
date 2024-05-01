import React from 'react'
import './Health.css';
import img2 from './images/instagram.png';
import img3 from './images/facebook.png';
import img4 from './images/twitter.png';
import img5 from './images/whatsapp.png';
import { Link } from 'react-router-dom';

const Travel = () => {
  return (
    <>
    <div className='health-form'>
      <div className='health-top'>
        <h1>“Jobs fill your <lable>pocket</lable> ,<br/> but <lable>adventures</lable> fill your soul.”</h1>
        <p>Customise and create your own Travel insurance</p>
      </div>

      <div className='pricing'>
      <table border='2px solid' cellPadding='10px'>
        <tr>
          <th><h1>Details</h1></th>
          <th colSpan='4'><h1>Criteria</h1></th>
        </tr>
        <hr/>
        <tr>
          <td><h2>Coverage type :</h2></td>
          <th> Full Coverage</th>
          <th> Basic Coverage</th>
          <th> Liability</th>
          <th> Comprehensive</th>
          
          
          
        </tr>
        <tr>
         <td> <h2>Premium Range : </h2></td>
         <td>50,000</td>
         <td>1,00,000</td>
         <td>3,00,000</td>
         <td>12,00,000</td>
        
        </tr>
        <tr>
         <td><h2>Emergency Medical Coverage : </h2></td> 
          <td>YES</td>
          <td>YES</td>
          <td>YES</td>
          <td>YES</td>
        </tr>
        <tr>
          <td><h2>Trip Cancellation Coverage : </h2></td>
          <td>  Up to 25% of trip cost </td>
          <td>  Up to 50% of trip cost</td>
          <td>  Up to 75% of trip cost </td>
          <td>  Up to 100% of trip cost  </td>
          
        </tr>
      </table>
    </div>
    <Link to="/services/travel/form" className='link'> <button className='apply'>Apply now</button></Link>
    

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
  )
}


export default Travel