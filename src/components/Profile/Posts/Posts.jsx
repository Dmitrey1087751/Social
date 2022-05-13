import React from "react";
import Post from "./Post/Post";




function Posts(props) {

  let posts = props.postsData.map(post => <Post id={post.id} message={post.maessage} likesCounter={post.likesCounter} />)



  let newPost = React.useRef();

  let postText = "tratata";
  // let postText = newPost.current.value;
  

  let sendPost = () => {
    alert(postText);
  }

  return (
    <div>
      <textarea  ref={newPost} ></textarea>
      <button onClick={sendPost}>Send</button>
      {posts}
    </div>
  )

}

export default Posts;