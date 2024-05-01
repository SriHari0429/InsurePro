import React from 'react'
import './Home.css'
import img1 from './images/home.jpg';
import img2 from './images/instagram.png';
import img3 from './images/facebook.png';
import img4 from './images/twitter.png';
import img5 from './images/whatsapp.png';
import { Link } from 'react-router-dom';
import qr from './images/InsurePro.png'

const Home = () => {
  return (
    <div>
      <div className='hero'>
      
        <div className='moto'>
          <h1><lable className="heading">insurePro</lable><br></br><lable className="L">L</lable>ife Insurance <br/>That Creates Wealth.</h1>
          <p>The Only company where you can invest<br/> with no ectra cost.</p>
          <img src={qr} alt='qrcode' className='qrcode'></img>
          <div className='apply1'>
          <Link to="/services" className='link'><button> Apply</button></Link>
          <Link to="/services" className='link'><button>Renewal</button></Link>
          
        </div>
        </div>

        <div className='right'>
          
            <img src={img1} alt ="image not found"></img>
        </div>
        
        
      </div>
      

      <div class='home2'>
        <h2>Don't forget to follow us on</h2>
        <a href=''><img src={img2} alt='instagram'></img></a>
        <a href=''><img src={img3} alt='Facebook'></img></a>
        <a href=''><img src={img4} alt='Twitter'></img></a>
        <a href=''><img src={img5} alt='whatsapp'></img></a>
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

    </div>
  )
}

export default Home;