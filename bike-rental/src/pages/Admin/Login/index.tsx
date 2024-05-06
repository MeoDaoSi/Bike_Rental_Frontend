import { useState, useContext } from "react";
import { Header } from "../../../components/Header";
import AuthAdminContext from "../../../utils/authAdminContext";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthAdminContext);

    const handdleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await login({ email, password });

    }

    return (
        <>
            <Header />
            <div className="maincontainer">
                <div className="firstcontainer">
                    <div className="titled"></div>
                    <div id="usersignin" style={{ display: "block" }} className="content">
                        <h2 className="pt-1">Đăng Nhập ADMIN</h2>
                        <form onSubmit={handdleSubmit} method="POST">
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
                    </div>
                </div>
            </div >
        </>
    )
}
