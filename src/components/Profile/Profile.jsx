import React from "react";
import Posts from "./Posts/Posts";
import style from './Profile.module.css'

function Profile(props) {


  return (
    <div className={style.content}>
      <img src='https://tinypng.com/images/social/website.jpg' alt="img"></img>
      <div>ava + descr</div>
      <div>My Posts</div>
      <Posts postsData={props.postsData} addPost={props.addPosts} />
    </div>
  )
}

export default Profile;