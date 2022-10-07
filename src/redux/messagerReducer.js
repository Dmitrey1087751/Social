
const newMessageBody = "NEW_MESSAGE_BODY"
const sendNewMessage = "SEND_NEW_MESSAGE"

let messagerReducer = (state, action) => {
switch (action.type) {
  case newMessageBody: {
    state.newMessageBody = action.message;
    return state
  }
  case sendNewMessage:{
    let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messagesData.push({id: 6, text: body});
        return state
  }
  default: return state
}

}
export const newMessageBodyCreator = (Text) => {
  return {type:newMessageBody,
          message: Text}
}
export const sendNewMessageCreator = () => {
return  {type: sendNewMessage
}
}
export default messagerReducer; 