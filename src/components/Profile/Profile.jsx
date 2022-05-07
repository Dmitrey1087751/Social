import React from "react";
import Posts from "./Posts/Posts";
import style from './Profile.module.css'

function Profile() {


  let postsData = [
    {id: 1, maessage: "sadjnjaiijikcnjjxxjiij", likesCounter: 5},
    {id: 2, maessage: "sadjnjaiiji k cnjj   xxjiij", likesCounter: 4},
    {id: 3, maessage: "вс высфывс sadjnjaiijikcnjjxxjiij", likesCounter: 2}
  ]

  return (
    <div className={style.content}>
      <img src='https://tinypng.com/images/social/website.jpg' alt="img"></img>
      <div>ava + descr</div>
      <div>My Posts</div>
      <Posts postsData={postsData} />
    </div>
  )
}

export default Profile;