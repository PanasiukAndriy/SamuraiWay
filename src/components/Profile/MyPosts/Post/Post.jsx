import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src='https://www.w3schools.com/w3images/avatar2.png'/>
        {props.message}
    </div>
}

export default Post;