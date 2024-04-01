

const Projects = () => {
  const cardStyle = {
    width: '320px',
    height: '300px',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '8px solid #ffffff',
    position: 'relative'
  };

  const cardImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '15px'
  };

  const cardBodyStyle = {
    width: '100%',
    height: '100%',
    top: 0,
    right: '-100%',
    position: 'absolute',
    background: '#1f3d4738',
    backdropFilter: 'blur(5px)',
    borderRadius: '15px',
    color: '#ffffff',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: 'right 1s'
  };

  const cardTitleStyle = {
    textTransform: 'uppercase',
    fontSize: '50px',
    fontWeight: 500
  };

  const cardSubTitleStyle = {
    textTransform: 'capitalize',
    fontSize: '14px',
    fontWeight: 500
  };

  const cardInfoStyle = {
    fontSize: '16px',
    fontWeight: 400
  };

  const cardBtnStyle = {
    color: '#1f3d47',
    background: '#8fabba',
    padding: '10px',
    width: '120px',
    borderRadius: '5px',
    textTransform: 'capitalize',
    border: 'none',
    outline: 'none',
    fontWeight: 500,
    cursor: 'pointer' 
  };

  const handleHover = (event) => {
    const cardBody = event.currentTarget.querySelector('.card-body');
    cardBody.style.right = '0';
  };

  const handleMouseLeave = (event) => {
    const cardBody = event.currentTarget.querySelector('.card-body');
    cardBody.style.right = '-100%';
  };

  return (
    <div>
      <div className="container text-center" style={{marginTop:'50px',border:'2px solid pink'}}>
      <h2>My {'\u00A0'}<span style={{color: 'aqua'}}>Projects</span></h2>
        <div className="row" style={{display:"flex",justifyContent:"space-between",gap:'80px'}}>
          <div className="col">
            <div className="card" style={cardStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
              <img className="card-image" src="https://i.pinimg.com/originals/e8/00/1c/e8001c24a5b6925919833fa02c0fbe39.jpg" alt="Card" style={cardImageStyle} />
              <div className="card-body" style={cardBodyStyle}>
                <div className="card-title" style={cardTitleStyle}>Food App</div>
                <div className="card-sub-title" style={cardSubTitleStyle}>Tech Stack</div>
                <div className="card-info" style={cardInfoStyle}>Html,Css,Bootstarp</div>
                {/* <button className="card-btn" style={cardBtnStyle}>Button</button> */}
                <a href="https://bejewelled-pika-7d6988.netlify.app/" className="btn card-btn" style={cardBtnStyle}>button</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={cardStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
              <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdu3Sbp-r_rb_tVZCXxUdCCT1bnPEifi-9Xng-RXM3TrOM2PpCt2s65n4Ok4rf8tJOc8&usqp=CAU" alt="Card" style={cardImageStyle} />
              <div className="card-body" style={cardBodyStyle}>
                <div className="card-title" style={cardTitleStyle}>Card Title</div>
                <div className="card-sub-title" style={cardSubTitleStyle}>Card Subtitle</div>
                <div className="card-info" style={cardInfoStyle}>Card Info</div>
                <button className="card-btn" style={cardBtnStyle}>Button</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={cardStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
              <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZFmFNfRkzrmc4l3ayU87E1XWCvipqDlLr2PC3RiQenhsyVMMulzTUatRzhHbvFpLmvo&usqp=CAU" alt="Card" style={cardImageStyle} />
              <div className="card-body" style={cardBodyStyle}>
                <div className="card-title" style={cardTitleStyle}>Card Title</div>
                <div className="card-sub-title" style={cardSubTitleStyle}>Card Subtitle</div>
                <div className="card-info" style={cardInfoStyle}>Card Info</div>
                <button className="card-btn" style={cardBtnStyle}>Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
