import React from "react";
import "./AboutUs.css";
import Navbar from "../../Components/Navbar/Navbar";
// import Logo from "../../assets/logo(1).svg";
import bgstyle from "../../assets/bgstyle.png";
import boatimg from "../../assets/boatimg.png";

const AboutUs = () => {
  return (
    <div>
      <div className="abouthero">
        <div className="aboutheader">
          <Navbar />
        </div>
        <div className="about">
          <p>READ</p>
          <h5>about us</h5>
        </div>
      </div>
      <div className="contest">
        <div className="context">
          <p>PROMOTION</p>
          <h5>
            We Provide You Best <br /> Sightseeing Europe Tours
          </h5>
          <p>
            Discover the unparalleled beauty of Europe with our meticulously{" "}
            <br /> crafted sightseeing tours. Immerse yourself in the rich
            history and <br /> culture of iconic cities like Paris, Rome, and
            Barcelona.
          </p>
           <button>View Packages</button>
        </div>
        <div className="rightimg">
          <img src={bgstyle} alt="img" />
          <img src={boatimg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
