import React from "react";
import "./Subscribe.css";
import woman from "./subscribe-img/woman-img.svg";
import man from "./subscribe-img/man-img.svg";

const Subscribe = () => {
    return (
        <div className="app-wrapper">
            <div className="subscribe">
                <div className="content">
                    <div className="img-woman-subscribe">
                        <img src={woman} />
                    </div>
                    <div className="offer-subscribe">
                        
                        <div className="form-description-subscribe">
                            <p className="subtitle-subscribe">Special Offer</p>
                            <p className="title-subscribe">Subscribe <br/> And<span className="subscribe-effect">Get 10% Off</span></p>
                        </div>
                        <form className="form-subscribe">
                            <input type="text" placeholder="Enter your email" className="input-subscribe"></input>
                            <button className="btn-subscribe">Subscribe</button>
                        </form>
                    </div>
                    <div className="img-man-subscribe">
                        <img src={man} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;