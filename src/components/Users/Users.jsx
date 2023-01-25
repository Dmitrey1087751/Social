import React from "react";
import style from "./Users.module.css";
import axios from "axios";
import ava from "../../img/ava.png"

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {props.setUsers (response.data.items)})
    }
    render() {
        return(
            <div> 
            {
                this.props.Users.map( u => <div key={u.id}>
                    <div className={style.content}>
                        <img alt="ava" src={u.photos.small != null ? u.photos.small : ava} className={style.ava}></img>
                    </div>
                    <span>
                    {u.followed ? 
                    <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> : 
                    <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
                    
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
}

export default Users