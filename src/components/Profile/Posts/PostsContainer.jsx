import React from "react";
import Posts from "./Posts";
import { AddPostActionCreator } from "../../../redux/profileReducer";
import { UpdateNewPostTextCreator } from "../../../redux/profileReducer";




function PostsContainer(props) {
let state = props.state

  let sendPost = (postText) => {
    props.dispatch(AddPostActionCreator(postText));
    props.dispatch(UpdateNewPostTextCreator(""))

  }

  let updateNewPostText = (postText) => {
  props.dispatch(UpdateNewPostTextCreator(postText))};

  return (
    < Posts sendPost={sendPost} updateNewPostText={updateNewPostText} postsData={props.postsData} newPostText={state.profilePage.newPostText}/>
  )
 
};

export default PostsContainer;