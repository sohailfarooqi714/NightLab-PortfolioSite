import React from 'react';
import ReactIcon from "../React-Icon.png";
import WordpressIcon from "../Wordpress-Icon.png";
import AdobexdIcon from "../Adobexd-Icon.png";
import PhotopeaIcon from "../Photopea-Icon.png";
import CoronaIcon from "../Coronasdk-Icon.png";
import UnityIcon from "../Unity-Icon.png";




export const Technologies = () => {
    return (
       
        <div id="Technologies" className="technologies">
            <div className="technologies-info">
                        <h3 className="py-5">Technologies</h3>
                            <div className="container">
                                <div className="row">
                                    
                                            <div className="col-md-4 col-sm-12">
                                            <a href="https://www.adobe.com/products/xd.html" target="_blank">
                                                    <div className="box-1">
                                                            <div className="tech-img"><img className="icon" src={AdobexdIcon} alt="Adobe XD logo..." /></div>
                                                            <h5 className = "technologies-heading">Adobe XD</h5>
                                                            <p>Adobe XD is a powerful vector-based experience design platform that gives teams 
                                                                the tools they need to craft the world's best experiences collaboratively.
                                                            </p>
                                                    </div>
                                                    </a>
                                            </div>

                                                <div className="col-md-4 col-sm-12">
                                                <a href="https://www.photopea.com" target="_blank">
                                                    <div className="box-2">
                                                        <div className="tech-img"><img className="icon" src={PhotopeaIcon} alt="Photopea logo..." /></div>
                                                        <h5 className = "technologies-heading">Photopea</h5>
                                                        <p>Photopea is a graphics editor works with raster and vector 
                                                            graphics. Used for editing, illustrations, web design or converting between different 
                                                            image formats.
                                                        </p>
                                                    </div>
                                                    </a>

                                                </div>

                                                <div className="col-md-4 col-sm-12">
                                                <a href="https://www.wordpress.com" target="_blank">
                                                    <div className="box-3">
                                                        <div className="tech-img"><img className="icon" src={WordpressIcon} alt="Wordpress logo..." /></div>
                                                        <h5 className = "technologies-heading">WordPress</h5>
                                                        <p>WordPress is an open-source website creation platform. On a more technical level, WordPress is a content 
                                                            management system (CMS).
                                                        </p>
                                                    </div>
                                                </a>
                                                </div>

                                                <div className="col-md-4 col-sm-12">
                                                <a href="https://reactjs.org/" target="_blank">
                                                    <div className="box-4">
                                                        <div className="tech-img"><img className="icon" src={ReactIcon} alt="React logo..." /></div>
                                                        <h5 className = "technologies-heading">React JS</h5> 
                                                        <p>React JS is JavaScript library used for building reusable UI components.It encourages the creation 
                                                            of reusable UI components, which present data that changes over time.
                                                        </p>
                                                    </div>
                                                </a>
                                                </div>

                                                <div className="col-md-4 col-sm-12">
                                                <a href="https://solar2d.com/" target="_blank">
                                                    <div className="box-5">
                                                        <div className="tech-img"><img className="icon" src={CoronaIcon} alt="Corona logo..." /></div>
                                                        <h5 className = "technologies-heading">Solar 2D</h5>
                                                        <p>Solar2D (formerly Corona SDK) is an open-source, cross-platform software development kit originally developed by 
                                                            Corona Labs Inc.
                                                         </p>
                                                    </div>
                                                </a>
                                                </div>

                                                <div className="col-md-4 col-sm-12">
                                                <a href="https://unity.com/" target="_blank">
                                                    <div className="box-6">
                                                        <div className="tech-img"><img className="icon" src={UnityIcon} alt="Unity logo..." /></div>
                                                        <h5 className = "technologies-heading">Unity</h5>
                                                        <p> Unity is an all purpose game engine that supports 2D and 3D graphics.
                                                            Unity is particularly popular for mobile game development.
                                                        </p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div>
                            </div>
            
            </div>
        </div>
    )
}

export default Technologies;