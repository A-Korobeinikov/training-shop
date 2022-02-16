import React from "react";
// import Banner from "./main-images/main-image.jpg";
import WomenCategory from "./main-images/women-categories.jpg";
import MenCategory from "./main-images/men-categories.jpg";
import Accessories from "./main-images/accessories-image.jpg";
import ArrowLeft from "./main-images/arrow-slider-left.svg";
import ArrowRight from "./main-images/arrow-slider-right.svg";
import Shipping from "./main-images/shipping-ico.svg";
import Return from "./main-images/return-ico.svg";
import Support from "./main-images/support-ico.svg";
import "./Main.css";


const Main = () => {
    return (
        <div className="app-wrapper">
            <div className="main content">
                <div className="main-content">
                    <div clasName="main-slider-banner">
                        <div className="banner-slider">
                            <button className="banner-slider-left"><img src={ArrowLeft} alt="arrowleft"/></button>
                            <div className="main-description">
                                <p className="main-subtitle">Banner</p>
                                <h1 className="main-title">your Title text </h1>
                            </div>
                            <button className="banner-slider-right"><img src={ArrowRight} alt="arrowright"/></button>
                        </div>
                    </div>
                    <div className="main-categories">
                        <div className="sex-categories">
                            <div className="women-category">
                                <a href="#top" className="link-women-section gender-section-effects">
                                    <span className="title-women-section title-main-category"> Women </span>
                                    <img src={WomenCategory} alt="women"/>
                                </a>
                            </div>
                            <div className="men-category">
                                <a href="#top" className="link-women-section gender-section-effects">
                                    <span className="title-women-section title-main-category"> Men </span>
                                    <img src={MenCategory} alt="men"/>
                                </a>
                            </div>
                        </div>
                        <div className="accessories-category">
                            <a href="#top" className="link-accessories-section gender-section-effects">
                                <span className="title-accessories-section title-main-category"> Accessories </span>
                                <img src={Accessories} alt="accessories"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="benefits">
                    <div className="shipping-benefit benefits-content">
                        <div className="shipping-image">
                            <img src={Shipping} alt="shipping"/>
                        </div>
                        <div className="shipping-description benefits-descriptions">
                            <p className="shiping-title title-benefits">FREE SHIPPING</p>
                            <p className="shiping-subtitle subtitle-benefits">On all UA order or order above $100</p>
                        </div>
                    </div>
                    <div className="return-benefit benefits-content">
                        <div className="return-image">
                            <img src={Return} alt="return"/>
                        </div>
                        <div className="return-description benefits-descriptions">
                            <p className="return-title title-benefits">SUPPORT 24/7</p>
                            <p className="return-subtitle subtitle-benefits">Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                    <div className="support-benefit benefits-content">
                        <div className="support-image">
                            <img src={Support} alt="support"/>
                        </div>
                        <div className="support-description benefits-descriptions">
                            <p className="support-title title-benefits">FREE SHIPPING</p>
                            <p className="support-subtitle subtitle-benefits">Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;