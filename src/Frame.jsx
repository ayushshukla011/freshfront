import React, { useState } from "react";
import axios from 'axios';
import "./style.css";
import nature from './assets/6334499_nature_florist_blossom_heart_flowering_floral_branch.png'
import rose from './assets/4171346_love_rose_valentines_propose_valentine_day_flower (2).png'


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
   
    const sendmsg= async ()=>{
        const options = {
            method: "GET",
          };
          const res = await fetch(
            'https://ayushserver.netlify.app/.netlify/functions/index/api/messages',
            options
          );
          
          const data = await res.json();
          alert(data.success)
    }
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
            <div className="maincontent text-center">
                <div className="text-wrapper">
                    Will you be my GYS partner
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
