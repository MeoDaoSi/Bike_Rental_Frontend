import React, { createContext, useEffect, useState } from "react";
import { axiosClient } from "../apis/axiosClient";
import UserData from "../pages/Admin/User/User";
import { toast } from "react-toastify";

type AuthContextProviderProps = {
    children: React.ReactNode;
}

const AuthContext = createContext<any>({});

export function AuthProvider({ children }: AuthContextProviderProps) {

    // const Navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true)
    const [token, setToken] = useState(localStorage.getItem('access_token') || null);
    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('access_token');
            console.log(token);

            if (token) {
                await getMe();
            }
            setIsLoading(false);
        })()
    }, [])

    async function getMe() {
        await axiosClient.get('/auth/me')
            .then((rs) => {
                console.log(rs.data.user);

                setUser(rs.data.user);
                // setToken(rs.data.token);

                // localStorage.setItem('access_token', rs.data.token);
            })
            .catch((error) => {
                console.log(error);

            })
    }

    async function register({
        email,
        password,
        full_name,
        phone_number,
        address,
    }: Partial<UserData>) {
        try {
            const rs = await axiosClient.post('/auth/register', {
                email,
                password,
                full_name: full_name,
                phone_number: phone_number,
                address: address
            })
            localStorage.setItem('access_token', rs.data.token);
            console.log(rs.data.token);

            setUser(rs.data);
            setToken(rs.data.token);
            console.log(token);
            toast.success("Đăng ký thành công", {
                onClose: () => {
                    window.location.href = "/";
                }
            });

        } catch (e: any) {
            toast.error('Đăng ký thất bại!', {
                onClose: () => {
                    window.location.reload();
                }
            })
        }
    }

    async function login({ email, password }: Partial<UserData>) {
        try {
            const rs = await axiosClient.post('/auth/login', { email, password });
            localStorage.setItem('access_token', rs.data.token);
            setToken(rs.data.token);
            setUser(rs.data);
            toast.success("Đăng nhập thành công", {
                onClose: () => {
                    window.location.href = "/";
                }
            });
        } catch (e) {
            console.log('test');

            toast.error('Đăng nhập thất bại!', {
                onClose: () => {
                    window.location.reload();
                }
            });
        }
    }

    async function logout() {
        localStorage.removeItem('access_token');
        setToken(null);
        setUser({});
    }

    const contextValue = {
        getMe,
        user,
        token,
        isLoggedIn: !!token,
        login,
        isLoading,
        logout,
        register,
    };

    if (isLoading) {
        return
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;