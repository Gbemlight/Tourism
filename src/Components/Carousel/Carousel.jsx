import React from 'react'
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = () => {
  return (
    // <div>Carousel</div>
    <Carousel
    showThumbs={false}
    autoPlay
    interval={3000}
    infiniteLoop
    showStatus={false}
>
    <div className="carousel-slide slide1">
        <p className="legend">Slide 1</p>
    </div>
    <div className="carousel-slide slide2">
        <p className="legend">Slide 2</p>
    </div>
    <div className="carousel-slide slide3">
        <p className="legend">Slide 3</p>
    </div>
</Carousel>
  )
}
export default Carousel