import React from "react";
import { NavLink } from "react-router-dom";
import style from './Messager.module.css'

const Dialog = (props) => {
    let path = "/dialog" + props.id
    return (
        <div className="dialog">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>{props.text}</div>
    )
}
let Messager = () => {
    return (
        <div className={style.wrapper}>
            <div className="dialogs">
                <Dialog id="1" name="Ivan" />
                <Dialog id="2" name="Anna" />
                <Dialog id="3" name="Victoria" />
                <Dialog id="4" name="Papendus" />
            </div>
            <div className="mesages">
                <Message text="Hi" />
                <Message text="abracadabta" />
                <Message text="Hi abracadabta abracadabta" />
                <Message text="Hi" />
                <Message text="Hi" />
            </div>
        </div>
    )
}

export default Messager