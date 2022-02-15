import React from "react";
import './PreHeader.css';
import phone from "./../header-icons/phone-ico.svg";
import location from "./../header-icons/location-ico.svg";
import clock from "./../header-icons/clock-ico.svg";
import Socials from "./Socials";


const PreHeader = () => {
    return(
            
            <div className="app-wrapper">
                <div className="contacts">
                    <div className=" preheader">
                        <a href="#" className="contact phone">
                            <img src={phone} />
                                +375 29 100 20 30
                        </a>              
                        <a href="#" className="contact location">
                            <img src={location} />
                                Belarus, Gomel, Lange 17
                        </a>              
                          <a href="#" className="contact clock">
                            <img src={clock} />
                            A   ll week 24/7
                        </a>              
                    </div>
                    <   Socials />
                 </div>
            </div>           
    );
}

export default PreHeader;