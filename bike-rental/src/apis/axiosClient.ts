import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const token = JSON.stringify(localStorage.getItem('access_token'))

export const axiosClient = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    }
});
