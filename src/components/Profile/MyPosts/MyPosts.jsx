import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const postData = [
    {id: 1, message: "post about my trip1", likesCount: 12},
    {id: 2, message: "post about my trip2", likesCount: 25}
]

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            my posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                <Post message="message1"/>
                <Post message="message2"/>
            </div>
        </div>)
}

export default MyPosts
