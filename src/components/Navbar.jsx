import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top "
        id="navbar"
      >
        <div className="container" >
          <a
            className="navbar-brand"
            href="#"
            style={{ color: "aqua", fontSize: "50px", fontWeight: "900" }}
          >
            RK
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            style={{
              width: "10%",
              justifyContent: "right",
            }}
          >
            <div
              className="navbar-nav"
              style={{
                justifyContent: "space-evenly",
                width: "60%",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <Link
                className="nav-link active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={400}
              >
                Home
              </Link>

              <Link
                className="nav-link active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={400}
              >
                About Me
              </Link>

              <Link
                className="nav-link active"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={400}
              >
                Skills
              </Link>

              <Link
                className="nav-link active"
                to="project"
                spy={true}
                smooth={true}
                offset={50}
                duration={400}
              >
                Projects
              </Link>

              <Link
                className="nav-link active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={400}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
