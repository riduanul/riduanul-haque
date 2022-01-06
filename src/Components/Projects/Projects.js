import React from "react";
import "./Projects.css";
import creative from "../../Images/creative.JPG";
import travel from "../../Images/travelguru.JPG";
import volunteer from "../../Images/volunteer.JPG";
import athena from "../../Images/athena.jpg";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  AOS.init({
    duration: 3000,
  });
  return (
    <div
      id="Projects"
      data-aos="fade-up"
      className="container mb-5 pb-5 mt-5 pt-5"
    >
      <h1 style={{ color: "green" }}>My Projects</h1> <br /> <br />
      <div className="row d-flex justify-content-between">
        <div className="col-lg-3 cl-md-6 cl-sm-12 project-div">
          <div className="project-img ">
            <img src={creative} alt="creative agency img" />
          </div>
          <div>
            {" "}
            <h5 style={{ color: "green" }} className="mt-2">
              Creative Agency
            </h5>
          </div>
          <h6 style={{ color: "gray" }}>
            A service selling web application with firebase authentication,
            admin panel, CRUD Operation.
          </h6>
          <div className="" style={{ color: "gray", fontWeight: "bold" }}>
            Technologies: JavaScript, React, React-router, Node.js, MongoDB
          </div>
          <>
            <div className="row d-flex justify-content-center m-auto p-2">
              <div className="col-4 text-muted ">
                <h4>
                  <a
                    href="https://github.com/riduanul/creative-agency-client"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </h4>
              </div>
              <div className="col-4 text-muted ">
                <h4>
                  <a
                    href="https://creative-agency-f72c4.web.app/"
                    target="_blank"
                  >
                    <BiLinkExternal />
                  </a>
                </h4>
              </div>
              <div className="col-4 text-muted ">
                <h4>
                  <a
                    href="https://github.com/riduanul/creative-agency-server"
                    target="_blank"
                  >
                    <FaGithubSquare />
                  </a>
                </h4>
              </div>
            </div>
          </>
        </div>
        {/* 2nd column ----------------------------*/}
        <div className="col-lg-3 cl-md-6 cl-sm-12 project-div">
          <div className="project-img ">
            <img src={athena} alt="creative agency img" />
          </div>
          <div>
            {" "}
            <h5 style={{ color: "green" }} className="mt-2">
              Athena Design
            </h5>
          </div>
          <h6 style={{ color: "gray" }}>
            A Simple Landing page. single page React application.
          </h6>
          <div className="" style={{ color: "gray", fontWeight: "bold" }}>
            Technologies: Html, Css, JavaScript, React, Bootstrap.
          </div>
          <>
            <div className="row d-flex justify-content-center m-auto p-2">
              <div className="col-4 text-muted ">
                <h4>
                  <a
                    href="https://github.com/riduanul/athena-design "
                    target="_blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </h4>
              </div>
              <div className="col-4 text-muted ">
                <h4>
                  <a
                    href="https://athena-design-46b83.web.app/"
                    target="_blank"
                  >
                    <BiLinkExternal />{" "}
                  </a>
                </h4>
              </div>
            </div>
          </>
        </div>
        {/* 3rd column.................. */}
        <div className="col-lg-3 cl-md-6 cl-sm-12 project-div">
          <div className="project-img ">
            <img src={volunteer} alt="creative agency img" />
          </div>
          <div>
            {" "}
            <h5 style={{ color: "green" }} className="mt-2">
              Volunteer Network
            </h5>
          </div>
          <h6 style={{ color: "gray" }}>
            A Volunteer management web application with firebase authentication,
            admin panel, CRUD Operation.
          </h6>
          <div className="" style={{ color: "gray", fontWeight: "bold" }}>
            Technologies: JavaScript, React, react-router, Node.js, MongoDB
          </div>
          <>
            <div className="row d-flex justify-content-center m-auto p-2">
              <div className="col-4 text-muted ">
                <h4>
                  <a
                    href="https://github.com/riduanul/volunteer-network-client "
                    target="_blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </h4>
              </div>
              <div className="col-4 text-muted ">
                <h4>
                  <a
                    href="https://volunteer-network-309d5.web.app/"
                    target="_blank"
                  >
                    <BiLinkExternal />{" "}
                  </a>
                </h4>
              </div>
              <div className="col-4 text-muted ">
                <h4>
                  <a
                    href="https://github.com/riduanul/volunteer-network-server"
                    target="_blank"
                  >
                    <FaGithubSquare />
                  </a>
                </h4>
              </div>
            </div>
          </>
        </div>

        {/* 4th column--------------------------- */}

        <div className="col-lg-3 cl-md-6 cl-sm-12 project-div">
          <div className="project-img ">
            <img src={travel} alt="creative agency img" />
          </div>
          <div>
            {" "}
            <h5 style={{ color: "green" }}>Travel-guru</h5>
          </div>
          <h6 style={{ color: "gray" }}>
            A Travel agency web application with firebase authentication system.
          </h6>
          <div className="" style={{ color: "gray", fontWeight: "bold" }}>
            Technologies: JavaScript, React, React-router, firebase,HTML,CSS
          </div>
          <>
            <div className="row d-flex justify-content-center m-auto p-2">
              <div className="col-3 text-muted ">
                <h4>
                  <a
                    href="https://github.com/riduanul/traveller"
                    target="_blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </h4>
              </div>
              <div className="col-4 text-muted ">
                <h4>
                  <a
                    href="https://traval-guru-64b7c.firebaseapp.com/home"
                    target="_blank"
                  >
                    <BiLinkExternal />{" "}
                  </a>
                </h4>
              </div>
            </div>
          </>
        </div>
      </div>
      <div style={{ color: "white", textAlign: "right" }}>
        {" "}
        <a href="">See more</a>{" "}
      </div>
    </div>
  );
};

export default Projects;
