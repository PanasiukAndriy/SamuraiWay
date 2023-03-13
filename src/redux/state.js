import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer.ja";
import sidebarReducer from "./sidebarReducer";

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
            ],
            newMessageBody: ""
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}








export default store;
window.store = store;