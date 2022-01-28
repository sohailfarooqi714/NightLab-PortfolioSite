import React from 'react'
import Venus from "../Venus-poster-cold.png";
import Dastgyr from "../USER-JOURNEY.png";

const Portfolio = () => {
    return (
        <div id="Portfolio" className="portfolio-wrapper">
            <div className="container">
                <div className="row">

                    <h3 className="text-uppercase text-center py-5">Portfolio</h3>
                                
                                <div className="col-md-6 col-sm-12">
                                <div className="portfolio-image-box row justify-content-center">
                                    <img className="portfolio-image" src={Venus} alt="Venus poster image.." />
                                </div>
                                </div>
                        {/*-*/}
                                <div className="col-md-6 col-sm-12">
                                <div className="portfolio-image-box row justify-content-center">
                                    <img className="portfolio-image" src={Dastgyr} alt="Dastgyr image.." />
                                </div>
                                </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio; 
