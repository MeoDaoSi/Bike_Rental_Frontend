import React, { createContext, useLayoutEffect, useState } from "react";
import { axiosClient } from "../apis/axiosClient";
// import { useNavigate } from "react-router-dom";

type AuthContextProviderProps = {
    children: React.ReactNode;
}

export const AuthContext = createContext<any>({});

export function AuthProvider({ children }: AuthContextProviderProps) {

    // const Navigate = useNavigate();

    const [token, setToken] = useState(null);
    const [user, setUser] = useState({});

    useLayoutEffect(() => {
        (async () => {
            const token = localStorage.getItem('access_token');
            if (token) {
                await getMe();
            }
        })
    })

    async function getMe() {
        try {
            const rs = await axiosClient.get('/auth/me');
            setUser(rs.data);
            setToken(rs.data.access_token);
        } catch (error) {
            alert('Error');
        }
    }

    async function register({ email = '', password = '', full_name = '', confirmPassword = '' }) {
        if (password !== confirmPassword) {
            alert("Mật khẩu không khớp");
            return;
        }
        try {
            const rs = await axiosClient.post('/auth/register', {
                email,
                password,
                full_name: full_name,
            })
            localStorage.setItem('access_token', rs.data.token);
            setUser(rs.data);
            setToken(rs.data.access_token);
        } catch (error) {
            alert("Đăng ký thất bại");
        }
    }

    async function login({ email = '', password = '' }) {
        try {
            const rs = await axiosClient.post('/auth/login', { email, password });
            localStorage.setItem('access_token', rs.data.access_token);
            setToken(rs.data.access_token);
            setUser(rs.data);
        } catch (error) {
            alert('Error');
        }
    }

    async function logout() {
        localStorage.removeItem('access_token');
        setToken(null);
        setUser({});
    }

    const contextValue = {
        user,
        token,
        isLogin: !!token,
        login,
        logout,
        register
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;