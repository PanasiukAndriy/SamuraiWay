import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7H4s9BmxCOuWx-dxjnPi8xVDcG275eNFJbQ&usqp=CAU '/>
        </div>
        <div>
            ava + desc
        </div>
        <MyPosts/>
    </div>
}

export default Profile;