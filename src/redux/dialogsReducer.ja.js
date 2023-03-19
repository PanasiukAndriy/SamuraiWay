const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body.text
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages:[...state.messages, {id: 7, message: body}],
                newMessageBody: ''
            };
        default:
            return state;
    }
}

export const sendMessageCreator = ()=>{

    return {
        type: SEND_MESSAGE
    }
};

export const updateNewMessageBodyCreator = (body)=>{

    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};

export default dialogsReducer;