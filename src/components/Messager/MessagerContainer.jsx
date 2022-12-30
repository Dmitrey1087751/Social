
import { connect } from "react-redux";
import { newMessageBodyCreator } from "../../redux/messagerReducer";
import { sendNewMessageCreator } from "../../redux/messagerReducer";
import Messager from "./Messager";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messager.dialogsData,
    messagesData: state.messager.messagesData,
    newMessageBody: state.messager.newMessageBody
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
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
