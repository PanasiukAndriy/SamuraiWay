import axios from "axios";

const instAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd39f6df7-7fe7-4ba8-bc09-7621bf1e6250'
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instAxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}
