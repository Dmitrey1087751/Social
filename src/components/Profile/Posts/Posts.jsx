import React from "react";
import Post from "./Post/Post";


let postsData = [
  {id: 1, maessage: "sadjnjaiijikcnjjxxjiij", likesCounter: 5},
  {id: 2, maessage: "sadjnjaiiji k cnjj   xxjiij", likesCounter: 4},
  {id: 3, maessage: "вс высфывс sadjnjaiijikcnjjxxjiij", likesCounter: 2}
]
let posts = postsData.map( post => <Post id={post.id} message={post.maessage} likesCounter={post.likesCounter}/>)

function Posts() {
  return (
    <div>
      <div>FORM</div>
      { posts }
    </div>
  )
}

export default Posts;