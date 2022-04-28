import React from "react";
import Post from "./Post/Post";
import style from './Posts.module.css'


function Posts() {
  return (
    <div>
      <div>FORM</div>
     <Post message='Hi every one'/>
     <Post message='blblblblblb'/>
    </div>
  )
}

export default Posts;