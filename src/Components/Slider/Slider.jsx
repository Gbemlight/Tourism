import React from "react";
import "./Slider.css";
import slideimg from "../../assets/slideimg.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Slider = () => {
  const options = {
    type: "loop",
    // gap: "8px",
    autoplay: true,
    pauseOnHover: true,
    resetProgess: false,
    arrows: true,
    dots: false,
    fixedWidth: "538px",
    pagination: 3,
    speed: 3000,

    
  };
  return (
    <div className="con">
      <div className="inner-con">
        <div className="ctext">
          <p>PROMOTION</p>
          <h6>
            See What Our Clients Say <br /> About Us
          </h6>
        </div>
        <Splide className="slide-container" options={{}}>
          <SplideSlide>
            <div className="slide">
              <div className="pixs">
                <img src={slideimg} alt="image" />
              </div> 
              <p>
                Visiting Giza was a dream come true for me. The sight of <br />
                the pyramids standing tall against the backdrop of the <br />{" "}
                desert left me in awe of the ancient Egyptians' <br />{" "}
                architectural prowess.
              </p>
              <h6>Christine Beckam - Designer</h6>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slide">
              <div className="pixs">
                <img src={slideimg} alt="image" />
              </div>
              <p>
                Visiting Giza was a dream come true for me. The sight of <br />
                the pyramids standing tall against the backdrop of the <br />{" "}
                desert left me in awe of the ancient Egyptians' <br />{" "}
                architectural prowess.
              </p>
              <h6>Christine Beckam - Designer</h6>
            </div>
          </SplideSlide>{" "}
          <SplideSlide>
            <div className="slide">
              <div className="pixs">
                <img src={slideimg} alt="image" />
              </div>
              <p>
                Visiting Giza was a dream come true for me. The sight of <br />
                the pyramids standing tall against the backdrop of the <br />{" "}
                desert left me in awe of the ancient Egyptians' <br />{" "}
                architectural prowess.
              </p>
              <h6>Christine Beckam - Designer</h6>
            </div>
          </SplideSlide>{" "}
          <SplideSlide>
            <div className="slide">
              <div className="pixs">
                <img src={slideimg} alt="image" />
              </div>
              <p>
                Visiting Giza was a dream come true for me. The sight of <br />
                the pyramids standing tall against the backdrop of the <br />{" "}
                desert left me in awe of the ancient Egyptians' <br />{" "}
                architectural prowess.
              </p>
              <h6>Christine Beckam - Designer</h6>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Slider;
