import React,{useState} from "react";
import logo from './logo.svg';
import Slider from "react-slick";
import Counter from './counter';
import Nav from './Nav';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hello() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showDiv, setshowDiv] = useState(true);

   const settings = {
      dots: false,
      infinite: true,
      nav:true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      beforeChange: (oldIndex, newIndex) => {
        setCurrentSlide(newIndex);
      }
    };

    const toggleCard = () => {
      setshowDiv(!showDiv);
    }
  return (
    <>
    <Nav/>
      <div className="bg-yellow py-20">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" width="100" />
          </header>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="cardwapper">
                  {showDiv ? 
                    <div className="gamecard" >
                      <h3>GamePlay</h3>
                      <div>Two teams of three players each take turns kicking the ball over the net, aiming to score by landing the ball in the opponent’s court. Players are allowed to use their legs, head and torso to contact the ball, but not their arms or hands. The team with the most points wins.</div>
                    </div> : 
                    <div className="gamecard">
                      <h3>Did you know?</h3>
                      <div>Sepak Takraw is famous for its acrobatic kicks, including the “spike” or “roll spike”, where players leap into the air, flip their bodies and kick the ball with jaw-dropping athleticism, making it a thrilling game to watch!</div>
                    </div>
                  }
                  {showDiv ? 
                    <div className="questionIcon" onClick={toggleCard}><img src="./dist/images/question.svg" /></div> :
                    <div className="questionIcon nobounce" onClick={toggleCard}><img width="50" src="./dist/images/play.png" /></div>
                  }
                </div>
              </div>
              <div className="col-lg-9">
                <Slider {...settings} className="slider">
                  <div>
                    <div style={{background:'red',padding: '20px'}}>
                        <h3>1</h3>
                    </div>
                  </div>
                  <div>
                    <div style={{background:'green',padding: '20px'}}>
                        <h3>2</h3>
                    </div>
                  </div>
                  <div>
                    <div style={{background:'pink',padding: '20px'}}>
                        <h3>3</h3>
                    </div>
                  </div>
                  <div>
                    <div style={{background:'orange',padding: '20px'}}>
                        <h3>4</h3>
                    </div>
                  </div>
                  <div>
                    <div style={{background:'gold',padding: '20px'}}>
                        <h3>5</h3>
                    </div>
                  </div>
                  <div>
                    <div style={{background:'black',padding: '20px'}}>
                        <h3>6</h3>
                    </div>
                  </div>
                  <div>
                    <div style={{background:'gray',padding: '20px'}}>
                        <h3>7</h3>
                    </div>
                  </div>
                  <div>
                    <div style={{background:'brown',padding: '20px'}}>
                        <h3>8</h3>
                    </div>
                  </div>
                  <div>
                    <div style={{background:'purple',padding: '20px'}}>
                        <h3>9</h3>
                    </div>
                  </div>
                </Slider>
                <div className="text-center mt-2">
                  <strong>Current Slide:</strong> {currentSlide + 1} / 9
                </div>
              </div>
            </div>
          </div>
          
          Hello
          <Counter end={1500} />
          <Counter end={3000} />
          <Counter end={4500} />
        
      </div>
    </>
  );
}


export default Hello;
