import { useTypewriter } from 'react-simple-typewriter'
import {motion} from 'framer-motion';



const Home = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Web Developer',],
    loop: 0
  })

  
    const handleDownload = () => {
      // Replace 'resume_link' with the URL of your hosted resume
      const resumeUrl = 'https://drive.google.com/file/d/1XJf_grzEqP3yoyiQFIp6V_3st-2_4rgN/view?usp=sharing';
      
      // Open the resume URL in a new tab
      window.open(resumeUrl, '_blank');
    };
  
  return (
    <div>
     {/* <div className="container text-center" style={{border:'2px solid red',marginTop:'10%',height:'80px'}}>
  <div className="row">
    <div className="col"> */}

    <div className="container text-center" style={{border: '2px solid red',marginTop: '150px'}}>
      <div className="row" >
        <div className="col" style={{border: '2px solid green',textAlign: 'left'}}>
          <h4>hello it's me </h4>
          <h1>Rohan kumar</h1>
          <h4>and i'm a  <span style={{color:'aqua'}}>{text}</span></h4>
          <h4>Highly passionate and user-focused Developer👨‍💻 from INDIA🇮🇳 adept in collaborating with teams to plan the technical writing and execution of functional specifications for websites and applications.</h4>
          <div style={{border: '2px solid pink', marginTop: '20px',width: '50%',justifyContent:"space-between",display:"flex",}}>
            <a href="mailto:rohankumar061999@gmail.com"><img  className="profile" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xqi3Gl1tCm4_m-p7PfET6y6gta_SEwS_NFczRIesyQ&s"} alt="HTML" style={{width:'42px',height:'42px'}}/></a> 
            <a href="https://www.linkedin.com/in/rohan-kumar-fullstack/"><img className="profile" src={"https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"} alt="HTML " style={{width:'42px',height:'42px'}}/></a>
            <a href="https://github.com/heyyrohan"><img  className="profile" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbO8Fy7Kru8lGicthzGbQdqEM4GIKnGaSLSw&usqp=CAU"} alt="HTML " style={{width:'42px',height:'42px'}}/></a>
          </div>
          {/* <button type="button" className="btn btn-primary btn-lg" style={{marginTop: '40px'}}>Primary</button> */}
          <motion.button
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  type="button" className="btn btn-primary btn-lg" onClick={handleDownload} style={{marginTop: '30px'}}>download cv </motion.button>

  
        </div>

        <div className="col" style={{border: '2px solid orange'}}>
          <img className="profile"  src={"https://i.pinimg.com/originals/02/74/20/0274207612d515f49012c87803a9e631.gif"} alt="" style={{height: '400px',width: '400px'}}/>
        </div>
      </div>
    </div>
  
    </div>
    
  )
}

export default Home