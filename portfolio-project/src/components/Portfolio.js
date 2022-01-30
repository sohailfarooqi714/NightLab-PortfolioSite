import React from 'react'
import PortfolioCarousel from "./PortfolioCarousel";
import PortfolioCarousel1 from "./PortfolioCarousel1";



const Portfolio = () => {
    return (
        <div id="Portfolio" className="portfolio-wrapper">
            <div className="container">
                <div className="row">

                    <h3 className="text-uppercase text-center py-5">Portfolio</h3>
                                
                                <div className="col-md-6 col-sm-12">
                                    <h5 align="center">GAME WORK</h5>
                                <div className="portfolio-image-box row justify-content-center">
                                        <PortfolioCarousel/>
                                        <a href="https://metalseinen.itch.io/project-venus" target="_blank" className="btn-portfolio" align="center"> Visit </a>
                                </div>
                                </div>
                        {/*-*/}
                                <div className="col-md-6 col-sm-12">
                                    <h5 align="center">DESIGN WORK</h5>
                                <div className="portfolio-image-box row justify-content-center">
                                        <PortfolioCarousel1/>
                                        <a href="#" download className="btn-portfolio" align="center"> View </a>
                                </div>
                                </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio; 
