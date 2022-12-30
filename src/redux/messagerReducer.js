const newMessageBody = "NEW_MESSAGE_BODY";
const sendNewMessage = "SEND_NEW_MESSAGE";

let initialState = {
  messagesData: [
    { id: 1, text: "a;lsmlsmlkmscmck  sdsdsd  scscm" },
    { id: 2, text: "a;lsmlsmlkmscmck   dcsdc   m" },
    { id: 3, text: "a;lsmlsmlkmscmckm  sdcsdcsd" },
    { id: 4, text: "a;lsmlsmlkmscmckmsdcsdsdsdsd" },
    { id: 5, text: "a;lsmlsmlkmscmckm" },
  ],
  dialogsData: [
    { id: 1, Name: "Ivan" },
    { id: 2, Name: "Viktoria" },
    { id: 3, Name: "Papendus" },
    { id: 4, Name: "Chubaka" },
  ],
  newMessageBody: "",
};

let messagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case newMessageBody: {
      return {
        ...state,
        newMessageBody: action.message,
      };
    }
    case sendNewMessage: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messagesData: [...state.messagesData, { id: 6, text: body }],
      };
    }
    default:
      return state;
  }
};
export const newMessageBodyCreator = (Text) => {
  return { type: newMessageBody, message: Text };
};
export const sendNewMessageCreator = () => {
  return { type: sendNewMessage };
};
export default messagerReducer;
