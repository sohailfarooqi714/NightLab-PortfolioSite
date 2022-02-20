import React from 'react';
import {
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinIcon
} from "react-share";

const Footer = () => {
  return    <div className="footer"> 
                <div className="container">
                    <div className="row">
                        <div className="footer-address col-md-6 col-sm-12 ">
                            <div className="d-flex justify-content-center" align="center">
                                <p>
                                    Karachi, Pakistan
                                </p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <a href="tel: 0334-368-2117">+92(334)368-2117</a>
                            </div>

                            <div className="d-flex justify-content-center">
                                <a href="mailto:sohailfarooqi714@gmail.com">sohailfarooqi714@gmail.com</a>
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
                                            
                                            <a href="https://www.facebook.com/sohail.a.faruqui" target="_blank">
                                                <FacebookIcon className="mx-3" size={36} />
                                                </a>
                                            
                                            <TwitterIcon className="mx-3" size={36} />
                                       
                                            <a href="https://www.linkedin.com/in/sohail-farooqi-4271111b2/" target="_blank">
                                                <LinkedinIcon className="mx-3" size={36} />
                                            </a>
                                        
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
