import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/usersReducer";
import Users from "./Users";


let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {dispatch(followActionCreator(userID))},
        unfollow: (userID) => {dispatch(unfollowActionCreator(userID))},
        setUsers: (users) => {dispatch(setUsersActionCreator(users))},
        setCurrentPage: (pageNumber) => {dispatch(setCurrentPageActionCreator(pageNumber))},
        setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountActionCreator(totalCount))},

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users);