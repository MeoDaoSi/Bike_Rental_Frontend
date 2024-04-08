import { axiosClient } from "../apis/axiosClient";

const authUtils = {
    isAuthenticated: async () => {
        const token = localStorage.getItem('access_token');
        console.log(token);
        if (!token) return false;
        try {
            const res = await axiosClient.get('/auth/me');
            return res.data;
        } catch (error) {
            return false;
        }
    }
}

export default authUtils;