import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { VscNoNewline } from "react-icons/vsc";
import Logo from "../../assets/logo(1).svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navlink">
      <img src={Logo} alt="logo" />
        <ul>
          <Link to='/' style={{textDecoration:'none'}}><li>
            <a className="navdrop" href="#">
              Home
            </a>
          </li> </Link>
          <Link to='AboutUs'style={{textDecoration:'none'}}><li><a className="navdrop" href="#">About</a></li></Link>
          <li className="nav-item dropdown">
            <a className="navdrop" href="#">
              Services
            </a>
            <div className="dropdown-menu">
              <li className="dropdown-item">Honeymoon Packages</li>
              <li className="dropdown-item">Tours Packages</li>
              <li className="dropdown-item">Musical Events</li>
              <li className="dropdown-item">Build Packages</li>
            </div>
          </li>
          <li>
            <a className="navdrop" href="#">
              Upcoming Packages
            </a>
          </li>
        </ul>
        <button className="getbtn">Get in Touch</button>
      </nav>
    </div>
  );
};

export default Navbar;
