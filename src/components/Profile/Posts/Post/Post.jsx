import React from "react";
import style from './Post.module.css'

function Post(props) {

    console.log(props.message);
  return (
    
      <div className={style.post} >
        <img className="img" src="https://media.nu.nl/m/6p3x7rvarl63_xwd1280.jpg/ava-max-zou-liegen-als-ik-zei-dat-mijn-album-niet-beetje-als-wraak-voelt.jpg" alt="logo"></img>
       {props.message}
       <div>Likes {props.likesCounter}</div>
      </div>
    
  )
}

export default Post;