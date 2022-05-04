import React from "react";
import Post from "./Post/Post";


let postsData = [
  {id: 1, maessage: "sadjnjaiijikcnjjxxjiij", likesCounter: 5},
  {id: 2, maessage: "sadjnjaiiji k cnjj   xxjiij", likesCounter: 4},
  {id: 3, maessage: "вс высфывс sadjnjaiijikcnjjxxjiij", likesCounter: 2}
]

function Posts() {
  return (
    <div>
      <div>FORM</div>
     <Post id={postsData[0].id} message={postsData[0].maessage} likesCounter={postsData[0].likesCounter}/>
     <Post id={postsData[1].id} message={postsData[1].maessage} likesCounter={postsData[1].likesCounter}/>
     <Post id={postsData[2].id} message={postsData[2].maessage} likesCounter={postsData[2].likesCounter}/>
     
    </div>
  )
}

export default Posts;