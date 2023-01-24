import React from "react";
import Styles from "./Users.module.css";
import axios from "axios";
import ava from "../../img/ava.png"
function Users (props)  {
   
if (props.Users.length === 0) {
  
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {props.setUsers (response.data.items)})}
       
    return(
    <div> 
    {
        props.Users.map( u => <div key={u.id}>
            <div>
                <img alt="ava" src={u.photos.small != null ? u.photos.small : ava} className={Styles.ava}></img>
            </div>
            <span>
            {u.followed ? 
            <button onClick={() => {console.log("Clicked"); console.log(props.Users); props.unfollow(u.id)}}>Unfollow</button> : 
            <button onClick={() => {console.log("Clicked"); console.log(props.Users);props.follow(u.id)}}>Follow</button>
            
            } 
            </span>
            <div>
            <span>{u.name}</span>
            </div>
            <div>
            <span>{u.Status}</span>
            </div>
            <div>
            <span>{'u.Location.Sity'}</span>
            </div>
            <div>
            <span>{'u.Location.Country'}</span>
            </div>
        </div>)
    }
    </div>
    )
}
export default Users