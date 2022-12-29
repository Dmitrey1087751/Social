import Posts from "./Posts";
import { AddPostActionCreator } from "../../../redux/profileReducer";
import { UpdateNewPostTextCreator } from "../../../redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendPost: (postText) => {
      dispatch(AddPostActionCreator(postText));
      dispatch(UpdateNewPostTextCreator(""));
    },

    updateNewPostText: (postText) => {
      dispatch(UpdateNewPostTextCreator(postText));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
