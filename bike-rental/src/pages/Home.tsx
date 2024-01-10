// import React from 'react'
import img from "../assets/1.jpg"
import motor from "../assets/motor.png"
import "../index.css"

export const Home = () => {
    return (
        <>
            <div className="home-text-overlay">
                <img src={img} alt="ssss" />
                <div className="flex w-3/4 bg-white container-image rounded flex-col" >
                    <div className="">
                        <form action="/" method="post">
                            <div className="flex flex-row mt-4">
                                <div className="flex flex-col w-1/2 justify-start">
                                    <div>
                                        <h3 className="text-dark font-bold ml-4">What is your vehicle type?</h3>
                                    </div>
                                    <div className="flex flex-row justify-center">
                                        <label htmlFor="" className="w-44">
                                            <img src="https://media.istockphoto.com/id/1130470118/vector/bicycle-icon-on-white-background.jpg?s=612x612&w=0&k=20&c=aI3PhXqAmaHQbAoTxBVAYCp2sV3BUVgoMFLGwbyZA9c=" alt="" className="" />
                                        </label>
                                        <input type="hidden" />
                                        <label htmlFor="" className="w-44">
                                            <img src={motor} alt="" className="" />
                                        </label>
                                        <input type="hidden" />
                                    </div>
                                </div>
                                <div className="flex flex-col w-1/2 justify-start">
                                    <div className="flex justify-center">
                                        <div className="w-1/2">
                                            <label htmlFor="pick-up-location" className="text-dark font-bold mt-2">Pick Up Location</label>
                                            <input id='pick-up-location' type="text" className="rounded w-64 mt-2" placeholder="Enter your pickup location" />
                                            <label htmlFor="pick-up-date-time" className="block text-dark font-bold mt-2">Pick Up Date & Time</label>
                                            <input id='pick-up-date-time' type="datetime-local" className="rounded w-64 mt-2" />
                                        </div>
                                        <div className="w-1/2">
                                            <label htmlFor="drop-off-location" className="text-dark font-bold mt-2">Drop Off Location</label>
                                            <input id='drop-off-location' type="text" className="rounded w-64 mt-2" placeholder="Enter your dropoff location" />
                                            <label htmlFor="return-date-time" className="block text-dark font-bold mt-2">Return Date & Time</label>
                                            <input id="return-date-time" type="datetime-local" className="rounded w-64 mt-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-end ">
                        <button className="bg-green-500 mr-2 mt-2 mb-2 rounded p-2 font-bold text-white">Find A Vehicle</button>
                    </div>
                </div>
            </div>
        </>
    )
}
