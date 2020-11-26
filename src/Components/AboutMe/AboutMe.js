import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import me from '../../Images/me.png';




const AboutMe = () => {
    AOS.init({
        duration : 2000
      })
    return (
        
        <div id="About" className='container mt-5 pt-5 mb-0 pb-0'>
            <div className="row "> 
            <div  data-aos="fade-right"  className="col-md-6 pt-5 ">
                <br/>
                <h1 style={{color:'#28a745'}}>About Me</h1>
                <p style={{ color: 'white', marginBottom:'400px' }}>
                I’m Riduanul Haque, I’m a frontend developer, and I specialize in efficient React apps and CSS & HTML that just work across all platforms and browsers. I care deeply about building interfaces that are usable and pleasant for the most number of people possible. I have a keen interest in technology, mobile applications, and user experience. As someone who takes responsibility for my own personal development, I am continually evaluating and upgrading my skills so that I can stay at the cutting edge of web development. I am a natural problem solver, who has proven myself by  completing projects for IT consultancies, software houses, web design agencies, and IT departments.
                </p>
            </div>
            <div data-aos="fade-left" className="col-md-6 img-fluid mt-0 pt-0  ">
                
                <img src={me} alt="img" height='400' width='400'
                />
            </div>
            </div>
        </div>
    );
};

export default AboutMe;