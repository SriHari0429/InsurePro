import React,{useState} from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom';
import img2 from './images/instagram.png';
import img3 from './images/facebook.png';
import img4 from './images/twitter.png';
import img5 from './images/whatsapp.png';
import callback from './images/phone.gif';

const Contact = () => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!formData.name || !formData.email || !formData.message) {
        alert('Please fill in all fields before submitting.');
        return;
      }
  
      console.log('Form Data:', formData);
      navigate('/services/health/form/thankyou');
    };

    const handleSubmitcallback = (e) => {
      e.preventDefault();
  
      if (!formData.name || !formData.email ) {
        alert('Please fill in all fields before submitting.');
        return;
      }
  
      console.log('Form Data:', formData);
      navigate('/services/health/form/thankyou');
    };

    const handleSubmitfeedback = (e) => {
      e.preventDefault();
  
      if (!formData.message ) {
        alert('Please fill in all fields before submitting.');
        return;
      }
  
      console.log('Form Data:', formData);
      navigate('/services/health/form/thankyou');
    };
  
    return (
      <>
        <div className='container'>

          <form className='forms' onSubmit={handleSubmit}>
            <h1>Drop a message</h1>
            <input type='text' name='name' placeholder='Enter your name' required onChange={handleChange} />
            <input type='email' name='email' placeholder='Enter your Email' required onChange={handleChange} />
            <textarea placeholder='Drop your message' name='message' required onChange={handleChange}></textarea>
            <input type='submit' value="Send" className='enter' />
            <input type='reset' value="Clear" className='enter' />
          </form>

          <form className='forms' onSubmit={handleSubmitcallback}>
            <h1>Request a Callback</h1>
            <img src={callback} alt='gif image' className='gif'></img>
            <input type='text' name='name' placeholder='Enter your name' required onChange={handleChange} />
            <input type='email' name='email' placeholder='Enter your Email' required onChange={handleChange} />
            
            <input type='submit' value="Request" className='enter' />
            
          </form>

          <form className='forms' onSubmit={handleSubmitfeedback}>
            <h1>Your feedback</h1>
            
            <textarea placeholder='Give us your feedback..' name='message' required onChange={handleChange}></textarea>
            <input type='submit' value="Send" className='enter' />
            <input type='reset' value="Clear" className='enter' />
          </form>

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

export default Contact;