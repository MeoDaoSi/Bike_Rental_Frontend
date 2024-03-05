import axios from 'axios';

// export interface ResponseGenerator {
//     config?: object,
//     data?: object,
//     headers?: object,
//     request?: object,
//     status?: number,
//     statusText?: string
// }

// export interface ErrorGenerator {
//     message?: string | object,
//     status?: number
// }

const BASE_URL = 'http://localhost:3000';

const token = JSON.stringify(localStorage.getItem('access_token'))

const getURL = () => {
    return BASE_URL;
}

export const instance = axios.create({
    baseURL: getURL(),
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    }
});
