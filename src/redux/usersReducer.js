const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const urlImg = 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=681&h=383&crop=1&resize=681%2C383';


let initialState = {
    users: [
        /*{id: 1, photoURL: urlImg, followed: true, fullName: 'Dima', status: 'my statysss', location: {city: 'kiev', country:'UA'}},
        {id: 2, photoURL: urlImg, followed: false, fullName: 'Andrew', status: 'my statysss', location: {city: 'london', country:'GB'}},
        {id: 3, photoURL: urlImg, followed: true,  fullName: 'Sasha', status: 'my statysss', location: {city: 'LA', country:'USA'}},
        {id: 4, photoURL: urlImg, followed: false,  fullName: 'Oleh', status: 'my statysss', location: {city: 'Dakota', country:'NA'}},
        {id: 5, photoURL: urlImg, followed: true,  fullName: 'Peter', status: 'my statysss', location: {city: 'Sydney', country:'Australia'}},
        {id: 6, photoURL: urlImg, followed: false,  fullName: 'Olesja', status: 'my statysss', location: {city: 'Lissabon', country:'NA'}}*/
    ]
}

const usersReducer = (state = initialState, action) =>
{
    let stateCopy;
    switch (action.type){

        case  FOLLOW:
            stateCopy = {...state,
                users: state.users.map(u => {
                    if (u.id ===action.userID){
                        return {...u, followed: true}
                    }
                    return u;
                }) }
            return  stateCopy;
        case  UNFOLLOW:
            stateCopy = {...state,
                users: state.users.map(u => {
                    if (u.id ===action.userID){
                        return {...u, followed: false}
                    }
                    return u;
                }) }
            return  stateCopy;
        case SET_USERS:
             return  {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }

}

export const followActionCreator = (userID) => ({type: FOLLOW, userID });
export const unfollowActionCreator = (userID) => ({type: UNFOLLOW, userID});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;