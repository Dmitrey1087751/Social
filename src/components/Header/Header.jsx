import React from "react";
import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU" alt="logo"></img>
        </header>
    )
}

export default Header;