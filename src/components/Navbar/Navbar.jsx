import React from "react";
import style from './Navbar.module.css'
function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <a href="google.com">Profile</a>
            </div>
            <div className={style.item}>
                <a  href="google.com">Messages</a>
            </div>
            <div className={style.item}>
                <a  href="google.com">News</a>
            </div>
            <div className={style.item}>
                <a  href="google.com">Music</a>
            </div>
            <div className={style.item}>
                <a href="google.com"> Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;