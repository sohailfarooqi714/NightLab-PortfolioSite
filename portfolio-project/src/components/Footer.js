import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon
} from "react-share";

const Footer = () => {
  return    <div className="footer"> 
                <div className="container">
                    <div className="row">
                        <div className="footer-address col-md-6 col-sm-12 ">
                            <div className="d-flex justify-content-center" align="center">
                                <p>
                                    Apt B-1002 Alpine Plaza Block 10 Gulistan-e-Johar, Karachi, Pakistan
                                </p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <a href="tel: 0334-368-2117">+92(334)368-2117</a>
                            </div>

                            <div className="d-flex justify-content-center">
                                <p>sohailfarooqi714@gmail.com</p>
                            </div>
                        </div>

                        {/*<div className="col-lg-3 col-md-2 col-sm-6">
                            <div className="row">
                                <div className="col">
                                    <a className="footer-nav">Home</a>
                                    <br/>
                                    <a className="footer-nav">Services</a>
                                    <br/>
                                    <a className="footer-nav">Technologies</a>
                                </div>
                                <div className="col">
                                    <a className="footer-nav">Portfolio</a>
                                    <br/>
                                    <a className="footer-nav">About</a>
                                    <br/>
                                    <a className="footer-nav">Contact</a>
                                </div>
                            </div>
                        </div>*/}

                            <div className="social-icons col-md-6 col-sm-12 ">
                                <div className="d-flex justify-content-center">
                                        <FacebookShareButton 
                                         url={""}
                                         quote={"Software Developer"}
                                         hashtag="#Dev/Design/Game"
                                        > 
                                            <FacebookIcon className="mx-3" size={36} />
                                        </FacebookShareButton>

                                        <TwitterShareButton 
                                         url={""}
                                         quote={"Software Developer"}
                                         hashtag="#Dev/Design/Game"
                                        > 
                                            <TwitterIcon className="mx-3" size={36} />
                                        </TwitterShareButton>

                                        <LinkedinShareButton 
                                         url={""}
                                         quote={"Software Developer"}
                                         hashtag="#Dev/Design/Game"
                                        > 
                                            <LinkedinIcon className="mx-3" size={36} />
                                        </LinkedinShareButton>

                                        <RedditShareButton 
                                         url={""}
                                         quote={"Software Developer"}
                                         hashtag="#Dev/Design/Game"
                                        > 
                                            <RedditIcon className="mx-3" size={36} />
                                        </RedditShareButton>
                                </div>
                                <p className="pt-3 text-center">
                                    Copyright&copy;
                                    {new Date().getFullYear()} Night Lab Interactive | All Rights Reserved.
                                </p>
                            </div>

                    </div>
                </div>
        </div>;
};

export default Footer;
