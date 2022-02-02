import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Import Project Images
import Khattaapp1 from "../Khattaapp1.png";
import Khattaapp2 from "../Khattaapp2.png";
import Khattaapp3 from "../Khattaapp3.png";
import Dastgyr4 from "../Dastgyr4.png";
import Dastgyr5 from "../USER-JOURNEY.png";


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
                <img className="carousel1-image" src={ Khattaapp1 }alt = "Image 1" />
            </>
            <>
                <img className="carousel1-image" src={ Khattaapp2 }alt = "Image 2" />
            </>
            <>
                <img className="carousel1-image" src={ Khattaapp3 }alt = "Image 3" />
            </>
         </Carousel>;
};



export default PortfolioCarousel3;