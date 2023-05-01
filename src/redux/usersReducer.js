const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const urlImg = 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=681&h=383&crop=1&resize=681%2C383';


let initialState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
             return  {...state, users: action.users}
        case SET_CURRENT_PAGE:
             return  {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return  {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return  {...state, isFetching: action.isFetching}
        default:
            return state;
    }

}

export const followActionCreator = (userID) => ({type: FOLLOW, userID });
export const unfollowActionCreator = (userID) => ({type: UNFOLLOW, userID});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFecthingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export default usersReducer;