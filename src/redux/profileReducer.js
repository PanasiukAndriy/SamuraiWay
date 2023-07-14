import {usersAPI} from "../API/API";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
        {id: 1, message: "post about my trip1", likesCount: 12},
        {id: 2, message: "post about my trip2", likesCount: 25}
    ],
    newPostText: 'newPostText',
    profile: null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:

            return {...state, profile:action.profile}
        default:
            return state;
    }
}

export const addPostCreator = () => {

    return {
        type: ADD_POST
    }
};

export const updateNewPostTextCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const getUserProfile = (userId) => (dispatch) =>{
        usersAPI.getProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data));
        });
}
export default profileReducer;