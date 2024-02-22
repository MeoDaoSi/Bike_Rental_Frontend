import { NavLink } from "react-router-dom";

export const Home = () => {

    return (
        <>
            <section className="home" id="home">

                <h3 data-speed="-2" className="home-parallax">Thuê Xe Máy</h3>

                <img data-speed="5" className="home-parallax" src="/image/Home.png" alt="" />

                <NavLink className="btn" to="/reservation">Thuê xe ngay</NavLink>

            </section>

            <section className="icons-container">

                <div className="icons">
                    <i className="fas fa-home"></i>
                    <div className="content">
                        <h3>150+</h3>
                        <p>branches</p>
                    </div>
                </div>

                <div className="icons">
                    <i className="fa-sharp fa-solid fa-person-biking"></i>
                    <div className="content">
                        <h3>4770+</h3>
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
                        <header className="flex flex-col items-center mb-24">
                            <span className="block text-orange-500 font-medium mb-2">BẢNG GIÁ DỊCH VỤ</span>
                            <h2 className="font-extrabold text-5xl">THUÊ XE ĐẠP</h2>
                        </header>
                        <div className="flex">
                            <div>
                                <p>sssss</p>
                            </div>

                            <div>
                                <p>sssss</p>
                            </div>

                            <div>
                                <p>sssss</p>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

            <section className="footer" id="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>our branches</h3>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> Mirpur </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> Farmgate </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> Badda </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> Aftabnagar </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> Uttara </a>
                    </div>

                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#"> <i className="fas fa-arrow-right"></i> home </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> vehicles </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> services </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> featured </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> reviews </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> contact </a>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#"> <i className="fas fa-phone"></i> +123-456-7890 </a>
                        <a href="#"> <i className="fas fa-phone"></i> +111-222-3333 </a>
                        <a href="#"> <i className="fas fa-envelope"></i> bikebook@gmail.com </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> Aftabnagar, Badda, Dhaka </a>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
                        <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
                        <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
                        <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
                        <a href="#"> <i className="fab fa-pinterest"></i> pinterest </a>
                    </div>

                </div>

                <div className="credit"> Made with ❤️ | All rights reserved </div>

            </section>

        </>
    )
}
