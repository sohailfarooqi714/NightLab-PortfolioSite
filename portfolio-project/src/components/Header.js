import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
    return (
       <div id="home" className="header-wrapper"> 
            <div className="main-info">
                <h1> Digital Asset Management </h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web App Development", "Game Development", "Prototyping", "Digital Content Creation"]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />
                <Link smooth={true} to="Contacts" smooth={true} duration={250} className="btn-main-offer">Get in touch</Link >
            </div>
       </div>
    )
}

export default Header
