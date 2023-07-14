import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";


function ProfileContainer(props){
    const { userId } = useParams();
    let currUserId = userId||2;

    useEffect(()=> {
        props.getUserProfile(currUserId)},
        [userId]);

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {getUserProfile}) (ProfileContainer);