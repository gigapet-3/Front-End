import axios from "axios";

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://gigapet-3.herokuapp.com/api',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
}