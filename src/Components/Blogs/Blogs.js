import React from 'react';
import './Blogs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import blog1 from '../../Images/blog1.png';
import blog2 from '../../Images/blog2.png';
import blog3 from '../../Images/blog3.jpeg';
import blog4 from '../../Images/blog4.jpeg';

const Blogs = () => {
    AOS.init({
        duration : 2000
      })
    return (
        <div id='Blogs' data-aos="fade-up" className='container mt-5 mb-5'>
            <h1 style={{color:'green', fontWeight:'bold'}}>My Blogs</h1> <br/> <br/>

            <div className="row d-flex justify-content-between">
                <div className="col-md-6 col-lg-3 col-sm-12 box">
                    <div className="blog">
                        <img src={blog1} alt="img" width="100%" height="240"/>
                        <div> <h5 style={{color:'white', textAlign:'center'}} className='mt-2'>JavaScript Data type</h5></div>
                        <div style={{color:'white'}}>  <a href="https://riduanul-haque1.medium.com/javascript-datatypes-for-beginners-96b4d994b6a6" target="_blank"><button class="btn btn-outline-success">Click to read</button></a> </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 col-sm-12 box">
                <div className="blog">
                        <img src={blog2} alt="img" width="100%" height="240"/>
                        <div> <h5 style={{color:'white',textAlign:'center'}} className='mt-2'>JavaScript fundamentals</h5></div>
                        <div style={{color:'white'}}> <a href="https://riduanul-haque1.medium.com/javascript-fundamental-5778718a6e4c" target="_blank"><button className="btn btn-outline-success">Click to read</button></a> </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 col-sm-12 box">
                <div className="blog">
                        <img src={blog3} alt="img" width="100%" height="240"/>
                        <div> <h5 style={{color:'white', marginTop:'5px',textAlign:'center'}} className='mt-2'>Something about ES6</h5></div>
                        <div style={{color:'white'}}> <a href="https://riduanul-haque1.medium.com/what-today-i-learn-about-javascript-21b15c9e6ff9" target="_blank"><button className="btn btn-outline-success">Click to read</button></a> </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 col-sm-12 box">
                <div className="blog">
                        <img src={blog4} alt="img" width="100%" height="240"/>
                        <div> <h5 style={{color:'white',textAlign:'center'}} className='mt-2'>Interview Question</h5></div>
                        <div style={{color:'white'}}><a href="https://riduanul-haque1.medium.com/some-common-interview-questions-about-advanced-js-e5e06452aaaf" target="_blank"> <button className="btn btn-outline-success">Click to read</button></a> </div>
                    </div>
                </div>
                <div style={{textAlign: 'right', color:'white'}}> <a href="#Home">See more</a> </div>
            </div>
        </div>
    );
};

export default Blogs;