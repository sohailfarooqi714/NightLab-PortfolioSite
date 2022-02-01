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

                                        <h6 align="center"><b>Project Venus</b></h6>

                                        <br></br>
                                        <br></br>

                                        <p align="center"><b><i>What happens if the AI manipulates the sentiments and politics of humanity?</i></b> 
                                        
                                        <br></br>
                                        <br></br>

                                        Come read the story of ' VENUS'  | An AI program created by the nation of Debal to wage cyber war and defense against nations. 
                                        A story set in a fictional timeline and takes place in the nation state of 'Debal', a state which was formed in the 1950s in the 
                                        region where Pakistan and India are today. </p>
                                        <a href="https://metalseinen.itch.io/project-venus" target="_blank" className="btn-portfolio" align="center"> Visit </a>
                                </div>
                                </div>
                        {/*-*/}
                                <div className="col-md-6 col-sm-12">
                                    <h5 align="center">DESIGN WORK</h5>
                                <div className="portfolio-image-box row justify-content-center">
                                        <PortfolioCarousel1/>

                                        <h6 align="center"><b>UI Sample for Dastgyr</b></h6>

                                        <br></br>
                                        <br></br>


                                        <p align="center" > <b><i>The User interface design sample covers the following:</i></b>

                                        <br></br>
                                        <br></br>

                                         1. Products Catalogue
                                         <br></br>
                                         2. Deals Catalogue
                                         <br></br>
                                         3. Checkout Page
                                         <br></br>
                                         4. Complete User Journey
                                        </p>

                                        <a href="#" download className="btn-portfolio" align="center"> View </a>
                                </div>
                                </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio; 
