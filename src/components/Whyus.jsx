import React from 'react'
import './Whyus.css'
import who from './images/who.png'
import healthcare from './images/healthcare.png'
import commit from './images/commitment.png'
import img2 from './images/instagram.png';
import img3 from './images/facebook.png';
import img4 from './images/twitter.png';
import img5 from './images/whatsapp.png';
import audio from './images/feedback.mp3'

const Whyus = () => {
  return (
    <>
    <div className='whyus'>

      <div className='heading'>
        <img src={who} alt='png not found'></img>
      <h1>Why choose us?</h1>
      <p>We are top 3 in the world for insuring the people
      and assuring them with the insurance policies</p> 
      </div><br/>

      <div className='whyinsure'>
      <img src={healthcare} alt='png not found'></img>
        <h1>Why You Have To Be Insured?</h1>
        <p>Insurance plans are beneficial to anyone looking to protect their
        family, assets/property and themselves from financial
        risk/losses: Insurance plans will help you pay for medical 
        emergencies, hospitalisation, contraction of any
        illnesses and treatment, and medical care required in
        the future.</p>
      </div><br/>
      
      <div className='commitments'>
      <img src={commit} alt='png not found'></img>
        <h1>Our commitments</h1>  
        <p>We're committed to working as hard as you do to support your dreams. We're on the side of protectors 
        like you, no matter where you're going or how big you dream.</p>
      </div>
      <br/>
      </div>

      <div className='ourcustomers'>
        <h1>Our customers opinion</h1>
        <h2>Audio</h2>
        <audio src={audio} controls /><br/>

        <h2>Videos</h2>
        <div className='video-section'>
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ujyiH-XkrAg?si=WCBZRSAUhJ8QPctH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4CTFQhILQVk?si=auW8TUm1tVdXeE4X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KCnuQam2pZs?si=x7efo2m92hRP2AoV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

export default Whyus;