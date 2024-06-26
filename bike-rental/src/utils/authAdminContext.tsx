import React, { createContext, useEffect, useState } from "react";
import { axiosClient } from "../apis/axiosClient";
import UserData from "../pages/Admin/User/User";
import { toast } from "react-toastify";

type AuthAdminContextProviderProps = {
    children: React.ReactNode;
}

const INITIAL_ADMIN: Partial<UserData> = {
    full_name: '',
    email: '',
    password: '',
    role: ''
}

const AuthAdminContext = createContext<any>({});

export const AuthAdminProvider = ({ children }: AuthAdminContextProviderProps) => {

    const [token, setToken] = useState(localStorage.getItem('admin_token') || null);
    const [admin, setAdmin] = useState(INITIAL_ADMIN);

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('admin_token');
            console.log(token);

            if (token) {
                await getMe();
            }
        })()
    }, [])

    async function getMe() {
        await axiosClient.get('/auth/me', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('admin_token')}`
            }
        })
            .then((rs) => {
                console.log(rs.data.user);

                setAdmin(rs.data.user);
            })
            .catch((error) => {
                console.log(error);

            })
    }

    async function login({ email, password }: Partial<UserData>) {
        try {
            const rs = await axiosClient.post('/auth/login', { email, password });

            console.log(rs.data.user.role);


            if (rs.data.user.role == 'ADMIN') {
                localStorage.setItem('admin_token', rs.data.token);
                setToken(rs.data.token);
                console.log(admin);
                setAdmin(rs.data.user);
                console.log(admin);

                console.log(rs.data.user.role);
                toast.success("Đăng nhập thành công", {
                    onClose: () => {
                        window.location.href = "/admin";
                    }
                });
            } else {
                toast.error('Bạn không có quyền truy cập trang này!', {
                    onClose: () => {
                        window.location.reload();
                    }
                });
            }
        } catch (e) {

            toast.error('Đăng nhập thất bại!', {
                onClose: () => {
                    window.location.reload();
                }
            });
        }
    }

    async function logout() {
        localStorage.removeItem('admin_token');
        setToken(null);
        setAdmin({});
    }

    return (
        <AuthAdminContext.Provider value={{
            admin,
            token,
            isLoggedIn: !!token,
            isAdmin: admin?.role == 'ADMIN',
            login,
            logout,
        }}>
            {children}
        </AuthAdminContext.Provider>
    )
}

export default AuthAdminContext;
