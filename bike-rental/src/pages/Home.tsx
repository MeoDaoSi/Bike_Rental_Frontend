import { NavLink } from "react-router-dom";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Format_Currency } from "../helpers/Format_Currency";
import { axiosClient } from "../apis/axiosClient";

export const Home = () => {

    const [branch, setBranch] = useState([]);
    const [contract, setContract] = useState([]);

    useEffect(() => {
        const getBranch = async () => {
            const res = await axiosClient.get('/branch');
            setBranch(res.data);
        }
        getBranch();
        const getContract = async () => {
            const res = await axiosClient.get('/contract');
            setContract(res.data);
        }
        getContract();
    }, [])

    return (
        <>
            <Header />
            <section className="home" id="home">

                <h3 data-speed="-2" className="home-parallax">Thuê Xe Máy</h3>

                <img data-speed="5" className="home-parallax" src="/image/Home.png" alt="" />

                <NavLink className="btn" to="/reservation">Thuê xe ngay</NavLink>

            </section>

            <section className="icons-container">

                <div className="icons">
                    <i className="fas fa-home"></i>
                    <div className="content">
                        <h3>{branch.length}+</h3>
                        <p>Chi Nhánh</p>
                    </div>
                </div>

                <div className="icons">
                    <i className="fa-sharp fa-solid fa-person-biking"></i>
                    <div className="content">
                        <h3>{contract.length}+</h3>
                        <p>Bikes Rented</p>
                    </div>
                </div>

                <div className="icons">
                    <i className="fas fa-users"></i>
                    <div className="content">
                        <h3>320+</h3>
                        <p>happy clients</p>
                    </div>
                </div>

                <div className="icons">
                    <i className="fa-sharp fa-solid fa-motorcycle"></i>
                    <div className="content">
                        <h3>1500+</h3>
                        <p>Available Bikes</p>
                    </div>
                </div>

            </section>


            <div className="bg-white">
                <div className="main max-w-screen-xl mx-auto py-24 bg-white">
                    <div className="popular">
                        <header className="flex flex-col items-center mb-8">
                            <span className="block text-orange-500 font-medium">BẢNG GIÁ DỊCH VỤ</span>
                            <h2 className="font-extrabold text-5xl">XE MÁY</h2>
                        </header>
                        <div className="flex justify-between">
                            <div className="mx-2">
                                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div>
                                        <img className="p-8 rounded-t-lg" src="https://cdn.honda.com.vn/motorbike-versions/December2022/VlhEoBOm76qFSuONryD1.png" alt="product image" />
                                    </div>
                                    <div className="px-5 pb-5">
                                        <div>
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">SH350i</h5>
                                        </div>
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <span className="text-xl font-bold text-gray-900 dark:text-white">{Format_Currency(250000)} / ngày</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <a href="/reservation" className="bg-gray-300 hover:bg-orange-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">Đặt Xe</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="mx-2">
                                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="p-8 rounded-t-lg" src="https://cdn.honda.com.vn/motorbike-versions/November2023/GZxuAoXd6O0zJQCqeGAy.png" alt="product image" />
                                    </a>
                                    <div className="px-5 pb-5">
                                        <a href="#">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Wave RSX</h5>
                                        </a>
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <span className="text-xl font-bold text-gray-900 dark:text-white">{Format_Currency(100000)} / ngày</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <a href="/reservation" className="bg-gray-300 hover:bg-orange-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">Đặt Xe</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="mx-2">
                                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="p-14 rounded-t-lg" src="https://cdn.honda.com.vn/motorbike-versions/January2024/BlUd66TAsY96NR72sWbo.jpg" alt="product image" />
                                    </a>
                                    <div className="px-5 pb-5">
                                        <a href="#">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Future 125 FI</h5>
                                        </a>
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <span className="text-xl font-bold text-gray-900 dark:text-white">{Format_Currency(130000)} / ngày</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <a href="/reservation" className="bg-gray-300 hover:bg-orange-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">Đặt Xe</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="mx-2">
                                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="p-14 rounded-t-lg" src="https://cdn.honda.com.vn/motorbike-versions/September2023/HNtWMUQe1hSi8Nd1H2gU.png" alt="product image" />
                                    </a>
                                    <div className="px-5 pb-5">
                                        <a href="#">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Vision phiên bản cổ điển</h5>
                                        </a>
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <span className="text-xl font-bold text-gray-900 dark:text-white">{Format_Currency(150000)} / ngày</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <a href="/reservation" className="bg-gray-300 hover:bg-orange-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">Đặt Xe</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}
