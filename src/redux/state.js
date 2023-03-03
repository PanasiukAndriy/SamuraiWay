import post from "../components/Profile/MyPosts/Post/Post";
import {rerenderEntireTree} from "../render";

const state = {
    profilePage: {
        posts: [
            {id: 1, message: "post about my trip1", likesCount: 12},
            {id: 2, message: "post about my trip2", likesCount: 25}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "howayou"},
            {id: 3, message: "okk"},
            {id: 4, message: "yeeeahh"}
        ],
        dialogs: [
            {id: 1, name: "dima"},
            {id: 2, name: "ira"},
            {id: 3, name: "sasha"},
            {id: 4, name: "oleh"}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state