import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './Navbar.css';
import resume from '../../../Images/Riduanul .pdf';

const NavBar = () => {
  return (
    <div className='container'>
     <>
     <Navbar
        collapseOnSelect
        expand="lg"
        className="d-flex justify-content-between fixed-top "
      >
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Brand href="#home" style={{color:'white'}}>  <h4>Riduanul <span style={{color:'red'}}>Haque</span></h4> </Navbar.Brand>
         <div className="text">
         <Nav  >
            <Nav.Link href="#Home" style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="#About" style={{color:'white'}}>About</Nav.Link>
            <Nav.Link href="#Projects" style={{color:'white'}}> Projects </Nav.Link>
            <Nav.Link href="#Blogs" style={{color:'white'}}>Blogs</Nav.Link>
            <Nav.Link href="#Skills" style={{color:'white'}}>Skills</Nav.Link>
            <Nav.Link href="#Contact" style={{color:'white'}}>Contact</Nav.Link>
            <a href={resume} download='riduanul haque'><button className="btn btn-outline-success">Resume</button></a>
          </Nav>
         </div>
        </Navbar.Collapse>
      </Navbar>
     </>
    </div>
  );
};

export default NavBar;
