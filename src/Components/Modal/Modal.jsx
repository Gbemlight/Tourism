import React from "react";
import "./Modal.css";
import { MdErrorOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Modal = ({hideModal}) => {
  return (
    <div className="">
      <div className="modal-overlay"></div>
      <div className="mainmodal">
        <div className="modaltext"> 
        <FaTimes className="remove" onClick={hideModal}/>
          <h5>Build Your Own Package</h5> 
        </div>
        <div className="check">
          <input type="text" placeholder="Switzerland" />{" "}
          <MdErrorOutline className="checkicon" />
        </div>
        <div className="check">
          <input type="text" placeholder="Lauterbrunen" />{" "}
          <MdErrorOutline className="checkicon" />
        </div>
        <p>+ Add destination</p>
        <div className="clock">
          <input type="date" placeholder="Start Date" className="clock1"/>
          <FaArrowRight className="checkit" />
          <input type="text" placeholder="2-adults" className="clock2" />
        </div>
        <p>Activities prefrences(optional)</p>
        <div>
          <div className="flexcheck">
            <div className="">
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Culture</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Romantic</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Shopping</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Traditions</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Guide</label>
              </div>
            </div>
            <div className="">
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Outdoors</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Religious</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Business</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Walks</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Healthcare</label>
              </div>
            </div>
            <div className="">
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Relaxing</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Hiking</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Museums</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Fishing</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Accomondation</label>
              </div>
            </div>
            <div className="">
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Wildlife</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Musical</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Party</label>
              </div>
              <div className="flexchecktext">
                <input type="checkbox" /> <label>Cruise</label>
              </div>
            </div>
          </div>
        </div>
        <button>Build Packages</button>
      </div>
    </div>
  );
};

export default Modal;
