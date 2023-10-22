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
  RiArrowDownSLine,
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

        <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
          <div className="lg:col-span-6 md:p-8">
            {/* Header */}
            <header>
              {/* Title and search */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                  <p className="text-gray-500">08/22/23</p>
                </div>
                <form>
                  <div className="w-full relative">
                    <RiSearch2Line
                      className={
                        "absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
                      }
                    />
                    <input
                      type={"text"}
                      className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>
              {/* Tabs */}
              <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
                <a
                  href="#"
                  className="relative py-2 pr-4 before:w-1/2 before:h-1 before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[2px] text-[#ec7c6a]"
                >
                  Hot Dishes
                </a>
                <a href="#" className="relative py-2 pr-4">
                  Cold Dishes
                </a>
                <a href="#" className=" py-2 pr-4">
                  Soup
                </a>
                <a href="#" className=" py-2 pr-4">
                  Grill
                </a>
              </nav>
            </header>

            {/* Title Content */}
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-xl text-gray-300">Choose Dishes</h2>
              <button className="flex items-center gap-2 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                <RiArrowDownSLine /> Dine in{" "}
              </button>
            </div>
            {/* Content */}
            <div className="p-8 grid grid-col-1 md:grid-cols-2 gap-16 lg:grid-cols-3">
              {/* Card Chicken Salad */}
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-4 text-center text-gray-300">
                <img
                  src="ensaladapollo.png"
                  className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                />
                <p className="text-xl">Chicken Salad</p>
                <span className="text-gray-400">$3.1416</span>
                <p className="text-gray-500">
                  A nice and totally healthy salad with spicy chicken
                </p>
              </div>
              {/* Card Coffe*/}
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-4 text-center text-gray-300">
                <img
                  src="cafe.png"
                  className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                />
                <p className="text-xl">Cuatepecan Coffe</p>
                <span className="text-gray-400">$1.5</span>
                <p className="text-gray-500">
                  The best coffe of our selection
                </p>
              </div>
              {/* Card */}
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-4 text-center text-gray-300">
                <img
                  src="ensaladapollo.png"
                  className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                />
                <p className="text-xl">Chicken Salad</p>
                <span className="text-gray-400">$3.1416</span>
                <p className="text-gray-500">
                  A nice and totally healthy salad with spicy chicken
                </p>
              </div>
              {/* Card */}
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-4 text-center text-gray-300">
                <img
                  src="ensaladapollo.png"
                  className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                />
                <p className="text-xl">Chicken Salad</p>
                <span className="text-gray-400">$3.1416</span>
                <p className="text-gray-500">
                  A nice and totally healthy salad with spicy chicken
                </p>
              </div>
              {/* Card */}
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-4 text-center text-gray-300">
                <img
                  src="ensaladapollo.png"
                  className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                />
                <p className="text-xl">Chicken Salad</p>
                <span className="text-gray-400">$3.1416</span>
                <p className="text-gray-500">
                  A nice and totally healthy salad with spicy chicken
                </p>
              </div>
              {/* Card */}
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-4 text-center text-gray-300">
                <img
                  src="ensaladapollo.png"
                  className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                />
                <p className="text-xl">Chicken Salad</p>
                <span className="text-gray-400">$3.1416</span>
                <p className="text-gray-500">
                  A nice and totally healthy salad with spicy chicken
                </p>
              </div>
              {/* Card */}
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-4 text-center text-gray-300">
                <img
                  src="ensaladapollo.png"
                  className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                />
                <p className="text-xl">Chicken Salad</p>
                <span className="text-gray-400">$3.1416</span>
                <p className="text-gray-500">
                  A nice and totally healthy salad with spicy chicken
                </p>
              </div>
              {/* Card */}
              <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-4 text-center text-gray-300">
                <img
                  src="ensaladapollo.png"
                  className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                />
                <p className="text-xl">Chicken Salad</p>
                <span className="text-gray-400">$3.1416</span>
                <p className="text-gray-500">
                  A nice and totally healthy salad with spicy chicken
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2  fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full h-full">
            {/* Orders */}
            <div className="relative">
            <RiCloseLine className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"/>
            <h1>Orders #33251</h1>
            </div>
            </div>
        </main>
      </div>
    </>
  );
}

export default App;
