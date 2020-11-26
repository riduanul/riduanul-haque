import React from 'react';
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';
import './Banner.css';
import resume from '../../../Images/riduanul.pdf';


const Banner = () => {
 
    return (
        <div className="container banner">
            <h3 style={{color:'#28a745',fontWeight:'bold'}}>Hello, I am</h3><br/>
            <h1 style={{ fontWeight:'bolder',  fontSize:'120'}}>Md. Riduanul Haque </h1> <br/>
            <h3 style={{color:'#28a745',fontWeight:'700'}}> <span style={{color:'white'}}>I am a  </span> <Typewriter
            options={{
                color: 'green',
                strings: ['MERN-Stack Web Developer', 'Self Taught Programmer', 'Sefl-Motivated Person', 'Team Player'],
                autoStart: true,
                loop: true,
                delay: 75,
                
            }}
            /></h3>
            <div className='d-flex mt-5  '>
            <a href={resume} download="Riduanul Haque">
                <button class="btn-outline-success btn-style">Get Resume</button>
                </a>
           
      
            </div>
        </div>
    );
};

export default Banner;