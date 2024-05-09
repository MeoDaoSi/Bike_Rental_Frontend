import { useState, useContext } from "react";
import AuthContext from "../utils/authContext";
import { Header } from "../components/Header";

type Inputs = {
    email: string,
    password: string,
    full_name: string,
    phone_number: number,
    address: string,
    confirmPassword: string
}
type Errors = Partial<Record<keyof Inputs, string>>
type Touched = Partial<Record<keyof Inputs, boolean>>

export const SignUp = () => {

    const validate = (newInputs: Inputs): Errors => {
        const newErrors: Errors = {}
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexPhoneNumber = /(|0[3|5|7|8|9])+([0-9]{8})\b/g;

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
        if (!regexPhoneNumber.test(newInputs.phone_number.toString()) || newInputs.phone_number.toString().length > 9) {
            newErrors.phone_number = "Số điện thoại không hợp lệ!"
        }

        return newErrors
    }

    const [inputs, setInputs] = useState<Inputs>({
        email: "",
        password: "",
        full_name: "",
        confirmPassword: "",
        phone_number: 0,
        address: ""
    })
    const [errors, setErrors] = useState<Errors>(validate(inputs))
    const [touched, setTouched] = useState<Touched>({})

    const { register } = useContext(AuthContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (Object.values(errors).length == 0) {
            await register({
                full_name: inputs.full_name,
                email: inputs.email,
                password: inputs.password,
                phone_number: inputs.phone_number,
                address: inputs.address
            });

        }

    }

    return (
        <>
            <Header />
            <div className="maincontainer mt-28">
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
                                    <span className="details">Số Điện Thoại</span>
                                    <input
                                        type="number"
                                        value={inputs.phone_number}
                                        onChange={(e) => {
                                            setInputs({ ...inputs, phone_number: Number(e.target.value) })
                                            setErrors(validate({ ...inputs, phone_number: Number(e.target.value) }))
                                        }}
                                        placeholder="Nhập SDT của bạn"
                                        onBlur={() => setTouched({ ...touched, phone_number: true })}
                                        required
                                    />
                                    {errors.phone_number && touched.phone_number ? <small className="text-red-500">{errors.phone_number}</small> : null}
                                </div>

                                <div className="input-box">
                                    <span className="details">Nhập địa chỉ</span>
                                    <input
                                        type="text"
                                        value={inputs.address}
                                        onChange={(e) => {
                                            setInputs({ ...inputs, address: e.target.value })
                                            setErrors(validate({ ...inputs, address: e.target.value }))
                                        }}
                                        placeholder="Nhập địa chỉ của bạn"
                                        onBlur={() => setTouched({ ...touched, address: true })}
                                        required
                                    />
                                    {errors.address && touched.address ? <small className="text-red-500">{errors.address}</small> : null}
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
