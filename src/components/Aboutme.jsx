import { motion } from "framer-motion";
import { fadeIn } from "../variatns";

const Aboutme = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.8 }}
      id="about"
    >
      <div
        className="container text-center"
        style={{
          marginTop: "80px",
          marginBottom:"20px",
          backgroundColor: "rgb(50, 56, 70)",
         
        }}
      >
        <div className="row">
          <div
            className="col"
            style={{  textAlign: "left" }}
          >
            <img
              src="/images/mypic.jpg"
              alt=""
              style={{
                height: "340px",
                width: "340px",
                borderRadius: "50%",
                marginLeft: "30px",
              }}
            />
          </div>

          <div
            className="col"
            style={{
              textAlign: "left",
              fontFamily: "sans-serif",
              
            }}
          >
            <h2>
              About{"\u00A0"} <span style={{ color: "aqua" }}>Me</span>
            </h2>
            <h4>
              I'm Rohan, a passionate full stack web developer proficient in
              HTML5, CSS3, JavaScript, ReactJs, NodeJs, Express, and MongoDB.
              With meticulous attention to detail, I craft websites that blend
              impressive aesthetics with delightful user experiences. Beyond
              coding, I stay updated on the latest tech trends, always exploring
              new possibilities in the digital realm.
            </h4>

            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="btn btn-primary btn-lg"
              style={{ marginTop: "30px" }}
            >
              {" "}
              Contact me
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Aboutme;
