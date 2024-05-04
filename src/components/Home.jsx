import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Web Developer"],
    loop: 0,
  });

  const handleDownload = () => {
    // Replace 'resume_link' with the URL of your hosted resume
    const resumeUrl =
      "https://drive.google.com/file/d/1XJf_grzEqP3yoyiQFIp6V_3st-2_4rgN/view?usp=sharing";

    // Open the resume URL in a new tab
    window.open(resumeUrl, "_blank");
  };


  const socialIcons ={
    width: "42px",
     height: "42px",
     borderRadius:"20px"
  };

 

  return (
    <div id="home" >
      <div
        className="container text-center"
        style={{  marginTop: "150px" ,}}
      >
        <div className="row">
          <div
            className="col"
            style={{
              textAlign: "left",
            
            }}
          >
            <h4>hello it's me </h4>
            <h1>Rohan kumar</h1>
            <h4>
              and i'm a <span style={{ color: "aqua" }}>{text}</span>
            </h4>
            <h4>
              Highly passionate and user-focused Developer👨‍💻 from INDIA🇮🇳 adept
              in collaborating with teams to plan the technical writing and
              execution of functional specifications for websites and
              applications.
            </h4>
            <div
              style={{
                marginTop: "20px",
                width: "50%",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <a href="mailto:rohankumar061999@gmail.com">
                <img
                  className="profile"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xqi3Gl1tCm4_m-p7PfET6y6gta_SEwS_NFczRIesyQ&s"
                  }
                  alt="HTML"
                  style={socialIcons}
                />
              </a>
              <a href="https://www.linkedin.com/in/rohan-kumar-fullstack/">
                <img
                  className="profile"
                  src={
                    "https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"
                  }
                  alt="HTML "
                  style={socialIcons}
                />
              </a>
              <a href="https://github.com/heyyrohan">
                <img
                  className="profile"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbO8Fy7Kru8lGicthzGbQdqEM4GIKnGaSLSw&usqp=CAU"
                  }
                  alt="HTML "
                  style={socialIcons}
                />
              </a>
            </div>

            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="btn btn-primary btn-lg"
              onClick={handleDownload}
              style={{ marginTop: "40px" }}
            >
              Download Cv{" "}
            </motion.button>
          </div>

          <div className="col" >
            <img
              className="profile"
              src={
                "https://i.pinimg.com/originals/02/74/20/0274207612d515f49012c87803a9e631.gif"
              }
              alt=""
              style={{ height: "auto", maxWidth: "80%", marginLeft:"23%" }}
             
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
