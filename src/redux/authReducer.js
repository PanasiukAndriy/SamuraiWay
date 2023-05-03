const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    debugger;
    switch (action.type){
        case SET_USER_DATA:
    debugger;
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userID, login, email) => ({type: SET_USER_DATA, data:{userID, login, email}});

export default authReducer;
