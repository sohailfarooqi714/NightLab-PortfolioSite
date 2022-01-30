import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Import Project Images
import Dastgyr1 from "../Dastgyr1.png";
import Dastgyr2 from "../Dastgyr2.png";
import Dastgyr3 from "../Dastgyr3.png";
import Dastgyr4 from "../Dastgyr4.png";
import Dastgyr5 from "../USER-JOURNEY.png";


const PortfolioCarousel = () => {
  return <Carousel
            showArrows={true}
            infiniteLoop={true}
            showStatus={false}
            autoPlay={true}
            centerMode={true}
            transitionTime={750}
            interval={3000}>
            <>
                <img className="carousel1-image" src={ Dastgyr1 }alt = "Image 1" />
            </>
            <>
                <img className="carousel1-image" src={ Dastgyr2 }alt = "Image 2" />
            </>
            <>
                <img className="carousel1-image" src={ Dastgyr3 }alt = "Image 3" />
            </>
            <>
                <img className="carousel1-image" src={ Dastgyr4 }alt = "Image 4" />
            </>
            <>
                <img className="carousel1-image" src={ Dastgyr5 }alt = "Image 5" />
            </>
         </Carousel>;
};



export default PortfolioCarousel;