import axios from 'axios';

const BASE_URL = 'http://localhost:8888';

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

axiosClient.interceptors.request.use(async (config: any) => {
    ; config.headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Content-Type",
        ...config.headers,
    };
    return config;
});
