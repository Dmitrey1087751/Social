import React from "react";
import Posts from "./Posts";
import { AddPostActionCreator } from "../../../redux/profileReducer";
import { UpdateNewPostTextCreator } from "../../../redux/profileReducer";
import { connect } from "react-redux";




// function PostsContainer(props) {
// let state = props.state

//   let sendPost = (postText) => {
//     props.dispatch(AddPostActionCreator(postText));
//     props.dispatch(UpdateNewPostTextCreator(""))

//   }

//   let updateNewPostText = (postText) => {
//   props.dispatch(UpdateNewPostTextCreator(postText))};

//   return (
//     < Posts sendPost={sendPost} updateNewPostText={updateNewPostText} postsData={props.postsData} newPostText={state.profilePage.newPostText}/>
//   )
 
// };

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendPost: (postText) => {
      dispatch(AddPostActionCreator(postText))
      dispatch(UpdateNewPostTextCreator(""))
    },
    
    updateNewPostText: (postText) => {
    dispatch(UpdateNewPostTextCreator(postText))}
  
}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts);
export default PostsContainer;