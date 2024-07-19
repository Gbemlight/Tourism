import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/footerlogo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInfinityBold } from "react-icons/pi";
import footerline from "../../assets/footerline.png";
import mount from "../../assets/mount.png";
import  { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const emailRegex = /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/

  const handleSubscribe = () => {
    if(email === ''){
      alert('Email cannot be empty')
    }else if(!emailRegex.test(email)){
      alert('Enter a valid email address')
    }else if (email) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    } 
  };
  return (
    <div>
      <div className="footer">
        <div className="logotext">
          <img src={footerlogo} alt="logo" />
          <p>
            Travel helps companies <br /> manage payments easily.
          </p>
          <div className="pages">
            <div>
              <FaLinkedinIn />
            </div>
            <div>
              <FaFacebookMessenger />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <PiInfinityBold />
            </div>
          </div>
        </div>
        <div className="footertags">
          <h6>Company</h6>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Pricing</p>
        </div>
        <div className="footertag">
          <h6>Destinations</h6>
          <p>Maldives</p>
          <p>Los Angelas</p>
          <p>Las Vegas</p>
          <p>Torronto</p>
        </div>
        <div className="subscribetext">
          <h6>Join Our Newsletter</h6>
          <div className="subscribe">
            {/* <input type="email" placeholder=" Your email address" />{" "}
            <button>Subscribe</button> */}
            {/* return ( */}
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
      />
      <button onClick={handleSubscribe}>Subscribe</button>
      {showPopup && (
        <div className="popup">
          <p style={{color: "green"}}>Thank you for subscribing!</p>
        </div>
      )}
    </div>
  {/* ); */}
          </div>
          <div className="lasttext">
            * Will send you weekly updates for your better <br /> tour packages.
          </div>
        </div>
      </div>
      <div className="line">
        <img src={footerline} alt="image" />
      </div>
      <div className="mount">
        <img src={mount} alt="image" />
      </div>
      <div className="lastext">
      <p>Copyright @ Xpro 2022. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
