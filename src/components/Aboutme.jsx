
import {motion} from 'framer-motion';
import {fadeIn} from '../variatns';

const Aboutme = () => {
  return (
    < motion.div
    variants={fadeIn('up',0.6)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.8}}
    >
        <div className="container text-center" style={{border: '2px solid red',marginTop: '50px', backgroundColor:'rgb(50, 56, 70)'}}>
      <div className="row">
        <div className="col" style={{border: '2px solid green',textAlign: 'left'}}>
          <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=sph" alt="" style={{height: '350px', width: '350px',borderRadius: '50%',marginLeft: '100px'}}/>
        </div>
        <div className="col" style={{border: '2px solid orange', textAlign: 'left'}} >
          <h2>About{'\u00A0'} <span style={{color: 'aqua'}}>Me</span></h2>
          <h4>I'm Rohan, a passionate full stack web developer proficient in HTML5, CSS3, JavaScript, ReactJs, NodeJs, Express, and MongoDB. With meticulous attention to detail, I craft websites that blend impressive aesthetics with delightful user experiences. Beyond coding, I stay updated on the latest tech trends, always exploring new possibilities in the digital realm.</h4>
          {/* <button type="button" className="btn btn-primary btn-lg" style={{marginTop: '30px'}}>Primary</button> */}
          <motion.button
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  type="button" className="btn btn-primary btn-lg" style={{marginTop: '30px'}}
> submit</motion.button>
          
        </div>
       
      </div>
    </div>
    </motion.div>
  )
}

export default Aboutme