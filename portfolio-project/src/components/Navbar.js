import React from "react";
import logo from "../logo.png";
import {Link} from "react-scroll";
//React Font Awesome Imports.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className = "container">

                <a className="navbar-brand" href="#"><img className = "logo" src={logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    < FontAwesomeIcon icon={faBars} style = {{color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" offset={-110} smooth={true} duration={250} className="nav-link" href="#">Home<span class="sr-only"> </span></Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="Services" offset={-50} smooth={false} className="nav-link" href="#">Services</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="Technologies" offset={-125} smooth={false} className="nav-link" href="#">Technologies</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="Portfolio" offset={15} smooth={false} className="nav-link" href="#">Portfolio</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="About" offset={-65} smooth={false} className="nav-link" href="#">About</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="Contacts" smooth={false} className="nav-link" href="#">Contact</Link >
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
