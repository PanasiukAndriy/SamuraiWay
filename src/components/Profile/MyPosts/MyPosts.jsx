import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";





const MyPosts = (props) => {


    const postsElements = props.posts.map(post => <Post message = {post.message} likesCount = {post.likesCount} />);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }



    return (
        <div className={s.postsBlock}>
            <h2>my posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
            </div>
            <div>
                <button onClick={onAddPost}> Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts
