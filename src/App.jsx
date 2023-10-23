import { useState } from "react";

import {
  RiMenuFill,
  RiAliensLine,
  RiPieChartLine,
  RiSettings2Line,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";

{/* Components */}
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Card from "./components/shared/Card";
import Header from "./components/shared/Header";
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
        <Car showOrder={showOrder} setShowOrder={setShowOrder}/>

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

        <main className="lg:pl-32 lg:pr-96 pb-20">
          <div className="md:p-8 p-4">
            {/* Header */}
            <Header/>

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
              <Card img="ensaladapollo.png" description="Spicy Chicken Salad" price="$3.1416" inventory="16 Available"/>
              <Card img="cafe.png" description="Cuatepecan Coffe" price="$1.5" inventory="33 Available"/>
              <Card img="ensaladapollo.png" description="Spicy Chicken Salad" price="$3.1416" inventory="16 Available"/>
              <Card img="ensaladapollo.png" description="Spicy Chicken Salad" price="$3.1416" inventory="16 Available"/>
              <Card img="ensaladapollo.png" description="Spicy Chicken Salad" price="$3.1416" inventory="16 Available"/>
              <Card img="ensaladapollo.png" description="Spicy Chicken Salad" price="$3.1416" inventory="16 Available"/>
            </div>
          </div>
          
        </main>
      </div>
    </>
  );
}

export default App;
