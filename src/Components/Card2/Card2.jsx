import React from 'react'
import './Card2.css'
import tourimage from '../../assets/Rectangle19305.svg'
import tourcountry from '../../assets/Ellipse623.svg'
import tourcountry1 from '../../assets/tourcountry1.svg'
import tourcountry2 from '../../assets/tourcountry2.svg'
import { CiCalendar } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import rate from '../../assets/rate.png'
import { IoLocationOutline } from "react-icons/io5";
import eagle from '../../assets/eagle.svg'
import statue from '../../assets/statue.svg'


const Card2 = () => {
  return (
    <div className='Cards'>
        <div className='card2'> 
      <div>
      <div className='touri'> <img src={tourimage} alt="image" /></div>
      <div className='tourc'><img src={tourcountry} alt="image" /></div>
      </div>
        <div className='date'>
           <div className='time'>
           <div><CiCalendar className='timeicon' /></div>
           <div className='timetext'><p>8 days</p></div>
           </div>
           <div className='people'>
            <div><IoPersonOutline  className='peopleicon'/></div>
            <div className='peopletext'>25 people going</div>
           </div>
        </div>
        <div className='ratings'>
            <div className='ratingtext'><h6>Switzerland</h6></div>
            <div className='ratingimage'><img src={rate} alt="image" /></div>
        </div>
        <div className='europe'>
            <div><IoLocationOutline className='europeicon'/></div>
            <div className='europetext'>Europe</div>
        </div>
        <div className='dollars'>
            <div className='dolls1'>1,000 $</div>
            <div className='dolls2'>1,200  $</div>
        </div>
        <p>Experience the breathtaking beauty of Switzerland, where <br /> majestic mountains, serene lakes, and charming villages <br /> await your discovery. Immerse yourself in the vibrant <br /> tapestry of life within the Amazon rainforest, where <br /> towering trees create a verdant </p>
        <button>Explore Now</button>
    </div>

    <div className='card2'> 
      <div>
      <div className='touri'> <img src={eagle} alt="image" /></div>
      <div className='tourc'><img src={tourcountry1} alt="image" /></div>
      </div>
        <div className='date'>
           <div className='time'>
           <div><CiCalendar className='timeicon' /></div>
           <div className='timetext'><p>8 days</p></div>
           </div>
           <div className='people'>
            <div><IoPersonOutline  className='peopleicon'/></div>
            <div className='peopletext'>30 people going</div>
           </div>
        </div>
        <div className='ratings'>
            <div className='ratingtext'><h6>Amazon</h6></div>
            <div className='ratingimage'><img src={rate} alt="image" /></div>
        </div>
        <div className='europe'>
            <div><IoLocationOutline className='europeicon'/></div>
            <div className='europetext'>Brazil</div>
        </div>
        <div className='dollars'>
            <div className='dolls1'>1,223 $</div>
            <div className='dolls2'>1,200  $</div>
        </div>
        <p>Immerse yourself in the vibrant tapestry of life within the <br /> Amazon rainforest, where towering trees create a verdant <br /> canopy overhead. Listen to the symphony of exotic <br /> birdsong and the gentle rustle of leaves as you traverse <br /> winding trails. Encounter magnificent wildlife, </p>
        <button>Explore Now</button>
    </div>

    <div className='card2'> 
      <div>
      <div className='touri'> <img src={statue} alt="image" /></div>
      <div className='tourc'><img src={tourcountry2} alt="image" /></div>
      </div>
        <div className='date'>
           <div className='time'>
           <div><CiCalendar className='timeicon' /></div>
           <div className='timetext'><p>8 days</p></div>
           </div>
           <div className='people'>
            <div><IoPersonOutline  className='peopleicon'/></div>
            <div className='peopletext'>155 people going</div>
           </div>
        </div>
        <div className='ratings'>
            <div className='ratingtext'><h6>Giza</h6></div>
            <div className='ratingimage'><img src={rate} alt="image" /></div>
        </div>
        <div className='europe'>
            <div><IoLocationOutline className='europeicon'/></div>
            <div className='europetext'>Egypt</div>
        </div>
        <div className='dollars'>
            <div className='dolls1'>1,200 $</div>
            <div className='dolls2'>1,200  $</div>
        </div>
        <p>Step into the ancient mysteries of Giza, where the iconic <br /> pyramids rise majestically against the desert horizon. <br /> Marvel at the precision of the Great Pyramid, a testament <br /> to the ingenuity of ancient Egyptian engineering. Explore <br /> the enigmatic Sphinx,  </p>
        <button>Explore Now</button>
    </div>
    </div>
  )
}

export default Card2