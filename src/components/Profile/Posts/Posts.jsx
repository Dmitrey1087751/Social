import React from "react";
import Post from "./Post/Post";




function Posts(props) {

  let posts = props.postsData.map( post => <Post id={post.id} message={post.maessage} likesCounter={post.likesCounter}/>)

  return (
    <div>
      <div>FORM</div>
      { posts }
    </div>
  )
}

export default Posts;