import { useState, useContext } from "react";
import { AuthContext } from "../utils/authContext";

type Inputs = {
    email: string,
    password: string,
    full_name: string,
    confirmPassword: string
}
type Errors = Partial<Record<keyof Inputs, string>>
type Touched = Partial<Record<keyof Inputs, boolean>>

export const SignUp = () => {

    const validate = (newInputs: Inputs): Errors => {
        const newErrors: Errors = {}
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(newInputs.email)) {
            newErrors.email = "Vui lòng nhập email hợp lệ!"
        }

        if (newInputs.full_name.length < 6) {
            newErrors.full_name = "Tên không được ngắn hơn 6 ký tự!"
        }

        if (newInputs.password.length < 8) {
            newErrors.password = "Mật khẩu không được ngắn hơn 8 ký tự!"
        }

        if (newInputs.confirmPassword !== newInputs.password) {
            newErrors.confirmPassword = "Mật khẩu không khớp!"
        }

        return newErrors
    }

    const [inputs, setInputs] = useState<Inputs>({ email: "", password: "", full_name: "", confirmPassword: "" })
    const [errors, setErrors] = useState<Errors>(validate(inputs))
    const [touched, setTouched] = useState<Touched>({})

    // const Navigate = useNavigate();
    const { register } = useContext(AuthContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (Object.values(errors).length == 0) {
            await register({
                full_name: inputs.full_name,
                email: inputs.email,
                password: inputs.password
            });

        }

    }

    return (
        <>
            <div className="maincontainer">
                <div className="firstcontainer">
                    <div className="titled"></div>
                    <div id="usersignin" style={{ display: "block" }} className="content">
                        <h2 className="pt-1">Đăng Ký</h2>
                        <form onSubmit={handleSubmit} method="POST">
                            <div className="user-details">

                                <div className="input-box">
                                    <span className="details">Họ Tên Đầy Đủ</span>
                                    <input
                                        type="text"
                                        value={inputs.full_name}
                                        onChange={(e) => {
                                            setInputs({ ...inputs, full_name: e.target.value })
                                            setErrors(validate({ ...inputs, full_name: e.target.value }))
                                        }}
                                        onBlur={() => setTouched({ ...touched, full_name: true })}
                                        placeholder="Nhập Tên Đầy Đủ"
                                        required
                                    />
                                    {errors.full_name && touched.full_name ? <small className="text-red-500">{errors.full_name}</small> : null}
                                </div>

                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input
                                        type="email"
                                        value={inputs.email}
                                        onChange={(e) => {
                                            setInputs({ ...inputs, email: e.target.value })
                                            setErrors(validate({ ...inputs, email: e.target.value }))
                                        }}
                                        placeholder="Nhập email của bạn"
                                        onBlur={() => setTouched({ ...touched, email: true })}
                                        required
                                    />
                                    {errors.email && touched.email ? <small className="text-red-500">{errors.email}</small> : null}
                                </div>

                                <div className="input-box">
                                    <span className="details">Mật Khẩu</span>
                                    <input
                                        type="password"
                                        value={inputs.password}
                                        onChange={(e) => {
                                            setInputs({ ...inputs, password: e.target.value })
                                            setErrors(validate({ ...inputs, password: e.target.value }))
                                        }}
                                        onBlur={() => setTouched({ ...touched, password: true })}
                                        placeholder="Nhập mật khẩu"
                                        required
                                    />
                                    {errors.password && touched.password ? <small className="text-red-500">{errors.password}</small> : null}
                                </div>
                                <div className="input-box">
                                    <span className="details">Xác Nhận Mật Khẩu</span>
                                    <input
                                        type="password"
                                        value={inputs.confirmPassword}
                                        onChange={(e) => {
                                            setInputs({ ...inputs, confirmPassword: e.target.value })
                                            setErrors(validate({ ...inputs, confirmPassword: e.target.value }))
                                        }}
                                        onBlur={() => setTouched({ ...touched, confirmPassword: true })}
                                        placeholder="Nhập Lại Mật Khẩu"
                                        required
                                    />
                                    {errors.confirmPassword && touched.confirmPassword ? <small className="text-red-500">{errors.confirmPassword}</small> : null}
                                </div>

                            </div>

                            <div className="button">
                                <button>Đăng Ký</button>
                            </div>
                        </form>

                        <h3>Đã Có Tài Khoản ?<a style={{ color: "#ff6a00" }} href="/signin"> Đăng Nhập</a></h3>
                    </div>


                </div>
            </div >
        </>
    )
}
