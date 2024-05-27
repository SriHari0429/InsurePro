// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Services from '../../InsurePro/src/components/Services';
import Home from '../../InsurePro/src/components/Home';
import About from '../../InsurePro/src/components/About';
import Whyus from '../../InsurePro/src/components/Whyus';
import Contact from '../../InsurePro/src/components/Contact';
import Navbar from '../../InsurePro/src/components/Navbar';
import Health from '../../InsurePro/src/components/Health';
import Healthform from '../../InsurePro/src/components/Healthform'
import Carform from '../../InsurePro/src/components/Carform'
import Homeform from '../../InsurePro/src/components/Homeform'
import Travelform from '../../InsurePro/src/components/Travelform'
import Lifeform from '../../InsurePro/src/components/Lifeform'
import Wholelifeform from '../../InsurePro/src/components/Wholelifeform'
import Thankyou from '../../InsurePro/src/components/Thankyou'
import Car from '../../InsurePro/src/components/Car'
import Travel from '../../InsurePro/src/components/Travel'
import Life from '../../InsurePro/src/components/Life'
import Homeinsure from '../../InsurePro/src/components/Homeinsure'
import Wholelife from '../../InsurePro/src/components/Wholelife'
import Chatbot from '../../InsurePro/src/components/Chatbot';
import Signup from '../../InsurePro/src/components/Signup'
import Login from '../../InsurePro/src/components/Login'

import chat1 from '../../InsurePro/src/components/images/bot.gif';

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
