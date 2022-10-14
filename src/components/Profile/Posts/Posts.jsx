import React from "react";
import Post from "./Post/Post";



function Posts(props) {

  let posts = props.postsData.map(post => <Post id={post.id} message={post.message} likesCounter={post.likesCounter} />)

  let newPost = React.useRef();

  let onSendPost = () => {
    let postText = newPost.current.value;
    props.sendPost(postText);

  }

  let onPostTextChange = () => {
    let postText = newPost.current.value;
    props.updateNewPostText(postText)
  };


  return (
    <div>
      <input ref={newPost} onChange={onPostTextChange} value={props.newPostText} />
      <button onClick={onSendPost}>Send</button>
      {posts}
    </div>
  )

};

export default Posts;