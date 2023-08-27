import { useState } from "react";

import Sidebar from "./components/shared/Sidebar";

import {
  RiMenuFill,
  RiAccountPinCircleFill,
  RiAliensLine,
  RiPieChartLine,
  RiSettings2Line,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownSLine
} from "react-icons/ri";
//import SidebarMov from "./components/shared/SidebarMov";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
  };

  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
        <Sidebar showMenu={showMenu} />

        {/* Menu Movil */}

        <nav className="bg-[#1F1D2B]  lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 p-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
          <button className="p-2">
            <RiAliensLine />
          </button>
          <button className="p-2">
            <RiSettings2Line />
          </button>
          <button onClick={toggleOrders} className="p-2">
            <RiPieChartLine />
          </button>
          <button onClick={toggleMenu} className="text-white p-2">
            {showMenu ? <RiCloseLine /> : <RiMenuFill />}
          </button>
        </nav>

        <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
          <div className="lg:col-span-6 ">
            
            {/* Header */}
            <header className="p-4">
              {/* Title and search */}
              <div className="flex flex-col gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">08/22/23</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className={"absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"}/>
                  <input type={"text"} className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none" placeholder="Search"/>
                </div>
              </form>
              </div>
              {/* Tabs */}
              <nav className="text-gray-300 flex items-center justify-between border-b mb-6">
                <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-1 before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[2px] text-[#ec7c6a]">Hot Dishes</a>
                <a href="#" className="relative py-2 pr-4">Cold Dishes</a>
                <a href="#" className=" py-2 pr-4">Soup</a>
                <a href="#" className=" py-2 pr-4">Grill</a>
              </nav>
              {/* Title Content */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl text-gray-300">
                  Choose Dishes
                </h2>
                <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg" ><RiArrowDownSLine/> Dine in </button>
              </div>
            </header>
          </div>
          <div className="lg:col-span-2  fixed lg:static right-0">Carrito</div>
        </main>
      </div>
    </>
  );
}

export default App;
