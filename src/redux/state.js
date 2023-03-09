let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "post about my trip1", likesCount: 12},
                {id: 2, message: "post about my trip2", likesCount: 25}
            ],
            newPostText: 'newPostText'
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
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){},

    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        if(action.type === 'ADD_POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_POST_TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }


}


export default store;
window.store = store;