import React from "react";
import "./AboutUs.css";
import Navbar from "../../Components/Navbar/Navbar";
// import Logo from "../../assets/logo(1).svg";
import bgstyle from "../../assets/bgstyle.png";
import boatimg from "../../assets/boatimg.png";
import globe from "../../assets/globe.png";
import videx from "../../assets/videx.png";
import { FaPlayCircle } from "react-icons/fa";
import popular from "../../assets/popular.png";
import elip1 from "../../assets/elip1.png";
import elip2 from "../../assets/elip2.png";
import elip3 from "../../assets/elip3.png";
import bowl from "../../assets/bowl.png";
import pickup from "../../assets/pickup.png"
import Footer from "../../Components/Footer/Footer"
import Slider from "../../Components/Slider/Slider"
// import sight1 from "../../assets/sight1.png";
// import sight2 from "../../assets/sight2.png";
// import sight3 from "../../assets/sight3.png";
// import sight4 from "../../assets/sight4.png";
// import sight5 from "../../assets/sight5.png";
// import sight6 from "../../assets/sight6.png";
// import sight7 from "../../assets/sight7.png";

const AboutUs = () => {
  return (
    <div>
      <div className="abouthero">
        <div className="aboutheader">
          <Navbar />
        </div>
        <div className="abouttext">
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
          <h6>
            Discover the unparalleled beauty of Europe with our meticulously{" "}
            <br /> crafted sightseeing tours. Immerse yourself in the rich
            history and <br /> culture of iconic cities like Paris, Rome, and
            Barcelona.
          </h6>
          <button>View Packages</button>
        </div>
        <div className="rightimg">
          <img className="bgcol" src={bgstyle} alt="img" />
          <img className="bgcol2" src={boatimg} alt="img" />
          <img className="bgcol3" src={globe} alt="img" />
        </div>
      </div>
      <div className="video">
        <div className="mp4">
          <img src={videx} alt="video" />
        </div>
        <div className="toplay">
          <h5>Wanderlust</h5>
        </div>
        <div>
          <FaPlayCircle className="playit" />
        </div>
      </div>
      <div className="populartour">
        <div className="popularimg">
          <img src={popular} alt="img" />
        </div>
        <div className="populartext">
          <p>TREND</p>
          <h5>Our Popular Tour Plans</h5>
          <h6>
            Explore our selection of popular tour plans, meticulously designed
            to <br /> offer you unforgettable experiences in some of the world's
            most <br /> captivating destinations.
          </h6>
          <div className="elips">
            <img src={elip1} alt="" />
            <img src={elip2} alt="" />
            <img src={elip3} alt="" />
          </div>
        </div>
        <div className="dish">
          <img src={bowl} alt="image" />
        </div>
      </div>
      <div className="imageprove">
        <div className="imageprovetext">
          <p>EXPLORE MORE</p>
          <h6>Our International Packages</h6>
        </div>
        <div className="picsflex">
          <img src={pickup} alt="image" />
        </div>
      </div>
      <Slider/>
      <Footer/>
    </div>
  );
};

export default AboutUs;
