import React from "react";
import "./Contact.css";
import { ImLinkedin, ImFacebook2 } from "react-icons/im";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_85m53s5",
        "template_94bwc4t",
        e.target,
        "user_oWMX9ZGRVS5GhNP04swJL"
      )
      .then(
        (result) => {
          alert("Your email has been sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div
      data-aos="flip-left"
      id="Contact"
      className="contact container mt-5 pt-5 pb-3"
    >
      
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 text-white">
            <h2 className="text-success">Contact With Me</h2> <br /> <br />
            <h4> Rangamati, Chattogram, Bangladesh. </h4>
            <h4> Cell: +8801794212131</h4>
            <h4>Email: riduanul.haque1@gmail.com</h4>
            <div className="row d-flex justify-content-start align-items-center mr-5 ml-0 ">
              <div className="col-md-2 ">
                {" "}
                <h1>
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/riduanul-haque/"
                    target="_blank"
                  >
                    {" "}
                    <ImLinkedin />
                  </a>{" "}
                </h1>
              </div>
              <div className="col-md-2">
                <h1>
                  <a
                    href="https://www.facebook.com/riduanul.haque.18/"
                    target="_blank"
                  >
                    {" "}
                    <ImFacebook2 />{" "}
                  </a>{" "}
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form action="" onSubmit={sendEmail} className="mail-box">
              <input
                type="text"
                id="email"
                name="user_email"
                placeholder="Your Email"
              />
              <input
                type="text"
                id="name"
                name="user_Name"
                placeholder="Your Name"
              />
              <textarea
                name="message"
                id=" text"
                cols="30"
                rows="10"
                placeholder="message"
              ></textarea>
              <button type="submit" className="btn btn-outline-success">
                Send Message
              </button>
            </form>
          </div>
        </div>
    
    </div>
  );
};

export default Contact;
