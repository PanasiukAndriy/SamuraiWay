import axios from "axios";

const instAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3320aa33-70f1-48c8-b391-b2d1ee39f265'
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instAxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId){
        return instAxios.post(`follow/${userId}`)

    },
    unfollow(userId){
        return  instAxios.delete(`follow/${userId}`)

    },

    getProfile(currUserId){
        return  instAxios.get(`profile/` + currUserId);
    }
}

export const authAPI = {
    me(){ return  instAxios.get('auth/me')
    }
}
