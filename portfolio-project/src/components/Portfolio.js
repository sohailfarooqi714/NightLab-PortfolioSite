import React from 'react'
import PortfolioCarousel from "./PortfolioCarousel";
import PortfolioCarousel1 from "./PortfolioCarousel1";
import PortfolioCarousel2 from "./PortfolioCarousel2";
import PortfolioCarousel3 from "./PortfolioCarousel3";





const Portfolio = () => {
    return (
        <div id="Portfolio" className="portfolio-wrapper">
            <div className="container">
                <div className="row">

                    <h3 className="text-uppercase text-center py-5">Portfolio</h3>
                                
                                <div className="col-md-6 col-sm-12">
                                    <h5 align="center">GAME WORK</h5>
                                <div className="portfolio-image-box row justify-content-center" align="center">
                                        <PortfolioCarousel/>

                                        <h6 align="center"><b>Project Venus</b></h6>

                                        <br></br>

                                        <div className="portfolio-description-box row justify-content-center">
                                            <p align="center"><b><i>What happens if the AI manipulates the sentiments and politics of humanity?</i></b> 
                                            <br></br>
                                            <br></br>

                                            An AI program created by the nation of Debal to wage cyber war and defense against nations. 
                                            A story set in a fictional timeline which takes place in the nation state of 'Debal', a state which was formed in the 1950s in the 
                                            region where Pakistan and India are today. </p>
                                            <a href="https://metalseinen.itch.io/project-venus" target="_blank" className="btn-portfolio" align="center"> Visit </a>
                                        </div>
                                </div>
                                </div>
                        {/*-*/}
                                <div className="col-md-6 col-sm-12">
                                    <h5 align="center">DESIGN WORK</h5>
                                <div className="portfolio-image-box row justify-content-center" align="center">
                                        <PortfolioCarousel1/>

                                        <h6 align="center"><b>UI Sample for Dastgyr</b></h6>

                                        <br></br>

                                        <div className="portfolio-description-box row justify-content-center">
                                            <p align="center" > <b><i>The mobile user interface design experience sample covers the following:</i></b>

                                            <br></br>
                                            <br></br>

                                            This user interface design sample covers a product catalogues page consisting of item listings,
                                            a deals page with grouped items as well as related/recommended products. A checkouts page with
                                            complete payment functionality options as well as discount for vendors.
                                            </p>
                                            <a href="https://drive.google.com/drive/folders/1L--a6DRF6ZHPVDe0JkAmGj7ZODMnFl1i" target="_blank" className="btn-portfolio" align="center"> View </a>
                                        </div>
                                </div>
                                </div>

                                {/*-*/}
                                <div className="col-md-6 col-sm-12">
                                    <h5 align="center">WEB WORK</h5>
                                <div className="portfolio-image-box row justify-content-center" align="center">
                                        <PortfolioCarousel2/>

                                        <h6 align="center"><b>Khata App</b></h6>

                                        <br></br>

                                        <div className="portfolio-description-box row justify-content-center">
                                            <p align="center" > <b><i>Manage your Business & ledgers on your phone.</i></b>

                                            <br></br>
                                            <br></br>

                                            KhataApp is 100% free, safe, and secure application which provides a platform to businesses and individuals to maintain and track their current and historical credit(udhar) book in a simpler manner.
                                            Pakistan ka Digital KhataApp
                                            </p>
                                            <a href="https://khatapp.com/" target="_blank" className="btn-portfolio" align="center"> Visit </a>
                                        </div>
                                </div>
                                </div>

                                {/*-*/}
                                <div className="col-md-6 col-sm-12">
                                    <h5 align="center">CONTENT CREATION</h5>
                                <div className="portfolio-image-box row justify-content-center" align="center">
                                        <PortfolioCarousel3/>

                                        <h6 align="center"><b>Content Writing Samples</b></h6>

                                        <br></br>

                                        <div className="portfolio-description-box row justify-content-center">
                                            <p align="center" > <b><i>Research papers, blogs, surveys, technicals documents.</i></b>

                                            <br></br>
                                            <br></br>

                                            Hire us to write your next academic research paper, or a technical software requirements specification / system design document,
                                            catalogue product descriptions, technology / gaming blog. We cover a wide array of topics. 
                                            </p>
                                            <a href="https://drive.google.com/drive/folders/11CZyl_2420xJejImSsNfvAVvochWcLKd" target="_blank" className="btn-portfolio" align="center"> Read </a>
                                        </div>
                                </div>
                                </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio; 
