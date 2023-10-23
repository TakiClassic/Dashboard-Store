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
  RiDeleteBin6Line,
} from "react-icons/ri";
//import SidebarMov from "./components/shared/SidebarMov";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
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

        <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8  pb-20">
          <div className="lg:col-span-6 md:p-8 p-4">
            {/* Header */}
            <header>
              {/* Title and search */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-2xl text-gray-300">Mexican Food</h1>
                  <p className="text-gray-500">October 1st 2023</p>
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
                <p className="text-gray-500">The best coffe of our selection</p>
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
          <div
            className={` fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all  ${
              showOrder ? "right-0" : "-right-full"
            }`}
          >
            {/* Orders */}
            <div className="relative pt-16 text-gray-300 p-8 h-full h-full">
              <RiCloseLine
                onClick={toggleOrders}
                className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
              />
              <h1 className="text-2xl my-4">Orders #33251</h1>
              {/* Pills */}
              <div className="gap-4 flex items-center flex-wrap mb-8">
                <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
                  Dine In
                </button>
                <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                  To Go
                </button>
                <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                  Delivery
                </button>
              </div>
              {/* Car */}
              <div>
                <div className="grid grid-cols-6 mb-4 p-4">
                  <h5 className="col-span-4"> Item </h5>
                  <h5> Qty </h5>
                  <h5> Price </h5>
                </div>
                {/* Products */}
                <div className="h-[400px] md:h-[700px] lg-540px] overflow-scroll">
                  {/* Product 1 */}
                  <div className="bg-[#262837] p-4 rounded-2xl mb-4">
                    <div className="grid grid-cols-6 mb-2">
                      {/* Products description */}
                      <div className="col-span-4 flex items-center gap-2">
                        <img
                          src="ensaladapollo.png"
                          className="w-10 h-10 object-cover"
                        />
                        <div>
                          <h5 className="text-sm">Chicken Salad</h5>
                          <p className="text-xs text-gray-500">$3.1416</p>
                        </div>
                      </div>
                      {/* Qty */}
                      <div>
                        <span>2</span>
                      </div>
                      {/* Price */}
                      <div>
                        <span>$6.2832</span>
                      </div>
                    </div>
                    {/* Notes */}
                    <div className="grid grid-cols-6 items-center">
                      <form className="col-span-5">
                        <input
                          type="text"
                          className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                          placeholder="Order note..."
                        />
                      </form>
                      <div>
                        <button className="border border-red-500 p-2 rounded-lg">
                          {" "}
                          <RiDeleteBin6Line className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Product 2 */}
                  <div className="bg-[#262837] p-4 rounded-2xl mb-4">
                    <div className="grid grid-cols-6 mb-2">
                      {/* Products description */}
                      <div className="col-span-4 flex items-center gap-2">
                        <img
                          src="cafe.png"
                          className="w-10 h-10 object-cover"
                        />
                        <div>
                          <h5 className="text-sm">Cuatepecan Coffe</h5>
                          <p className="text-xs text-gray-500">$1.5</p>
                        </div>
                      </div>
                      {/* Qty */}
                      <div>
                        <span>1</span>
                      </div>
                      {/* Price */}
                      <div>
                        <span>$1.5</span>
                      </div>
                    </div>
                    {/* Notes */}
                    <div className="grid grid-cols-6 items-center">
                      <form className="col-span-5">
                        <input
                          type="text"
                          className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                          placeholder="Order note..."
                        />
                      </form>
                      <div>
                        <button className="border border-red-500 p-2 rounded-lg">
                          {" "}
                          <RiDeleteBin6Line className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Product 3 */}
                  <div className="bg-[#262837] p-4 rounded-2xl mb-4">
                    <div className="grid grid-cols-6 mb-2">
                      {/* Products description */}
                      <div className="col-span-4 flex items-center gap-2">
                        <img
                          src="ensaladapollo.png"
                          className="w-10 h-10 object-cover"
                        />
                        <div>
                          <h5 className="text-sm">Chicken Salad</h5>
                          <p className="text-xs text-gray-500">$3.1416</p>
                        </div>
                      </div>
                      {/* Qty */}
                      <div>
                        <span>2</span>
                      </div>
                      {/* Price */}
                      <div>
                        <span>$6.2832</span>
                      </div>
                    </div>
                    {/* Notes */}
                    <div className="grid grid-cols-6 items-center">
                      <form className="col-span-5">
                        <input
                          type="text"
                          className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                          placeholder="Order note..."
                        />
                      </form>
                      <div>
                        <button className="border border-red-500 p-2 rounded-lg">
                          {" "}
                          <RiDeleteBin6Line className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Submit Payment */}
              <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Discount</span>
                  <span>$0</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-400">Subtotal</span>
                  <span>$0</span>
                </div>
                <div>
                  <button className="bg-[#ec7c6a] w-full py-2 px-4">
                    Continue to payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
