import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import style from './Messager.module.css'

let dialogsData = [
    { id: 1, Name: "Ivan" },
    { id: 2, Name: "Viktoria" },
    { id: 3, Name: "Papendus" },
    { id: 4, Name: "Chubaka" }
]

let dialogs = dialogsData.map(dialog => 
<Dialog id={dialog.id} name={dialog.Name} />
    )

let messagesData = [
    { id: 1, text: "a;lsmlsmlkmscmck  sdsdsd  scscm" },
    { id: 2, text: "a;lsmlsmlkmscmck   dcsdc   m" },
    { id: 3, text: "a;lsmlsmlkmscmckm  sdcsdcsd" },
    { id: 4, text: "a;lsmlsmlkmscmckmsdcsdsdsdsd" },
    { id: 5, text: "a;lsmlsmlkmscmckm" }
]

let messages = messagesData.map( message => <Message id={message.id} text={message.text} />)

let Messager = () => {
    return (
        <div className={style.wrapper}>
            <div className="dialogs">
                {dialogs}

            </div>
            <div className="mesages">
                { messages }
            </div>
        </div>
    )
}

export default Messager