import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import style from './Messager.module.css';




let Messager = (props) => {
    
    
    let dialogs = props.dialogsData.map(dialog =>
        <Dialog id={dialog.id} name={dialog.Name} />
    )

    let messages = props.messagesData.map(message => <Message id={message.id} text={message.text} />)

    let onInputChange = (e)=> {
        let text = e.target.value
        props.inputChanger(text)

    }

    let onSendButtonCkick = ()=> {
        props.sendMessage()
    
    }
    
    return (
        <div className={style.wrapper}>
            <div className="dialogs">
                {dialogs}

            </div>
            <div className="mesages">
                {messages}
                <div>
                    <input onChange={ onInputChange } value={props.newMessageBody} />
                    <button onClick={ onSendButtonCkick }>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Messager