import React from "react";
import style from './Post.module.css'

function Post(props) {

  
  return (
    // <img className="img" src="https://media.nu.nl/m/6p3x7rvarl63_xwd1280.jpg/ava-max-zou-liegen-als-ik-zei-dat-mijn-album-niet-beetje-als-wraak-voelt.jpg" alt="logo"></img>

      <div className={style.post} >
        <img className="img" src="https://4.downloader.disk.yandex.ru/preview/d05ac50ef4a44faf1a32731e13d8b906c2c15e9d590d850e61212b299729c999/inf/9B8lS_K9CXfgtb6lOheWqOrm5LB8L1PiGuPa9KVMBBZN7ImWH8JF-NmH9TmWc7YEzniOuB0dzxsriaa3wepG6g%3D%3D?uid=321895148&filename=Untitled.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=321895148&tknv=v2&size=1920x870" alt="logo"></img>
       {props.message}
       <div>Likes {props.likesCounter}</div>
      </div>
    
  )
}

export default Post;