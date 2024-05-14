import { SideBar } from "../../components/SideBar"
import { Header } from "../../components/Admin/Header"
import { useEffect, useState } from "react"
import { axiosClient } from "../../apis/axiosClient";
import { Format_Currency } from "../../helpers/Format_Currency";
import Chart from "react-google-charts";

const options = {
    chart: {
        title: "Thống Kê Doanh Thu Theo Tháng",
        subtitle: "Doanh Thu"
    }
}

export const Admin = () => {

    const [branch, setBranch] = useState([]);
    const [contract, setContract] = useState([]);
    const [revenue, setRevenue] = useState(0);
    const [bike, setBike] = useState([]);

    const [data, setData] = useState([
        ['Tháng', 'Doanh Thu'],
        ["1", 1000],
        ["2", 1000],
        ["3", 660],
        ["4", 660],
        ["5", 660],
    ]);

    useEffect(() => {
        const getBranch = async () => {
            const res = await axiosClient.get('/branch');
            setBranch(res.data);
        }
        getBranch();
        const getbike = async () => {
            const res = await axiosClient.get('/branch/bike');
            console.log(res.data);

            setBike(res.data);
        }
        getbike();
        const getContract = async () => {
            const res = await axiosClient.get('/contract');
            setContract(res.data);
        }
        getContract();
        const getRevenue = async () => {
            const res = await axiosClient.get('/contract/revenue');
            console.log(res);
            setRevenue(res.data[Number(new Date().toLocaleDateString().split('/')[0]) - 1].total);
            setData([
                ['Tháng', 'Doanh Thu'],
                ["1", res.data[0].total],
                ["2", res.data[1].total],
                ["3", res.data[2].total],
                ["4", res.data[3].total],
                ["5", res.data[4].total],
            ])
        }
        getRevenue();
    }, [])

    return (
        <>
            <SideBar />

            <section className="home-section">

                <Header />


                <div className="p-6 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                            <div className="flex justify-between mb-6">
                                <div>
                                    <div className="flex items-center mb-1">
                                        <div className="text-2xl font-semibold">{Format_Currency(revenue)}</div>
                                    </div>
                                    <div className="text-sm font-medium text-gray-400">Doanh Thu</div>
                                </div>
                                <div className="dropdown">
                                    <button
                                        type="button"
                                        className="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm"
                                        id="dropdownMenuButton"
                                        data-dropdown-toggle="filterDropdown"
                                    >
                                        Last 7 days
                                        <i className="fa-solid fa-angle-down ml-1"></i>
                                    </button>
                                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
                                        id="filterDropdown"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                            >
                                                Last 7 days
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                            >
                                                Last 7 days
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                                            >
                                                Last 7 days
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a
                                href="/admin/contract"
                                className="text-[#f84525] font-medium text-sm hover:text-red-800"
                            >
                                View
                            </a>
                        </div>
                        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                            <div className="flex justify-between mb-4">
                                <div>
                                    <div className="flex items-center mb-1">
                                        <div className="text-2xl font-semibold">{branch.length}</div>
                                        {/* <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                                            +30%
                                        </div> */}
                                    </div>
                                    <div className="text-sm font-medium text-gray-400">Chi Nhánh</div>
                                </div>
                            </div>
                            <a
                                href="/admin/branch"
                                className="text-[#f84525] font-medium text-sm hover:text-red-800"
                            >
                                View
                            </a>
                        </div>
                        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                            <div className="flex justify-between mb-6">
                                <div>
                                    <div className="text-2xl font-semibold mb-1">{bike.length}</div>
                                    <div className="text-sm font-medium text-gray-400">Tổng số Xe</div>
                                </div>
                            </div>
                            <a
                                href="/admin/contract"
                                className="text-[#f84525] font-medium text-sm hover:text-red-800"
                            >
                                View
                            </a>
                        </div>
                    </div>

                    {/* layer 1 */}

                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
                        <Chart
                            chartType="Bar"
                            width={'100%'}
                            height={'400px'}
                            options={options}
                            data={data}
                        />
                    </div>

                </div>



            </section>
        </>
    )
}
