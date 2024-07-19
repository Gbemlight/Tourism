import React from "react";
import "./Homepage.css";
import Navbar from "../../Components/Navbar/Navbar";
// import Logo from "../../assets/logo(1).svg";
import Vector1 from "../../assets/Vector1.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import Group81 from "../../assets/Group81.svg";
import image11 from "../../assets/image909.svg";
import image12 from "../../assets/image910.svg";
import image13 from "../../assets/image911.svg";
import image14 from "../../assets/image912.svg";
import image15 from "../../assets/image913.svg";
import Card from "../../Components/Card2/Card/Card";
import tourguide from "../../assets/tourguide1.svg";
import travelling1 from "../../assets/travelling1.svg";
import hands1 from "../../assets/hands1.svg";
import medicalteam1 from "../../assets/medicalteam1.svg";
import illustration from "../../assets/illustration.svg";
import Background from "../../assets/BackgroundElement.svg";
import selection1 from "../../assets/selection1.svg";
import watersport1 from "../../assets/watersport1.svg";
import taxi1 from "../../assets/taxi1.svg";
import illustration1 from "../../assets/illustration1.svg";
import line1 from "../../assets/Line1.png";
import parisimg from "../../assets/parisimg.svg";
import destination1 from "../../assets/Destination1.svg";
import destination2 from "../../assets/Destination2.svg";
import destination3 from "../../assets/Destination3.svg";
import destination4 from "../../assets/Destination4.svg";
import Card2 from "../../Components/Card2/Card2";
import Slider from "../../Components/Slider/Slider";
import Footer from "../../Components/Footer/Footer";
import Modal from "../../Components/Modal/Modal";
import  { useState } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import AboutUs from '../../Pages/AboutUs/AboutUs'
// import BackgroundSlider from '../../BackgroundSlider'

const Homepage = () => {
  // const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true)
  }

  const hideModal = () => {
    setShowModal(false)
  }
  const CardDetails = [
    {
      img: tourguide,
      heading: "Guided Tours",
      text: "Experience the best  destinations with ease and insights",
    },
    {
      img: travelling1,
      heading: "Best Flight Options",
      text: "Explore a range of the best flight options to suite your schedule",
    },
    {
      img: hands1,
      heading: "Religious Tours",
      text: "Embark on a spiritual journey with our religious tours",
    },
    {
      img: medicalteam1,
      heading: "Medical insurance",
      text: "Protect your health with our medical insurance plans",
    },
  ];
  
  const options = {
    type: "loop",
    // gap: "8px",
    autoplay: true,
    pauseOnHover: true,
    resetProgess: false,
    // arrows: true,
    dots: false,
    fixedWidth: "538px",
    pagination: 3,
    speed: 1000,

    
  };
  return (
    <div className="container">
      {showModal && <Modal hideModal={hideModal}/>}
      {/* <BackgroundSlider/> */}
      <div className="hero">
        <div className="header">
          {/* <img src={Logo} alt="logo" /> */}
          <Navbar/>
        </div>
        <Splide className="slide-container" options={{}}>
          <SplideSlide>
            
        <div className="herocontents">
          <img src={Vector1} alt="image" />
          <h2>
            No matter where <br />
            you’re going to, we’ll <br /> take you there
          </h2>
          <div className="anchors">
            <select>
              <option>Where To </option>   ~
              <option>Abuja</option>
              <option>SouthAfrica</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
            <select>
              <option>
                Travel Type
                <MdKeyboardArrowDown />
              </option>
              <option>Classic</option>
              <option>Business Class</option>
              <option>Free Lancers</option>
              <option>Special treatment</option>
            </select>
            <select>
              <option>
                Duration <MdKeyboardArrowDown />
              </option>
              <option>3 Years</option>
              <option>2.5 Years</option>
              <option>1 Year</option>
              <option>6 Months</option>
            </select>
            <button>Submit</button>
          </div>
          <div className="clientsection">
            <img src={Group81} alt="image" />
            <p>2,500 people booked Tommorowland Event in last 24 hours</p>
          </div>
        </div>
          </SplideSlide>
          <SplideSlide>
            
        <div className="herocontents">
          <img src={Vector1} alt="image" />
          <h2>
            No matter where <br />
            you’re going to, we’ll <br /> take you there
          </h2>
          <div className="anchors">
            <select>
              <option>Where To </option>   ~
              <option>Abuja</option>
              <option>SouthAfrica</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
            <select>
              <option>
                Travel Type
                <MdKeyboardArrowDown />
              </option>
              <option>Classic</option>
              <option>Business Class</option>
              <option>Free Lancers</option>
              <option>Special treatment</option>
            </select>
            <select>
              <option>
                Duration <MdKeyboardArrowDown />
              </option>
              <option>3 Years</option>
              <option>2.5 Years</option>
              <option>1 Year</option>
              <option>6 Months</option>
            </select>
            <button>Submit</button>
          </div>
          <div className="clientsection">
            <img src={Group81} alt="image" />
            <p>2,500 people booked Tommorowland Event in last 24 hours</p>
          </div>
        </div>
          </SplideSlide>
          <SplideSlide>
            
        <div className="herocontents">
          <img src={Vector1} alt="image" />
          <h2>
            No matter where <br />
            you’re going to, we’ll <br /> take you there
          </h2>
          <div className="anchors">
            <select>
              <option>Where To </option>   ~
              <option>Abuja</option>
              <option>SouthAfrica</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
            <select>
              <option>
                Travel Type
                <MdKeyboardArrowDown />
              </option>
              <option>Classic</option>
              <option>Business Class</option>
              <option>Free Lancers</option>
              <option>Special treatment</option>
            </select>
            <select>
              <option>
                Duration <MdKeyboardArrowDown />
              </option>
              <option>3 Years</option>
              <option>2.5 Years</option>
              <option>1 Year</option>
              <option>6 Months</option>
            </select>
            <button>Submit</button>
          </div>
          <div className="clientsection">
            <img src={Group81} alt="image" />
            <p>2,500 people booked Tommorowland Event in last 24 hours</p>
          </div>
        </div>
          </SplideSlide>
        </Splide>
      </div>
      <div className="partners">
        <img src={image11} alt="image" />
        <img src={image12} alt="image" />
        <img src={image13} alt="image" />
        <img src={image14} alt="image" />
        <img src={image15} alt="image" />
      </div>
      <div className="Service">
        <p>CATEGORY</p>
        <h5>We Offer Best Services</h5>
      </div>
      <div className="card-box">
        {CardDetails.map((item, i) => {
          return <Card item={item} key={i} />;
          // console.log(CardDetails[1]);
        })}
      </div>
      <div className="couples">
        <div className="icouple">
          <img src={illustration} alt="image" />
          <img src={Background} alt="image" className="element" />
        </div>
        <div className="couplestext">
          <p className="honeymoon">HONEYMOON SPECIALS</p>
          <h6>
            Our Romantic Tropical <br /> Destinations
          </h6>
          <p className="ptext">
            Escape to paradise with our romantic tropical destinations, perfect
            for <br /> creating unforgettable memories with your loved one.
            Stroll hand-in- <br />
            hand along pristine beaches with turquoise waters lapping at your
            feet. <br /> Indulge in luxurious resorts and world-class spa
            treatments.
          </p>
          <button onClick={handleShowModal}>View Packages</button>
        </div>
      </div>
      <div className="bookatrip">
        <div className="compact">
          <p>Fast & Easy</p>
          <h4>
            Get Your Favourite <br /> Resort Bookings
          </h4>
          <div className="flex1">
            <img src={selection1} alt="image" />
            <div>
              <h6>Choose Destination</h6>
              <p>
                Select your dream get away from our <br />
                curated lists of stunning destinations
              </p>
            </div>
          </div>
          <div className="flex2">
            <div className="imgflex2">
              <img src={watersport1} alt="image" />
            </div>
            <div>
              <h6>Check Availability</h6>
              <p>
                Easily check availabilty for your desired <br />
                travel dates and secure your spot
              </p>
            </div>
          </div>
          <div className="flex3">
            <div className="imgflex3">
              <img src={taxi1} alt="image" />
            </div>
            <div>
              <h6>Let's Go</h6>
              <p>
                Get ready for adventure and <br /> excitement-let's go and make{" "}
                <br /> unforgettable memories together!
              </p>
            </div>
          </div>
        </div>
        <div className="tripimg">
          <img src={illustration1} alt="image" />
        </div>
      </div>
      <div className="sepratir">
        <h3>
          Let's Make Your <br />
          Next Holiday Amazaing
        </h3>
        <img src={line1} alt="image" />
      </div>
      <div className="Europetours">
        <div className="europetext">
          <h6>PROMOTION</h6>
          <h4>
            We Provide You Best <br />
            Europe Sightseeing Tours
          </h4>
          <p>
            Discover the enchanting beauty of Europe with our expertly curated{" "}
            <br /> sightseeing tours. From the historic streets of Rome to the
            picturesque <br />
            landscapes of the Swiss Alps, each journey promises unforgettable{" "}
            <br /> experiences. Enjoy guided tours that delve into the rich
            culture
          </p>
          <button onClick={handleShowModal}>View Packages</button>
        </div>
        <div className="paris">
          <img src={parisimg} alt="image" />
        </div>
      </div>
      <div className="destinations">
        <div>
          <img src={destination1} alt="image" />
        </div>
        <div>
          <img src={destination2} alt="image" />
        </div>
        <div>
          <img src={destination3} alt="image" />
        </div>
        <div>
          <img src={destination4} alt="image" />
        </div>
      </div>
      <div className="explorepackages">
        <div className="explorenature">
          <p>PROMOTION</p>
          <h6>Explore Nature</h6>
          <button onClick={handleShowModal}>View Packages</button>
        </div>
        <div className="explorecities">
          <p>PROMOTION</p>
          <h6>Explore Cities</h6>
          <button onClick={handleShowModal}>View Packages</button>
        </div>
      </div>
      <div className="Tourpackages">
        <p>TRENDY</p>
        <h5>
          Our Trending Tour <br /> Packages
        </h5>
      </div>
      <Card2 />
      <Slider />
      <Footer />
      {/* <AboutUs/> */}
    </div>
  );
  // console.log(CardDetails[1]);
};

export default Homepage;
