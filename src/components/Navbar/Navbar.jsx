import React from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/Profile" activeClassName="active">Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink  to="/Messages"  activeClassName="active">Messages</NavLink>
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