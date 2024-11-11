import React from "react";
import { Link } from "react-router-dom";
import DanhMucNoiBat from "../components/DanhMucNoiBat";

export default function Header() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Tất cả danh mục</Link>
                </li>
                <li>
                    <DanhMucNoiBat />
                </li>
                <li>
                    <Link to="/dangnhap">Đăng nhập</Link>
                </li>
            </ul>
        </>
    );
}
