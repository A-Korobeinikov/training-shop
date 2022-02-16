import React from "react";
import "./Promo.css"

const Promo = () => {
    return (
        <div className="promo">
            <div className="content">
                <div className="colection-promo">
                    <a href="#" className="lookbook-promo">                        
                        <div className="description-promo">
                            <p className="subtitle-promo">New Season</p>
                            <p className="title-promo">lookbook collection</p>
                        </div>                        
                    </a>
                    <a href="#" className="sale-promo">
                        <div className="description-promo">
                            <p className="subtitle-promo">Sale</p>
                            <p className="title-promo">Get UP to <span className="sale-effect">50% off</span></p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Promo;