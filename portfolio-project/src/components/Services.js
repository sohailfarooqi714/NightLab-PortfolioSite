import React from 'react'
import {fa} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop ,faFileCode, faGamepad, faMobile, faPen, faTrademark } from '@fortawesome/free-solid-svg-icons';


const services = () => {
    return (
        <div className="services">
            <h2 className="py-5">Our Services</h2>
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-12">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                                <h4>Web Design</h4>
                                <p>We use various tools to shape the aesthetics of your web application to your liking before heading into development.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                                <h4>Web Development</h4>
                                <p>Whether it's a website to get your business information across or a customized web app facilitating a business process.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGamepad} size="2x"/></div>
                                <h4>Game Development</h4>
                                <p>Got a striking idea for an engaging and interactive experience? Discuss with us, we are ready to execute it.</p>
                                <p></p>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faMobile} size="2x"/></div>
                                <h4>Mobile Development</h4>
                                <p>Want a mobile application tailored to your business requirements? Schedule a meeting with us!</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faPen} size="2x"/></div>
                                <h4>Professional Writing</h4>
                                <p>Looking for professional help writing product catalogue portfolios/ academic research documents/ blog posts?</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faTrademark} size="2x"/></div>
                                <h4>Digital Media Marketing</h4>
                                <p>Need help with marketing your business online on popular social media platforms to increase your outreach to potential clients?</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default services
