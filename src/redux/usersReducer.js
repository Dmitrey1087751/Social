const follow = "FOLLOW"
const unfollow = "UNFOLLOW"
const setUsers = "SET_USERS"

 let initialState = {
  Users: [
    // { id: 1, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLN2FKyX3x62P3vK0mW7k6Ey7hdHBhrPHybZPInuTg0eWQqk2atjDe8BLX13XW0SVA54&usqp=CAU", 
    // followed: true, Name: "Ditriy", Status: "i`m learning React", Location: {Sity: "Kaliningrad", Country: "Russia"}  },
    // { id: 2, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLN2FKyX3x62P3vK0mW7k6Ey7hdHBhrPHybZPInuTg0eWQqk2atjDe8BLX13XW0SVA54&usqp=CAU",
    // followed: false, Name: "Dasha", Status: "i`m learning React too", Location: {Sity: "Vegas", Country: "USA"}  },
    // { id: 3, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLN2FKyX3x62P3vK0mW7k6Ey7hdHBhrPHybZPInuTg0eWQqk2atjDe8BLX13XW0SVA54&usqp=CAU",
    // followed: true, Name: "Papendus", Status: "i`m Papendus", Location: {Sity: "Dubai", Country: "OA"}  }

  ]
}

let usersReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case follow :
       return { ...state, 
        Users: state.Users.map( u => {
            if (u.id === action.userId) {
                return {...u, followed: true}
            }
            return u;
        })}
    
      case unfollow : 
      return { ...state, 
        Users: state.Users.map( u => {
            if (u.id === action.userId) {
                return {...u, followed: false}
            }
            return u;
        })}
      case setUsers : {
        return { ...state, Users: [...state.Users, ...action.Users]}
      } 
      default:
        return state
     }
    
    }
  export const followAC = (userId) => {
    return  {type: "FOLLOW", userId}
  }
  export const unfollowAC = (userId) => { 
    return {type:"UNFOLLOW", userId}
  }
  export const SetUsersAC = (Users) => {
    return {type: "SET_USERS", Users}
  }
  export default usersReducer;