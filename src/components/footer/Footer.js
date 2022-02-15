import React from "react";
import "./Footer.css";
import Socials from './../header/Socials';
import phone from "./footer-icons/phone-ico.svg";
import location from "./footer-icons/location-ico.svg";
import clock from "./footer-icons/clock-ico.svg";
import info from "./footer-icons/mail-ico.svg";
import pay from "./footer-icons/pay-copyright-ico.svg";


const Footer = () => {
    return (
        <div className="app-wrapper">
            <div className="footer">
                <div className=" content">
                    <div className="joins">
                        <p className="title-join">BE IN TOUCH WITH US:</p>
                        <form className="form-join">
                            <input type="text" placeholder="Enter your email" className="input-join"></input>
                            <button className="btn-join">Join Us</button>
                        </form>
                        <Socials />
                    </div>
                </div>
            </div>
            <div className="nav-footer content">
                <div className="nav-content-footer">
                    <div className="nav-content-title">
                        Categories
                    </div>
                    <ul className="nav-list-content">
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link">Men</a>
                        </li>
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link">Women</a>
                        </li>
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link">Accessories</a>
                        </li>
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link">Beauty</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-content-footer">
                    <div className="nav-content-title">
                        Infomation
                    </div>
                    <ul className="nav-list-content">
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link">About Us</a>
                        </li>
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link">Contacts Us</a>
                        </li>
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link">Blog</a>
                        </li>
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link">FAQs</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-content-footer">
                    <div className="nav-content-title">
                        Useful links
                    </div>
                    <ul className="nav-list-content">
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link">Terms & Conditions</a>
                        </li>
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link">Returns & Exchanges</a>
                        </li>
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link">Shipping & Delivery</a>
                        </li>
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link">Privacy & Poilicy</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-content-footer">
                    <div className="nav-content-title">
                        CONTACT US
                    </div>
                    <ul className="nav-list-content">
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link contact-footer">
                                <img src={location} />
                                Belarus, Gomel, Lange 17
                            </a>
                        </li>
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link contact-footer">
                                <img src={phone} />
                                +375 29 100 20 30
                            </a>
                        </li>
                        <li className="nav-item-links">
                            <a href="#" className="nav-item-link contact-footer">
                                <img src={clock} />
                                All week 24/7
                            </a>
                        </li>
                        <li className="nav-item-links">
                            <a href="mail:info@clevertec.ru" className="nav-item-link contact-footer">
                                <img src={info} />
                                info@clevertec.ru
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                {/* <div className="content"> */}
                <div className="title-copyright">
                    Copyright © 2032 all rights reserved
                </div>
                <div className="pay-copyright">
                    <img src={pay} />
                </div>
                <a href="https://clevertec.ru/study/frontend.html" className="link-copywrite">
                    Clevertec.ru/training
                </a>
                {/* </div> */}
            </div>
        </div>
    );
}
export default Footer;