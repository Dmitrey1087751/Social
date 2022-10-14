import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import style from './Profile.module.css'

function Profile(props) {


  return (
    <div className={style.content}>
      <img src='https://tinypng.com/images/social/website.jpg' alt="img"></img>
      <div>ava + descr</div>
      <div>My Posts</div>
      <PostsContainer postsData={props.postsData} 
      dispatch={props.dispatch} state={props.state}
      newPostText={props.newPostText}/>
    </div>
  )
}

export default Profile;