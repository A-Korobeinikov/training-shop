import React from "react";
import Logo from "./../header-icons/logo-images.svg";
import Search from "./../header-icons/search-ico.svg";
import Globe from "./../header-icons/globe-ico.svg";
import User from "./../header-icons/user-ico.svg";
import Cart from "./../header-icons/cart-ico.svg";
import "./Header.css";

const Header = () => {
    return(
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
                <a href="#" className="side-menu-item"><img src={Search}/></a>
                <a href="#" className="side-menu-item"><img src={Globe}/></a>
                <a href="#" className="side-menu-item"><img src={User}/></a>
                <a href="#" className="side-menu-item"><img src={Cart}/></a>
            </div>
        </nav>
    );
}

export default Header;