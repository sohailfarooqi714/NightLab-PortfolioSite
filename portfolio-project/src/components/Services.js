import React from 'react'
import {fa} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop ,faFileCode, faGamepad, faMobile, faPen, faTrademark } from '@fortawesome/free-solid-svg-icons';


const services = () => {
    return (
        <div id="Services" className="services">
            <div className="services-info">
                <h2 className="py-5">Services</h2>
                    <div className="container">
                        <div className="row">

                            <div className="col-md-6 col-sm-12">
                                <div className="box">
                                    <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                                    <h6>Web Design</h6>
                                    <p>We use various tools to shape the aesthetics of your web application to your liking before heading into development.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="box">
                                    <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                                    <h6>Web Development</h6>
                                    <p>Whether it's a website to get your business information across or a customized web app facilitating a business process.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="box">
                                    <div className="circle"><FontAwesomeIcon className="icon" icon={faGamepad} size="2x"/></div>
                                    <h6>Game Development</h6>
                                    <p>Got a striking idea for an engaging and interactive experience? Discuss with us, we are ready to execute it.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="box">
                                    <div className="circle"><FontAwesomeIcon className="icon" icon={faMobile} size="2x"/></div>
                                    <h6>Mobile Development</h6>
                                    <p>Want a mobile application tailored to your business requirements? Schedule a meeting with us!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="box">
                                    <div className="circle"><FontAwesomeIcon className="icon" icon={faPen} size="2x"/></div>
                                    <h6>Professional Writing</h6>
                                    <p>Looking for professional help writing product catalogue portfolios/ academic research documents/ blog posts?</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="box">
                                    <div className="circle"><FontAwesomeIcon className="icon" icon={faTrademark} size="2x"/></div>
                                    <h6>Digital Media Marketing</h6>
                                    <p>Need help with marketing your business online on popular social media platforms to increase your outreach to potential clients?</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default services
