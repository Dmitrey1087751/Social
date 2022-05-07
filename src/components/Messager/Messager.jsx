import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import style from './Messager.module.css'



let Messager = (props) => {

    let dialogs = props.dialogsData.map(dialog =>
        <Dialog id={dialog.id} name={dialog.Name} />
    )

    let messages = props.messagesData.map(message => <Message id={message.id} text={message.text} />)
    return (
        <div className={style.wrapper}>
            <div className="dialogs">
                {dialogs}

            </div>
            <div className="mesages">
                {messages}
            </div>
        </div>
    )
}

export default Messager