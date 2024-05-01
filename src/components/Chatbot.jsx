import React from 'react';
import ChatBot from "react-simple-chatbot";
import './Chatbot.css'
import { X } from 'lucide-react';



const Chatbot = ({onClose}) => {
    const steps = [
        {
          id: "greet",
          message: "Welcome to insurePro",
          trigger: "Ask name"
        },
        {
          id: "Ask name",
          message: "Enter your name",
          trigger: "waiting"
        },
        {
          id: "waiting",
          user: true,
          trigger: "name"
        },
        {
          id: "name",
          message: "Hello {previousValue}, please select your issue",
          trigger: "issues"
        },
        {
            id:"issues",
            options:[
                {
                    value:"About insurance",
                    label:"About insurance",
                    trigger:"About insurance"
                },
                {
                    value:"Pricing Details",
                    label:"Pricing Details",
                    trigger:"Pricing Details"
                },
                {
                    value:"More about insurance and out company?",
                    label:"More about insurance and out company?",
                    trigger:"More about insurance and out company?"
                },
                {
                    value:"Connect with us",
                    label:"Connect with us",
                    trigger:"Connect with us"
                }
            ]
            
        },
        {
            id:"About insurance",
            message:"Your insurance related problem will be solved, we will react you out quictly",
            end:true
        },
        {
            id:"Pricing Details",
            message:"We provide insurance by looking at people not mone ,though our insurance policies are cheap enough to purchase by any oen with additional benifits",
            end:true
        },
        {
            id:"More about insurance and out company?",
            message:"Please checkout why us page and take a look at our company to know more",
            end:true
        },
        {
            id:"Connect with us",
            message:"Go to contactus page and try to connect with us ,if all lines are buzy please wait with patience we will reach connect to you shortly. Thankyou",
            end:true
        }
        
    ];
  return (
    
    <div className='chatbot'>
        <X onClick={onClose}/>
        <ChatBot steps={steps}/>
    </div>
  )
}

export default Chatbot;