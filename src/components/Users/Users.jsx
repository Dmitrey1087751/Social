import React from "react";
import Styles from "./Users.module.css"

function Users (props)  {
   
if (props.Users.length === 0) {

    props.setUsers ([
        { id: 1, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLN2FKyX3x62P3vK0mW7k6Ey7hdHBhrPHybZPInuTg0eWQqk2atjDe8BLX13XW0SVA54&usqp=CAU", 
        followed: true, Name: "Ditriy", Status: "i`m learning React", Location: {Sity: "Kaliningrad", Country: "Russia"}  },
        { id: 2, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLN2FKyX3x62P3vK0mW7k6Ey7hdHBhrPHybZPInuTg0eWQqk2atjDe8BLX13XW0SVA54&usqp=CAU",
        followed: false, Name: "Dasha", Status: "i`m learning React too", Location: {Sity: "Vegas", Country: "USA"}  },
        { id: 3, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLN2FKyX3x62P3vK0mW7k6Ey7hdHBhrPHybZPInuTg0eWQqk2atjDe8BLX13XW0SVA54&usqp=CAU",
        followed: true, Name: "Papendus", Status: "i`m Papendus", Location: {Sity: "Dubai", Country: "OA"}  }
    
    ])
        }
       
    return(
    <div> 
    {
        props.Users.map( u => <div key={u.id}>
            <div>
                <img alt="ava" src={u.photoUrl} className={Styles.ava}></img>
            </div>
            <span>
            {u.followed ? 
            <button onClick={() => {console.log("Clicked"); console.log(props.Users); props.unfollow(u.id)}}>Unfollow</button> : 
            <button onClick={() => {console.log("Clicked"); console.log(props.Users);props.follow(u.id)}}>Follow</button>
            
            } 
            </span>
            <div>
            <span>{u.Name}</span>
            </div>
            <div>
            <span>{u.Status}</span>
            </div>
            <div>
            <span>{u.Location.Sity}</span>
            </div>
            <div>
            <span>{u.Location.Country}</span>
            </div>
        </div>)
    }
    </div>
    )
}
export default Users