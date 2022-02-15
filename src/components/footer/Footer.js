import React from "react";
import "./Footer.css";
import Socials from './../header/assets/Socials';


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
                </div>
        </div>   
    );
}
export default Footer;