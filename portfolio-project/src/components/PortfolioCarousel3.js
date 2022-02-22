import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Import Project Images
import Content1 from "../Content1.png";
import Content2 from "../Content2.png";
import Content3 from "../Content3.png";
import Content4 from "../Content4.png";
import Content5 from "../Content5.png";


const PortfolioCarousel3 = () => {
  return <Carousel
            showArrows={true}
            infiniteLoop={true}
            showStatus={false}
            autoPlay={true}
            centerMode={true}
            transitionTime={750}
            interval={3000}>
            <>
                <img className="carousel-image" src={ Content1 }alt = "Image 1" />
            </>
            <>
                <img className="carousel-image" src={ Content2 }alt = "Image 2" />
            </>
            <>
                <img className="carousel-image" src={ Content3 }alt = "Image 3" />
            </>
            <>
                <img className="carousel-image" src={ Content4 }alt = "Image 4" />
            </>
            <>
                <img className="carousel-image" src={ Content5 }alt = "Image 5" />
            </>
         </Carousel>;
};



export default PortfolioCarousel3;