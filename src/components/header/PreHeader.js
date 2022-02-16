import React from "react";
import './PreHeader.css';
import phone from "./assets/header-icons/phone-ico.svg";
import location from "./assets/header-icons/location-ico.svg";
import clock from "./assets/header-icons/clock-ico.svg";
import Socials from "./Socials";


const PreHeader = () => {
    return (

        <div className="app-wrapper">
            <div className="contacts">
                <div className=" preheader">
                    <a href="#top" className="contact phone">
                        <img src={phone} alt = "phone"/>
                        +375 29 100 20 30
                    </a>
                    <a href="#top" className="contact location">
                        <img src={location} alt = "location"/>
                        Belarus, Gomel, Lange 17
                    </a>
                    <a href="#top" className="contact clock">
                        <img src={clock} alt = "clock"/>
                        All week 24/7
                    </a>
                </div>
                <Socials />
            </div>
        </div>
    );
}

export default PreHeader;