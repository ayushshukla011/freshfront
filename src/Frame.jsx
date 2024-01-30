import React, { useState } from "react";
import axios from 'axios';
import "./style.css";
import nature from './assets/6334499_nature_florist_blossom_heart_flowering_floral_branch.png'
import rose from './assets/4171346_love_rose_valentines_propose_valentine_day_flower (2).png'
import cute from './assets/cute.jpg'


export const Frame = () => {


    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleHover = () => {
        const maxX =600 - 120; // Adjust these values based on your button size
        const maxY =300 - 40; // Adjust these values based on your button size
        // const maxX = window.innerWidth - 620; // Adjust these values based on your button size
        // const maxY = window.innerHeight - 440;
        // console.log(window.innerWidth)
        // console.log(window.innerHeight)


        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        setPosition({ x: randomX, y: randomY });
    };
   const mynum='+916268326237';
   const hernum='+919407902161';
   const mymsg='she accepted your invitation';
   const hermsg="Thank you! for accepting the invitation";
    console.log(hernum);
    const sendownermsg= async()=>{
        try {
          const response = await axios.post(
            'https://ayushserver.netlify.app/.netlify/functions/index/api/messages', // Replace with your actual backend API endpoint
            { tosend:hernum, msgbody:hermsg }
          );
    
          console.log('Message sent successfully:', response.data);
          
        } catch (error) {
          console.error('Error sending message:', error.response.data);
        }
      };

    const sendmsg= async () => {
        try {
          const response = await axios.post(
            'https://ayushserver.netlify.app/.netlify/functions/index/api/messages', // Replace with your actual backend API endpoint
            { tosend:mynum, msgbody:mymsg }
          );
    
          console.log('Message sent successfully:', response.data);
          alert(`${response.data.success} and a text msg has been sent to ayush`);
        } catch (error) {
          console.error('Error sending message:', error.response.data);
        }
        sendownermsg();
      };
    return (

        <div className="Container">
            <div className="repeating-image-container">
            
            <div className="nature1 ">
                <img
                    className="element-nature"
                    alt="Element nature"
                    src={ nature }
                />
            </div>
            <div className="cuteimg">
                        <img src={cute} alt="" />
                    </div>
            
            <div className="maincontent text-center">
                <div className="text-wrapper">
                    
                    <div className="hello">
                        Hello Pragya mam!
                    </div>
                    Will you be my partner for Fresher's 2k24.
                </div>
                <div className="buttons">
                

                    <button class="button-1 yesbtn "  onClick={sendmsg} role="button">YES</button>
                    <button class="button-1 nobtn "
                        role="button"
                        style={ { transform: `translate(${position.x}px, ${position.y}px)` } }
                        onMouseOver={ handleHover }
                    >
                        NO
                    </button>
                    
                </div>
                
            </div>
            <div className="cuteimg">
                        <img src={cute} alt="" />
                    </div>
            <div className="nature2  ">
                <img
                    className="element-nature"
                    alt="Element nature"
                    src={ nature }
                />
            </div>
            </div>
            
        </div>
    );
};
