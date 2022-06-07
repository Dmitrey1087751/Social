import React from "react";
import Post from "./Post/Post";




function Posts(props) {

  let posts = props.postsData.map(post => <Post id={post.id} message={post.maessage} likesCounter={post.likesCounter} />)

  let newPost = React.useRef();
  let sendPost = () => {
    let postText = newPost.current.value;
    props.addPost(postText);
  }

  return (
    <div>
      <input ref={newPost}></input>
      <button onClick={sendPost}>Send</button>
      {posts}
    </div>
  )

}

export default Posts;