import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {


    const postsElements = props.posts.map(post => <Post message = {post.message} likesCount = {post.likesCount} />);

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
