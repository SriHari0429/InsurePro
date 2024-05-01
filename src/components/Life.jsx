import React from 'react'
import './Health.css';
import img2 from './images/instagram.png';
import img3 from './images/facebook.png';
import img4 from './images/twitter.png';
import img5 from './images/whatsapp.png';
import { Link } from 'react-router-dom';

const Life = () => {
  return (
    <>
    <div className='health-form'>
      <div className='health-top'>
        <h1>"Invest in Your <lable>Family's</lable>  Future with<br/> <lable>Life</lable> Insurance Assurance"</h1>
        <p>Customise and create your own life insurance</p>
      </div>

    <div className='pricing'>
      <table border='2px solid' cellPadding='10px'>
        <tr>
          <th><h1>Details</h1></th>
          <th><h1>Criteria</h1></th>
        </tr>
        <hr/>
        <tr>
          <td><h2>Age :</h2></td>
          <td><b>Child:</b> 91 days to 25 years<br/>
          <b>Adult:</b> 18 years to 65 years</td>
        </tr>
        <tr>
         <td> <h2>Family Composition for Floater policy :</h2></td>
          <td><b>Plus -</b> Maximum of 2 Adults (Self + Spouse) and 6 children<br/>
          <b>Power -</b> Maximum of 4 Adults (Self+ Spouse + one set of dependent Parents or Parents-in-law) and 6 children<br/>
          <b>Prime -</b> Maximum of 6 Adults (Self + Spouse + set of dependent Parents + set of Parents in law) and 6 children</td>
        </tr>
        <tr>
         <td><h2>Policy Period</h2></td> 
          <td>1 year, 2 years & 3 Years</td>
        </tr>
        <tr>
          <td><h2>Sum insured (₹)</h2></td>
          <td><b>Plus -</b> 3 and 5 Lakh;<b>Power -</b> 10 , 15 and 20 Lakhs, <b>Prime -</b> 25,30, 50 and 100 Lakhs</td>
        </tr>
      </table>
    </div>
    <Link to="/services/life/form" className='link'> <button className='apply'>Apply now</button></Link>
    

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


export default Life