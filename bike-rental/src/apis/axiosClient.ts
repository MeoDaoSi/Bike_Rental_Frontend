import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const token = localStorage.getItem('access_token') || localStorage.getItem('admin_token');

console.log(token);


export const axiosClient = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    }
});
