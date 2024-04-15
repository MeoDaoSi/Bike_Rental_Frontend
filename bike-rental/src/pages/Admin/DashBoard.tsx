import { SideBar } from "../../components/SideBar"
import { Header } from "../../components/Admin/Header"

export const Admin = () => {
    return (
        <>
            <SideBar />

            <section className="home-section">

                <Header />

                <div className="home-content mt-24" style={{ textAlign: "center" }}>
                    <h1>CHÀO MỪNG ĐẾN VỚI TRANG ADMIN</h1>
                    <br />
                    <h3>Go To Add Bikes Tab In Side Menu To Add Bikes In Database</h3><br />
                    <h3>Go To Rent Bikes Tab In Side Menu To Generate Income Reports of Rented Bikes In Database</h3><br />
                    <h3>Go To Available Users Tab In Side Menu To See All Available Users Regestered In Database</h3><br />
                </div>

            </section>
        </>
    )
}
