//rrd imports
import { Outlet } from "react-router-dom";

//components
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-row max-w-[960px] w-full h-[660px] rounded-2xl shadow-lg p-4 gap-24 mx-auto bg-white pr-28">
      <header>
        <Navbar />
      </header> 
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
