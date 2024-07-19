import React from "react";
import "./Archive.css";
// import Footer from '../../Components/Footer/Footer'
import Navbar from "../../Components/Navbar/Navbar";
import { BsCalendarDate } from "react-icons/bs";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import { PiDownloadSimpleBold } from "react-icons/pi";

const Archive = () => {
  return (
    <div>
      <div className="archivehero">
        <div className="archiveheader">
          <Navbar />
        </div>
        <div className="archivetext">
          <p>SEARCH TOUR</p>
          <h5>Travel With Us</h5>
        </div>
      </div>
      <div className="archiveflex">
        <div>
          <div className="cush">
            <BsCalendarDate className="cushimg"/> 
             <p>Date</p>
          </div>
        </div>
        <div>
          <div className="cush">
            {" "}
            <FaArrowUpFromBracket className="cushimg"/>
            <p>Price Low To High</p>
          </div>
        </div>
        <div>
            <div className="cush">
            <PiDownloadSimpleBold className="cushimg" />
            <p>Price High To Low</p>
            </div>
        </div>
        <div>
          <div className="cush">
            <LuPencilLine className="cushimg" />
            <p>Name (A-Z)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
