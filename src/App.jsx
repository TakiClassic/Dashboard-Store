import { useState } from "react";

import Sidebar from "./components/shared/Sidebar";
import SidebarMov from "./components/shared/SidebarMov";



function App() {
  
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
        <Sidebar/>
        {/* Menu Movil */}
        <SidebarMov/>
      </div>
    </>
  )
}

export default App
