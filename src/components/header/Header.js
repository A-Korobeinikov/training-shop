import React from "react";
import Logo from "./assets/header-icons/logo-images.svg";
import Search from "./assets/header-icons/search-ico.svg";
import Globe from "./assets/header-icons/globe-ico.svg";
import User from "./assets/header-icons/user-ico.svg";
import Cart from "./assets/header-icons/cart-ico.svg";
import "./Header.css";
import PreHeader from './PreHeader';

const Header = () => {
    return (
        <div className="app-wrapper">
            <PreHeader />
            <nav className="main-menu content">
                <a href="#">
                    <img src={Logo} />
                </a>
                <div className="nav-list">
                    <ul className="menu-conteiner">
                        <li className="menu-item"><a href="#">About Us</a></li>
                        <li className="menu-item"><a href="#">Women</a></li>
                        <li className="menu-item"><a href="#">Men</a></li>
                        <li className="menu-item"><a href="#">Beauty</a></li>
                        <li className="menu-item"><a href="#">Accessories</a></li>
                        <li className="menu-item"><a href="#">Blog</a></li>
                        <li className="menu-item"><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="right-side-menu">
                    <a href="#" className="side-menu-item"><img src={Search} /></a>
                    <a href="#" className="side-menu-item"><img src={Globe} /></a>
                    <a href="#" className="side-menu-item"><img src={User} /></a>
                    <a href="#" className="side-menu-item"><img src={Cart} /></a>
                </div>
            </nav>
        </div>

    );
}

export default Header;