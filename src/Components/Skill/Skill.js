import React from 'react';
import './Skill.css';
import react from '../../Images/react.jpg';
import ProgressBar from '@ramonak/react-progress-bar';

const Skill = () => {
    return (
        <div id="Skills" className='container'>
            <h1 style={{color:'#28a745', fontWeight:'700'}}>My Skills</h1> <br/> <br/>
           <div className="row d-flex">
            <div className="col-md-6">
               
                   <div data-aos="flip-right" class='backStyle aos-int aos-animate'>
                        <div className='div-one'>
                            <h5 style={{color: 'white', backgroundColor: 'transparent'}}>JavaScript</h5> <br/>
                            <div className='progressBar'>
                                <ProgressBar completed={85}
                                bgcolor="green"
                                labelAlignment="right"
                                labelColor='green'
                                />
                            </div>
                        </div>
                   </div>
                   <div data-aos="flip-right" class='backStyle aos-int aos-animate'>
                        <div className='div-one'>
                            <h5 style={{color: 'white',backgroundColor: 'transparent'}}>React</h5> <br/>
                            <div className='progressBar'>
                                <ProgressBar completed={90}
                                bgColor="#1b6d9a"
                                labelAlignment="right"
                                labelColor='green'
                                />
                            </div>
                        </div>
                   </div>
                   <div data-aos="flip-right" class='backStyle aos-int aos-animate'>
                        <div className='div-one'>
                            <h5 style={{color: 'white',backgroundColor: 'transparent'}}>Material UI</h5> <br/>
                            <div className='progressBar'>
                                <ProgressBar completed={95}
                                bgColor="#1b6d9a"
                                labelAlignment="right"
                                labelColor='green'
                                />
                            </div>
                        </div>
                   </div>
                   <div data-aos="flip-right" class='backStyle aos-int aos-animate'>
                        <div className='div-one'>
                            <h5 style={{color: 'white',backgroundColor: 'transparent'}}>Bootstrap</h5> <br/>
                            <div className='progressBar'>
                                <ProgressBar completed={95}
                                bgColor="#1b6d9a"
                                labelAlignment="right"
                                labelColor='green'
                                />
                            </div>
                        </div>
                   </div>
                   <div data-aos="flip-right" class='backStyle aos-int aos-animate'>
                        <div className='div-one'>
                            <h5 style={{color: 'white',backgroundColor: 'transparent'}}>HTML</h5> <br/>
                            <div className='progressBar'>
                                <ProgressBar completed={95}
                                bgcolor="#1b6d9a"
                                labelAlignment="right"
                                labelColor='green'
                                />
                            </div>
                        </div>
                   </div>
                   
            </div> 
            <div className="col-md-6">
               
                   <div data-aos="flip-right" class='backStyle aos-int aos-animate'>
                        <div className='div-one'>
                            <h5 style={{color: 'white',backgroundColor: 'transparent'}}>Node.js</h5> <br/>
                            <div className='progressBar'>
                                <ProgressBar completed={60}
                                bgColor="#1b6d9a"
                                labelAlignment="right"
                                labelColor='green'
                                />
                            </div>
                        </div>
                   </div>
                   <div data-aos="flip-right" class='backStyle aos-int aos-animate'>
                        <div className='div-one'>
                            <h5 style={{color: 'white',backgroundColor: 'transparent'}}>Express.Js</h5> <br/>
                            <div className='progressBar'>
                                <ProgressBar completed={55}
                                bgColor="#1b6d9a"
                                labelAlignment="right"
                                labelColor='green'
                                />
                            </div>
                        </div>
                   </div>
                   <div data-aos="flip-right" class='backStyle aos-int aos-animate'>
                        <div className='div-one'>
                            <h5 style={{color: 'white',backgroundColor: 'transparent'}}>MongoDB</h5> <br/>
                            <div className='progressBar'>
                                <ProgressBar completed={65}
                                bgColor="#1b6d9a"
                                labelAlignment="right"
                                labelColor='green'
                                />
                            </div>
                        </div>
                   </div>
                   <div data-aos="flip-right" class='backStyle aos-int aos-animate'>
                        <div className='div-one'>
                            <h5 style={{color: 'white',backgroundColor: 'transparent'}}>Firebase</h5> <br/>
                            <div className='progressBar'>
                                <ProgressBar completed={78}
                                bgColor="#1b6d9a"
                                labelAlignment="right"
                                labelColor='green'
                                />
                            </div>
                        </div>
                   </div>
                   <div data-aos="flip-right" class='backStyle aos-int aos-animate'>
                        <div className='div-one'>
                            <h5 style={{color: 'white',backgroundColor: 'transparent'}}>CSS</h5> <br/>
                            <div className='progressBar'>
                                <ProgressBar completed={78}
                                bgColor="#1b6d9a"
                                labelAlignment="right"
                                labelColor='green'
                                />
                            </div>
                        </div>
                   </div>
                   
            </div> 


        </div>
        </div>
    );
};

export default Skill;