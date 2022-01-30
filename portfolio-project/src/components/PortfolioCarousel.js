import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Import Project Images
import Venus from "../Venus-poster-cold.png";
import Venus2 from "../Venus2.png";
import Venus3 from "../Venus3.png";
import Venus4 from "../Venus4.png";
import Venus5 from "../Venus5.png";


const PortfolioCarousel = () => {
  return <Carousel
            showArrows={true}
            infiniteLoop={true}
            showStatus={false}
            autoPlay={true} 
            centerMode={true}
            transitionTime={750}
            interval={3000}
            >
            <>
                <img className="carousel-image" src={ Venus }alt = "Image 1" />
            </>
            <>
                <img className="carousel-image" src={ Venus2 }alt = "Image 2" />
            </>
            <>
                <img className="carousel-image" src={ Venus3 }alt = "Image 3" />
            </>
            <>
                <img className="carousel-image" src={ Venus4 }alt = "Image 4" />
            </>
            <>
                <img className="carousel-image" src={ Venus5 }alt = "Image 5" />
            </>
         </Carousel>;
};



export default PortfolioCarousel;



