import React from "react";
import { NavLink } from "react-router-dom";
import style from './Messages.module.css'

let Messages = () => {
    return (
        <div className={style.wrapper}>
            <div className="dialogs">
                <div className="dialog">
                    <NavLink to="/dialog2">dialog2</NavLink>
                </div>
                <div className="dialog">
                    <NavLink to="/dialog3">dialog3</NavLink>
                </div>
                <div className="dialog">
                    <NavLink to="/dialog4">dialog4</NavLink>
                </div>
                <div className="dialog">
                    <NavLink to="/dialog5">dialog5</NavLink>
                </div>
                
            </div>
            <div className="mesages">
                <div>message1</div>
                <div>message2</div>
                <div>message32</div>
                <div>message4</div>
                <div>message5</div>
            </div>
        </div>
    )
}

export default Messages