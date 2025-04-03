import Header from "@components/Header";
import Slider from "@components/slider/Slider";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="grid h-[100vh] grid-cols-6">
        <Slider />
        <div className="col-span-5 flex h-full flex-col">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
