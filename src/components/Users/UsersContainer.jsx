import React from "react";
import { connect } from "react-redux";
import { followAC, SetUsersAC } from "../../redux/usersReducer";
import { unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        Users: state.usersPage.Users
    }
}

let mapDispatchToprops = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (Users) => {
            dispatch(SetUsersAC(Users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToprops)(Users)
export default UsersContainer; 
