import { useState } from "react";
import { axiosClient } from "../apis/axiosClient";
import { Header } from "../components/Header";

export const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axiosClient.post('/auth/login', {
                email,
                password,
            })
            localStorage.setItem('access_token', res.data.token);
            alert("Đăng nhập thành công");
        } catch (error) {
            alert("Đăng nhập thất bại");
        }
    }

    return (
        <>
            <Header />
            <div className="maincontainer">
                <div className="firstcontainer">
                    <div className="titled"></div>
                    <div id="usersignin" style={{ display: "block" }} className="content">
                        <h2 className="pt-1">Đăng Nhập</h2>
                        <form onSubmit={signIn} method="POST">
                            <div className="user-details">

                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email của bạn"
                                        required
                                    />
                                </div>

                                <div className="input-box">
                                    <span className="details">Mật Khẩu</span>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} placeholder="Nhập mật khẩu"
                                        required
                                    />
                                </div>

                            </div>

                            <div className="button">
                                <button>Đăng Nhập</button>
                            </div>
                        </form>

                        <h3>Chưa có tài khoản ?<a style={{ color: "#ff6a00" }} href="/signup"> Tạo Tài Khoản Mới</a></h3>
                    </div>


                </div>
            </div >
        </>
    )
}
