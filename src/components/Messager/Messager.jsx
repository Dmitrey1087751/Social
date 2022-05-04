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

let dialogsData = [
    { id: 1, Name: "Ivan" },
    { id: 2, Name: "Viktoria" },
    { id: 3, Name: "Papendus" },
    { id: 4, Name: "Chubaka" }
]

let messagesData = [
    {id: 1, text: "a;lsmlsmlkmscmck  sdsdsd  scscm"},
    {id: 2, text: "a;lsmlsmlkmscmck   dcsdc   m"},
    {id: 3, text: "a;lsmlsmlkmscmckm  sdcsdcsd"},
    {id: 4, text: "a;lsmlsmlkmscmckmsdcsdsdsdsd"},
    {id: 5, text: "a;lsmlsmlkmscmckm"}
]

let Messager = () => {
    return (
        <div className={style.wrapper}>
            <div className="dialogs">
                <Dialog id={dialogsData[0].id} name={dialogsData[0].Name} />
                <Dialog id={dialogsData[1].id} name={dialogsData[1].Name} />
                <Dialog id={dialogsData[2].id} name={dialogsData[2].Name} />
                <Dialog id={dialogsData[3].id} name={dialogsData[3].Name} />
            </div>
            <div className="mesages">
                <Message id={messagesData[0].id }text={messagesData[0].text} />
                <Message id={messagesData[1].id }text={messagesData[1].text} />
                <Message id={messagesData[2].id }text={messagesData[2].text} />
                <Message id={messagesData[3].id }text={messagesData[3].text} />
                <Message id={messagesData[4].id }text={messagesData[4].text} />
                
            </div>
        </div>
    )
}

export default Messager