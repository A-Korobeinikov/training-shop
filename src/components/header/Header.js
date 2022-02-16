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
                <a href="#top">
                    <img src={Logo} alt="logo"/>
                </a>
                <div className="nav-list">
                    <ul className="menu-conteiner">
                        <li className="menu-item"><a href="#top">About Us</a></li>
                        <li className="menu-item"><a href="#top">Women</a></li>
                        <li className="menu-item"><a href="#top">Men</a></li>
                        <li className="menu-item"><a href="#top">Beauty</a></li>
                        <li className="menu-item"><a href="#top">Accessories</a></li>
                        <li className="menu-item"><a href="#top">Blog</a></li>
                        <li className="menu-item"><a href="#top">Contact</a></li>
                    </ul>
                </div>
                <div className="right-side-menu">
                    <a href="#top" className="side-menu-item"><img src={Search} alt = "search"/></a>
                    <a href="#top" className="side-menu-item"><img src={Globe} alt = "globe"/></a>
                    <a href="#top" className="side-menu-item"><img src={User} alt = "user"/></a>
                    <a href="#top" className="side-menu-item"><img src={Cart} alt = "cart"/></a>
                </div>
            </nav>
        </div>

    );
}

export default Header;