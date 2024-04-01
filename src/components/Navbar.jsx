
function Navbar() {
  return (
   <div>    
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top"  style={{border: '2px solid pink',}}>
        <div className="container" style={{border: '2px solid green'}}>
        <a class="navbar-brand" href="#" style={{color: 'aqua',fontSize: '50px',fontWeight: '900'}} >RK</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
       
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{border: '2px solid black',width: '10%',justifyContent: 'right'}}>
            <div className="navbar-nav" style={{border: '2px solid red',justifyContent: 'space-evenly',width: '60%',fontSize:'20px',fontWeight:'bold'}}>
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link active" href="#">About Me</a>
                <a className="nav-link active" href="#">Skills</a>
                <a className="nav-link active" href="#">Projects</a>
                <a className="nav-link active" href="#">Contact</a>
               
              </div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar