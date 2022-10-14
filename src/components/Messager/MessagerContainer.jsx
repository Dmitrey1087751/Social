import React from "react";
import { newMessageBodyCreator } from "../../redux/messagerReducer"
import { sendNewMessageCreator } from "../../redux/messagerReducer"
import Messager from "./Messager"



let MessagerContainer = (props) => {
    
    let state = props.store.getState()
    let newMessageBody = state.messager.newMessageBody


    let inputChanger = (text)=> {
        props.store.dispatch(newMessageBodyCreator(text))

    }

    let sendMessage = ()=> {
        props.store.dispatch(sendNewMessageCreator())
        

    }
    return (
        <Messager dialogsData={props.dialogsData} messagesData={props.messagesData} 
        newMessageBody={newMessageBody} inputChanger={inputChanger} sendMessage={sendMessage} />
    )
}

export default MessagerContainer