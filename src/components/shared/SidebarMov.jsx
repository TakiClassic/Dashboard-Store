import React from 'react'
import { useState } from "react";


import { RiMenuFill, RiAccountPinCircleFill, RiAliensLine, RiPieChartLine, RiSettings2Line } from "react-icons/ri";

const SidebarMov = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    }

  return (
    <nav className="bg-[#1F1D2B]  lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 p-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
          <button onClick={toggleMenu} className='text-white p-2'>
            <RiMenuFill/>
          </button>
          <button className='p-2'>
            <RiPieChartLine/>
          </button>
          <button className='p-2'>
            <RiAliensLine/>
          </button>
          <button className='p-2'>
            <RiSettings2Line/>
          </button>
          </nav>
  )
}

export default SidebarMov