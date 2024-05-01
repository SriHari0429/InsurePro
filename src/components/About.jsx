import React from 'react'
import './About.css'
import img1 from './images/ourteam.jpg'
import man from './images/man.png'
import girl from './images/girl.png'
import img2 from './images/instagram.png';
import img3 from './images/facebook.png';
import img4 from './images/twitter.png';
import img5 from './images/whatsapp.png';

const About = () => {
  return (
    <>
    
    <div className='about'>
    <h1>About us</h1>

    <div className='left'>
      <img src={img1} alt='one'></img>
    </div>

    <div className='right'>
      <h2>We are...</h2>
      <p>Protective provides protection that fits your life, because we believe everyone deserves a sense of security and freedom. It's who we are and who we've always been, protecting people for more than 2years through life insurance, asset protection and retirement products.</p>
      <h2>Our mission</h2>
      <p>We believe in helping more people achieve the protection and security they deserve. To us, it's not
 complicated. It's simply our duty and responsibility
 to put people first. Because we're all protectors.</p>
    </div>
      
    <div className='ourclients'>
    <h1 className='moto'>ALL WE DO IS INSURANCE....</h1>
      <h1>Our clients</h1>

      <div className='clientcards'>

        <div className='card'>
          <img src={man} alt='man'></img>
          <h4>Manish</h4>
          <h5>Age:32</h5>
          &#9733; &#9733; &#9733; &#9733; &#9734;
        </div>
        <div className='card'>
          <img src={girl} alt='man'></img>
          <h4>Anisha</h4>
          <h5>Age:24</h5>
          &#9733; &#9733; &#9733; &#9734; &#9734;
        </div>
        <div className='card'>
          <img src={man} alt='man'></img>
          <h4>Elish</h4>
          <h5>Age:20</h5>
          &#9733; &#9733; &#9733; &#9734; &#9734;
        </div>
        <div className='card'>
          <img src={girl} alt='man'></img>
          <h4>Deepika</h4>
          <h5>Age:30</h5>
          &#9733; &#9733; &#9733; &#9733; &#9733;
        </div>
        <div className='card'>
          <img src={man} alt='man'></img>
          <h4>Somshekar</h4>
          <h5>Age:47</h5>
          &#9733; &#9733; &#9733; &#9733; &#9733;
        </div>
        <div className='card'>
          <img src={girl} alt='man'></img>
          <h4>Priyanka</h4>
          <h5>Age:21</h5>
          &#9733; &#9733; &#9733; &#9733; &#9734;
        </div>

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

export default About;