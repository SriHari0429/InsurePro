// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Services from '../../Insure_pro/src/components/Services';
import Home from '../../Insure_pro/src/components/Home';
import About from '../../Insure_pro/src/components/About';
import Whyus from '../../Insure_pro/src/components/Whyus';
import Contact from '../../Insure_pro/src/components/Contact';
import Navbar from '../../Insure_pro/src/components/Navbar';
import Health from '../../Insure_pro/src/components/Health';
import Healthform from '../../Insure_pro/src/components/Healthform'
import Carform from '../../Insure_pro/src/components/Carform'
import Homeform from '../../Insure_pro/src/components/Homeform'
import Travelform from '../../Insure_pro/src/components/Travelform'
import Lifeform from '../../Insure_pro/src/components/Lifeform'
import Wholelifeform from '../../Insure_pro/src/components/Wholelifeform'
import Thankyou from '../../Insure_pro/src/components/Thankyou'
import Car from '../../Insure_pro/src/components/Car'
import Travel from '../../Insure_pro/src/components/Travel'
import Life from '../../Insure_pro/src/components/Life'
import Homeinsure from '../../Insure_pro/src/components/Homeinsure'
import Wholelife from '../../Insure_pro/src/components/Wholelife'
import Chatbot from '../../Insure_pro/src/components/Chatbot';
import Signup from '../../Insure_pro/src/components/Signup'
import Login from '../../Insure_pro/src/components/Login'

import chat1 from '../../Insure_pro/src/components/images/bot.gif';

import './App.css'


import { useState } from 'react';

function App() {
  const [bot ,setbot]=useState(false)


    return (
    <Router>
      <div>
        
        <Navbar />
        
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/whyus" element={<Whyus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/health" element={<Health />} />
          <Route path="/services/car" element={<Car />} />
          <Route path="/services/travel" element={<Travel />} />
          <Route path="/services/home" element={<Homeinsure />} />
          <Route path="/services/life" element={<Life />} />
          <Route path="/services/wholelife" element={<Wholelife />} />
          <Route path="/services/health/form" element={<Healthform/>} />
          <Route path="/services/car/form" element={<Carform/>} />
          <Route path="/services/homeinsure/form" element={<Homeform/>} />
          <Route path="/services/travel/form" element={<Travelform/>} />
          <Route path="/services/life/form" element={<Lifeform/>} />
          <Route path="/services/wholelife/form" element={<Wholelifeform/>} />
          <Route path="/services/health/form/thankyou" element={<Thankyou/>} />

        </Routes>
        {bot && <Chatbot onClose={()=>setbot(false)} />}
        
         <img src={chat1} alt="Chat Icon" onClick={()=>setbot(true)} className='popup'/>
    
        
      </div>

      </Router>

  );
}

export default App;
