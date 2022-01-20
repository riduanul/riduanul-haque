import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import resume from "../../../Images/riduanul.pdf";

const NavBar = () => {
  return (
    <div className="container">
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="d-flex justify-content-between fixed-top "
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="#home" style={{ color: "white" }}>
              {" "}
              <h4>
                Riduanul <span style={{ color: "green" }}>Haque</span>
              </h4>{" "}
            </Navbar.Brand>
            <div className="text">
              <Nav>
                <Nav.Link href="#Home" style={{ color: "white" }}>
                  <a className="navItem">Home</a>
                </Nav.Link>
                <Nav.Link href="#About" style={{ color: "white" }}>
                  <a className="navItem">About</a>
                </Nav.Link>
                <Nav.Link href="#Projects" style={{ color: "white" }}>
                  {" "}
                  <a className="navItem"> Projects </a>
                </Nav.Link>
                <Nav.Link href="#Blogs" style={{ color: "white" }}>
                  <a className="navItem">Blogs</a>
                </Nav.Link>
                <Nav.Link href="#Skills" style={{ color: "white" }}>
                  <a className="navItem">Skills</a>
                </Nav.Link>
                <Nav.Link href="#Contact" style={{ color: "white" }}>
                  <a className="navItem">Contact</a>
                </Nav.Link>
                <a href={resume} download="riduanul haque">
                  <button className="btn btn-outline-success">Resume</button>
                </a>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </>
    </div>
  );
};

export default NavBar;
