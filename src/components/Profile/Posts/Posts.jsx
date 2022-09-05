import React from "react";
import Post from "./Post/Post";
import { AddPostActionCreator } from "../../../redux/state";
import { UpdateNewPostTextCreator } from "../../../redux/state";




function Posts(props) {

  let posts = props.postsData.map(post => <Post id={post.id} message={post.message} likesCounter={post.likesCounter} />)

  
  let newPost = React.useRef();
  
  let sendPost = () => {
    let postText = newPost.current.value;
    props.dispatch(AddPostActionCreator(postText));
    props.dispatch(UpdateNewPostTextCreator(""))

  }

  let onPostTextChange = () => {
    let postText = newPost.current.value;
  props.dispatch(UpdateNewPostTextCreator(postText))};
  
  
  return (
    <div>
      <input ref={newPost} onChange={onPostTextChange} value={props.newPostText}/> 
      <button onClick={sendPost}>Send</button>
      {posts}
    </div>
  )
 
};

export default Posts;