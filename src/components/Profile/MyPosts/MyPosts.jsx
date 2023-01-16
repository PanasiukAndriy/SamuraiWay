import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const postData = [
    {id: 1, message: "post about my trip1", likesCount: 12},
    {id: 2, message: "post about my trip2", likesCount: 25}
]

const postsElements = postData.map(post => <Post message = {post.message} likesCount = {post.likesCount} />);

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            my posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts
