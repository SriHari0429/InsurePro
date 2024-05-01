import React from 'react'
import './Services.css'
import health from './images/health-care.png';
import car from './images/car.png';
import travel from './images/airplane-around-earth.png';
import home from './images/house.png';
import life from './images/health-care.png';
import wholelife from './images/daily-tasks.png'
import { Link } from 'react-router-dom';
import img2 from './images/instagram.png';
import img3 from './images/facebook.png';
import img4 from './images/twitter.png';
import img5 from './images/whatsapp.png';


function Services(){
    return(
        <>
        <div className='fullpage'>
            <div className='discover'>
                <h1>PEACE OF <lable>MIND</lable> IN EVERY <lable>POLICY</lable></h1>
            </div>
            <div className='products'>
                <h1>Discover our products</h1>
                <div className='services'>
                <Link to="/services/health" className='link'> <img src={health} alt='health'/><h2>Health</h2></Link>
                <Link to="/services/car" className='link'>  <img src={car}alt='Car'/><h2>Car</h2></Link>
                <Link to="/services/travel" className='link'><img src={travel}alt='Travel'/><h2>Travel</h2></Link>
                <Link to="/services/home" className='link'><img src={home}alt='Home'/><h2>Home</h2></Link>
                <Link to="/services/life" className='link'><img src={life}alt='Life'/><h2>Life</h2></Link>
                <Link to="/services/wholelife" className='link'><img src={wholelife}alt='Whole life'/><h2>Whole life</h2> </Link>
                </div>
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
    )
}
export default Services;