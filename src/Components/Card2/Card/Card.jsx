import React from 'react'
import './Card.css';

const Card = ({item}) => {
  console.log(item);
  return (
    <div className='Card-container'>
        <div className='img-container'>
           <img src={item.img} alt="img" />
           <h6>{item.heading}</h6>
           <p>{item.text}</p>
        </div>
    </div>
  )
}

export default Card