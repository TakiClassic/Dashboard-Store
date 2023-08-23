import React from 'react'

import { RiHome6Line, RiCompassLine, RiPieChartLine, RiEmojiStickerFill, RiNotification3Line, RiSettings2Line, RiLogoutBoxLine } from "react-icons/ri";

const Sidebar = (props) => {


  const {showMenu} = props;

  return (
    <div 
    className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl
     rounded-br-xl z-50 ${showMenu ? "left-0" : "-left-full"} transition-all` }
    >
      <div>
      <ul className=' pl-4'>
        <li>
        <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
        Logo
        </h1>
        </li>
        <li className='bg-[#262837] p-4 rounded-tl-lg rounded-bl-xl'>
          <a href='#' className="bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-white" >
          <RiHome6Line className="text-2xl"/>
            </a>
        </li>
        <li className=' hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-xl group transition-colors' >
          <a 
          href='#'
          className="group-hover:bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors" >
          <RiCompassLine className="text-2xl"/>
            </a>
        </li>
        <li className=' hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-xl group transition-colors' >
          <a 
          href='#'
          className="group-hover:bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors" >
          <RiPieChartLine className="text-2xl"/>
            </a>
        </li>
        <li className=' hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-xl group transition-colors' >
          <a 
          href='#'
          className="group-hover:bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors" >
          <RiEmojiStickerFill className="text-2xl"/>
            </a>
        </li>
        <li className=' hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-xl group transition-colors' >
          <a 
          href='#'
          className="group-hover:bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors" >
          <RiNotification3Line className="text-2xl"/>
            </a>
        </li>
        <li className=' hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-xl group transition-colors' >
          <a 
          href='#'
          className="group-hover:bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors" >
          <RiSettings2Line className="text-2xl"/>
            </a>
        </li>
      </ul>
      </div>
      <div>
        <ul className=' pl-4'>
        <li className=' hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-xl group transition-colors' >
          <a 
          href='#'
          className="group-hover:bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors" >
          <RiLogoutBoxLine className="text-2xl"/>
            </a>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
