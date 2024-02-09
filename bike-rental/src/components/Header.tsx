import React, { FunctionComponent } from 'react'

interface Props {

}

export const Header: FunctionComponent<Props> = () => {
  return (
    <>
      <header className="pb-6 bg-gray-500 fixed w-full z-40">
        <div className="mx-auto border-b border-slate-500 mb-6">
          <div className="flex justify-between max-w-screen-xl mx-auto py-2">
            <div className="flex items-center gap-10 text-xs text-slate-200">
              <a href="" className="flex items-center gap-2">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </span>
                <span>+01 (977) 2599 12</span>
              </a>
              <a href="" className="flex items-center gap-2">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>

                </span>
                <span>company@domain.com</span>
              </a>
              <a href="" className="flex items-center gap-2">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>

                </span>
                <span>3146 Koontz Lane, California</span>
              </a>
            </div>
            <div>
              <a href="" className="text-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl flex items-center w-full justify-between">
          <a href="" className="font-bold text-3xl text-white"><img src="https://motogo.vn/wp-content/themes/motogo/images/logo.svg" alt="" /></a>
          <nav className="flex gap-12">

            <a href="" className="text-white uppercase relative pr-6">Home

            </a>
            <a href="" className="text-white uppercase relative pr-6">About

            </a>
            <a href="" className="text-white uppercase relative pr-6">Tours

            </a>
            <a href="" className="text-white uppercase relative pr-6">Pages

            </a>
            <a href="" className="text-white uppercase relative pr-6">Blog

            </a>
            <a href="" className="text-white uppercase relative pr-6">Contact

            </a>
          </nav>
          <button className="font-bold text-sm bg-yellow-500 pt-2 pb-3 px-6">
            THUÊ NGAY
          </button>
        </div>
      </header>
    </>
  )
}
