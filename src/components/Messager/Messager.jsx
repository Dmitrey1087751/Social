import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import style from './Messager.module.css';
import { newMessageBodyCreator } from "../../redux/state"
import { sendNewMessageCreator } from "../../redux/state"



let Messager = (props) => {
    
    let state = props.store.getState()
    
    let dialogs = props.dialogsData.map(dialog =>
        <Dialog id={dialog.id} name={dialog.Name} />
    )

    let messages = props.messagesData.map(message => <Message id={message.id} text={message.text} />)

    let onInputChange = (e)=> {
        let body = e.target.value
        props.store.dispatch(newMessageBodyCreator(body))

    }

    let onSendButtonCkick = ()=> {
        props.store.dispatch(sendNewMessageCreator())

    }
    return (
        <div className={style.wrapper}>
            <div className="dialogs">
                {dialogs}

            </div>
            <div className="mesages">
                {messages}
                <div>
                    <input onChange={ onInputChange } value={state.messager.newMessageBody} />
                    <button onClick={ onSendButtonCkick }>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Messager