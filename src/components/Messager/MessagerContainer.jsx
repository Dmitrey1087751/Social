import React from "react";
import { connect } from "react-redux";
import { newMessageBodyCreator } from "../../redux/messagerReducer";
import { sendNewMessageCreator } from "../../redux/messagerReducer";
import Messager from "./Messager";

// let MessagerContainer = (props) => {
//   let state = props.store.getState();
//   let newMessageBody = state.messager.newMessageBody;

//   let inputChanger = (text) => {
//     props.store.dispatch(newMessageBodyCreator(text));
//   };

//   let sendMessage = () => {
//     props.store.dispatch(sendNewMessageCreator());
//   };
//   return (
//     <Messager
//       dialogsData={props.dialogsData}
//       messagesData={props.messagesData}
//       newMessageBody={newMessageBody}
//       inputChanger={inputChanger}
//       sendMessage={sendMessage}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messager.dialogsData,
    messagesData: state.messager.messagesData,
    newMessageBody: state.messager.newMessageBody
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newMessageBody: () => {},
    inputChanger: (text) => {
      dispatch(newMessageBodyCreator(text));
    },
    sendMessage: () => {
      dispatch(sendNewMessageCreator());
    },
  };
};

const MessagerContainer = connect(mapStateToProps,mapDispatchToProps) (Messager);

export default MessagerContainer;
