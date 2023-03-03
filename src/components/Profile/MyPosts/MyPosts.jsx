import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {


    const postsElements = props.posts.map(post => <Post message = {post.message} likesCount = {post.likesCount} />);

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        //alert(text);
    }

    let newPostElement = React.createRef();

    return (
        <div className={s.postsBlock}>
            <h2>my posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
            </div>
            <div>
                <button onClick={addPost}> Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts
