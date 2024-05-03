import { motion } from "framer-motion";
import { fadeIn } from "../variatns";

const Skills = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.8 }}
      id="skills"
    >
      <div
        className="container text-center"
        style={{  marginTop: "50px" }}
      >
        <h2 style={{ marginBottom:"20px" , marginTop: "20px"}}>
          My {"\u00A0"}
          <span style={{ color: "aqua",marginBottom:"10px" }}>Skills</span>
        </h2>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          <div
            className="col"
            style={{
              backgroundColor: "rgb(50, 56, 70)",
              gap: "10px",
              padding: "30px",
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              borderRadius: "30px",
            }}
          >
            <button type="button" className="btn btn-outline-info ">
              Html
            </button>
            <button type="button" className="btn btn-outline-info">
              Css
            </button>
            <button type="button" className="btn btn-outline-info">
              React
            </button>
            <button type="button" className="btn btn-outline-info">
              Ui/Ux
            </button>
            <button type="button" className="btn btn-outline-info">
              Javascript
            </button>
          </div>

          <div
            className="col"
            style={{
              backgroundColor: "rgb(50, 56, 70)",
              gap: "10px",
              padding: "30px",
              display: "grid",
              gridTemplateColumns: "repeat(2,2fr)",
              borderRadius: "30px",
            }}
          >
            <button type="button" className="btn btn-outline-info">
              Node js
            </button>
            <button type="button" className="btn btn-outline-info">
              Express js
            </button>
            <button type="button" className="btn btn-outline-info">
              Mongo db
            </button>
            <button type="button" className="btn btn-outline-info">
              My Sql
            </button>
            <button type="button" className="btn btn-outline-info">
              Github
            </button>
          </div>

          <div
            className="col"
            style={{

              backgroundColor: "rgb(50, 56, 70)",
              gap: "10px",
              padding: "30px",
              display: "grid",
              gridTemplateColumns: "repeat(2,2fr)",
              borderRadius: "30px",
            }}
          >
            <button type="button" className="btn btn-outline-info">
              Windows
            </button>
            <button type="button" className="btn btn-outline-info">
              Linux
            </button>
            <button type="button" className="btn btn-outline-info">
              Vs Code
            </button>
            <button type="button" className="btn btn-outline-info">
              Figma
            </button>
            <button type="button" className="btn btn-outline-info">
              Postman
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
