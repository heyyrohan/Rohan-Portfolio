import React from "react";
import { CgMail } from "react-icons/cg";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa6";
import { FiCoffee } from "react-icons/fi";


const Contact = () => {
  return (
    <div
      className=" container text-center "
      id="contact"
      style={{ marginTop: "80px", }}
    >
      <h2 >
        Contact{"\u00A0"} 
        <span style={{ color: "aqua" }}>ME</span>
      </h2>
      <div className="  row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card" style={{ height: "120px" }}>
            <div className="card-body">
              <h3 className="card-title">
                <CgMail />
              </h3>
              <p className="card-text">
                <strong>rohankumar061999@gmail.com</strong>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ height: "120px" }}>
            <div className="card-body">
              <h3 className="card-title">
                <RxLinkedinLogo />
              </h3>
              <p className="card-text">
                <strong>
                  https://www.linkedin.com/in/rohan-kumar-fullstack/
                </strong>{" "}
              </p>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="card" style={{ height: "120px" }}>
            <div className="card-body">
              <h3 className="card-title">
                <FaGithub />
              </h3>
              <p className="card-text">
                {" "}
                <strong>https://github.com/heyyrohan</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <footer style={{ height: "20px" , marginTop:"30px"}}>
        <p> <strong>  Designed and built by Rohan Kumar <span><FiCoffee /></span>   </strong> </p>
      </footer>

    </div>
  );
};

export default Contact;
