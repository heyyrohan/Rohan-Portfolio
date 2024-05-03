import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variatns";

const Projects = () => {
  const cardStyle = {
    width: "320px",
    height: "300px",
    borderRadius: "20px",
    overflow: "hidden",
    border: "8px solid #ffffff",
    position: "relative",
  };

  const cardImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  };

  const cardBodyStyle = {
    width: "100%",
    height: "100%",
    top: 0,
    right: "-100%",
    position: "absolute",
    background: "#1f3d4738",
    backdropFilter: "blur(8px)",
    borderRadius: "15px",
    color: "#ffffff",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: "right 1s",
  };

  const cardTitleStyle = {
    textTransform: "uppercase",
    fontSize: "30px",
    fontWeight: 300,
  };

  const cardSubTitleStyle = {
    textTransform: "capitalize",
    fontSize: "20px",
    fontWeight: 500,
  };

  const cardInfoStyle = {
    fontSize: "16px",
    fontWeight: 400,
  };

  const cardBtnStyle = {
    color: "#1f3d47",
    marginTop: "25px",
    background: "#8fabba",
    padding: "10px",
    width: "120px",
    borderRadius: "5px",
    textTransform: "capitalize",
    border: "none",
    outline: "none",
    fontWeight: 500,
    cursor: "pointer",
    margin: "25px auto",
    display: "block",
  };

  const handleHover = (event) => {
    const cardBody = event.currentTarget.querySelector(".card-body");
    cardBody.style.right = "0";
  };

  const handleMouseLeave = (event) => {
    const cardBody = event.currentTarget.querySelector(".card-body");
    cardBody.style.right = "-100%";
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.8 }}
      id="project"
    >
      <div
        className="container text-center"
        style={{ marginTop: "80px",  }}
      >
        <h2 style={{ marginBottom:"20px" , marginTop: "20px"}}>
          My {"\u00A0"}
          <span style={{ color: "aqua" }}>Projects</span>
        </h2>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "140px",
          }}
        >
          <div className="col">
            <div
              className="card"
              style={cardStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="card-image"
                src="/images/FOODHUB.jpg"
                alt="Card"
                style={cardImageStyle}
              />
              <div className="card-body" style={cardBodyStyle}>
                <div className="card-title" style={cardTitleStyle}>
                  Restaurant App
                </div>
                <div className="card-sub-title" style={cardSubTitleStyle}>
                  Tech Stack
                </div>
                <div className="card-info" style={cardInfoStyle}>
                  Html,Css,Bootstarp,javascript
                </div>
                <a
                  href="https://bejewelled-pika-7d6988.netlify.app/"
                  className="btn card-btn"
                  style={cardBtnStyle}
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={cardStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="card-image"
                src="/images/newsapp.jpg"
                alt="Card"
                style={cardImageStyle}
              />
              <div className="card-body" style={cardBodyStyle}>
                <div className="card-title" style={cardTitleStyle}>
                  News App
                </div>
                <div className="card-sub-title" style={cardSubTitleStyle}>
                  Tech Stack
                </div>
                <div className="card-info" style={cardInfoStyle}>
                  Html,Css,Bootstarp,javascript
                </div>
                <a
                  href="https://bejewelled-pika-7d6988.netlify.app/"
                  className="btn card-btn"
                  style={cardBtnStyle}
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={cardStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="card-image"
                src="/images/PEPPERFRY.jpg"
                alt="Card"
                style={cardImageStyle}
              />
              <div className="card-body" style={cardBodyStyle}>
                <div className="card-title" style={cardTitleStyle}>
                  Pepperfry Landing Page
                </div>
                <div className="card-sub-title" style={cardSubTitleStyle}>
                  Tech Stack
                </div>
                <div className="card-info" style={cardInfoStyle}>
                  REACT JS, JAVASCRIPT,CSS,HTML
                </div>
                <a
                  href="https://bejewelled-pika-7d6988.netlify.app/"
                  className="btn card-btn"
                  style={cardBtnStyle}
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
