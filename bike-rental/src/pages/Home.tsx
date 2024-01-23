// import React from 'react'
import "../index.css"
import background from "../assets/images/1.jpg"

export const Home = () => {

  const date: Date = new Date();

  let day = date.getDate();
  let month: String = (date.getMonth() + 1).toString();
  if (Number(month) < 10) {
    month = '0' + month.toString();

  }
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target);



  }

  return (
    <>
      <div className="hero py-40 bg-slate-200 relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-10 before:opacity-70">
        <img src={background} alt="" className="absolute top-0 left-0 h-full w-full object-cover" />
        <div className="relative z-30 mx-auto max-w-screen-xl flex gap-20">
          <div className="w-2/3">
            <span className="text-orange-600 uppercase font-medium mb-4 block">DU LỊCH - KHÁM PHÁ - TRẢI NGHIỆM</span>
            <h1 className="text-5xl text-white font-extrabold">DỊCH VỤ </h1>
            <h1 className="text-5xl text-white font-extrabold"> THUÊ XE TỐT NHẤT VIỆT NAM </h1>
            <div className="flex items-center gap-3 text-white my-6 text-4xl">
              <span>....</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>
              <span>....</span>
            </div>
            <p className="text-slate-200">
              Chúng tôi hiểu cảm giác của người đi thuê xe máy phải bỏ ra một số tiền để có được một chiếc xe đủ tốt, không gặp rắc rối khi đi trên đường. Tuy nhiên thật khó để tìm được một đơn vị cung cấp dịch vụ cho thuê xe uy tín, chất lượng hiện nay. MOTOGO - tiên phong trở thành đơn vị số 1 về cung cấp dịch vụ thuê xe máy tự lái tại Việt Nam.
            </p>
            <div className="flex gap-8 mt-10">
              <button className="text-white h-12 bg-orange-700 w-44">
                Read More
              </button>
              <button className="text-white h-12 bg-gray-600 w-44">
                See all offert
              </button>
            </div>
          </div>
          <div className="w-1/3">
            <form onSubmit={handleSubmit} className="bg-gray-600 p-10">
              <div className="flex flex-col mb-4">
                <label htmlFor="cars" className="text-white text-sm mb-2">Địa điểm nhận xe</label>
                <select required name="cars" id="cars" className="h-12 bg-white px-4 ">
                  <option value="" disabled hidden selected>Chọn địa điểm</option>
                  <option value="volvo">3/2 Xuân Khánh Ninh Kiều Cần thơ</option>
                  <option value="saab">3/2 Xuân Khánh Ninh Kiều Cần thơ</option>
                  <option value="opel">3/2 Xuân Khánh Ninh Kiều Cần thơ</option>
                  <option value="audi">3/2 Xuân Khánh Ninh Kiều Cần thơ</option>
                </select>
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="cars" className="text-white text-sm mb-2">Địa điểm trả xe</label>
                <select required name="cars" id="cars" className="h-12 bg-white px-4 ">
                  <option value="" disabled hidden selected>Chọn địa điểm</option>
                  <option value="volvo">3/2 Xuân Khánh Ninh Kiều Cần thơ</option>
                  <option value="saab">3/2 Xuân Khánh Ninh Kiều Cần thơ</option>
                  <option value="opel">3/2 Xuân Khánh Ninh Kiều Cần thơ</option>
                  <option value="audi">3/2 Xuân Khánh Ninh Kiều Cần thơ</option>
                </select>
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="cars" className="text-white text-sm mb-2">Ngày nhận xe</label>
                <input type="date" required min={currentDate} />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="cars" className="text-white text-sm mb-2">Ngày trả xe</label>
                <input type="date" required min={currentDate} />
              </div>

              <button className="font-bold h-12 bg-yellow w-full mt-5">
                THUÊ XE
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="main max-w-screen-xl mx-auto py-24 bg-white">
          <div className="popular">
            <header className="flex flex-col items-center mb-24">
              <span className="block text-orange-500 font-medium mb-2">POPULAR DESTINATION</span>
              <h2 className="font-extrabold text-5xl">TOP NOTCH DESTINATION</h2>
            </header>
            <div className="list grid grid-cols-4 gap-4">


              <div className="shadow-md hover:shadow-lg transition-all relative">
                <div className="rate flex gap-1 absolute z-40 m-4 right-0">
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                </div>
                <div className="bg-white min-h-80 p-2">
                  <div className="overflow-hidden h-80">
                    <div className="block h-full relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-20 before:opacity-45">
                      <img src="https://picsum.photos/450/450" alt="" className="absolute top-0 h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-col justify-center pb-5 pt-2 relative">
                  <a href="" className="absolute top-0 left-0 h-full w-full cursor-pointer"></a>
                  <h3 className="text-2xl font-bold text-slate-600 mb-1">Marina Ridge</h3>
                  <span className="text-sky-700">NEW ZEALAND</span>
                </div>
              </div>

              <div className="shadow-md hover:shadow-lg transition-all relative">
                <div className="rate flex gap-1 absolute z-40 m-4 right-0">
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                </div>
                <div className="bg-white min-h-80 p-2">
                  <div className="overflow-hidden h-80">
                    <div className="block h-full relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-20 before:opacity-45">
                      <img src="https://picsum.photos/450/450" alt="" className="absolute top-0 h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-col justify-center pb-5 pt-2 relative">
                  <a href="" className="absolute top-0 left-0 h-full w-full cursor-pointer"></a>
                  <h3 className="text-2xl font-bold text-slate-600 mb-1">Marina Ridge</h3>
                  <span className="text-sky-700">NEW ZEALAND</span>
                </div>
              </div>

              <div className="shadow-md hover:shadow-lg transition-all relative">
                <div className="rate flex gap-1 absolute z-40 m-4 right-0">
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                </div>
                <div className="bg-white min-h-80 p-2">
                  <div className="overflow-hidden h-80">
                    <div className="block h-full relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-20 before:opacity-45">
                      <img src="https://picsum.photos/450/450" alt="" className="absolute top-0 h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-col justify-center pb-5 pt-2 relative">
                  <a href="" className="absolute top-0 left-0 h-full w-full cursor-pointer"></a>
                  <h3 className="text-2xl font-bold text-slate-600 mb-1">Marina Ridge</h3>
                  <span className="text-sky-700">NEW ZEALAND</span>
                </div>
              </div>

              <div className="shadow-md hover:shadow-lg transition-all relative">
                <div className="rate flex gap-1 absolute z-40 m-4 right-0">
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                  <a href="" className="text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </a>
                </div>
                <div className="bg-white min-h-80 p-2">
                  <div className="overflow-hidden h-80">
                    <div className="block h-full relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-20 before:opacity-45">
                      <img src="https://picsum.photos/450/450" alt="" className="absolute top-0 h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-col justify-center pb-5 pt-2 relative">
                  <a href="" className="absolute top-0 left-0 h-full w-full cursor-pointer"></a>
                  <h3 className="text-2xl font-bold text-slate-600 mb-1">Marina Ridge</h3>
                  <span className="text-sky-700">NEW ZEALAND</span>
                </div>
              </div>
            </div>

            <button className="text-white h-12 bg-orange-500 w-60 mx-auto block mt-14 hover:bg-sky-600 transition-all">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
