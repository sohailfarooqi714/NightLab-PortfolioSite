import React from "react";
import LandingImage from "../landing-image.png";


export const Landing = () => {
    return (
        <div className="landing-wrapper">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                        <div className="photo-wrap mb-3">
                            <img className="landing-img" src={LandingImage} alt="Night Lab.." />
                        </div>     
                    </div>
                    <div className="col-lg-6 col-xm-12">
                        <div className="landing-text">
                            <h6 className="landing-heading" align="center">We work through the clock, committed to delivering excellence.</h6>
                            <p className="landing-text" align="center">Night Lab is a team of trained and qualified individuals ready to deliver innovative solutions to their clients. 
                            Our aim is to provide industry grade software design, development, digital media marketing and digital content creation.
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Landing;