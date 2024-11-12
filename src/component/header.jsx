import React from "react";
import logo from '../img/logo-coolmate-new.svg'
import search_icon from '../img/search.svg'
import user_icon from '../img/user.svg'
import cart_icon from '../img/cart.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss'
const Header = () => {
    return (
        <div className="header">
            <div className="logo_header">
                <img src={logo} alt="" />
            </div>
            <div className="nav_header">
                <ul className="nav_sub">
                    <li className="nav_sub_item">
                        <a href="">SẢN PHẨM</a>
                    </li>
                    <li className="nav_sub_item">
                        <a href="">ĐỒ LÓT</a>
                    </li>
                    <li className="nav_sub_item">
                        <a href="">ĐỒ THỂ THAO</a>
                    </li>
                </ul>
            </div>
            <div className="header_actions">
                <div className="header_actions_search">
                    <a href="#">
                        <img src={search_icon} alt="" />
                    </a>
                    <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                </div>
                <div className="header_actions_btn">
                    <a href="">
                        <img src={user_icon} alt="" />
                    </a>
                </div>
                <div className="header_actions_btn">
                    <a href="">
                        <img src={cart_icon} alt="" />
                    </a>
                </div>

            </div>
        </div>
    )
}
export default Header;