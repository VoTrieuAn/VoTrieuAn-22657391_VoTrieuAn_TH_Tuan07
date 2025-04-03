import Header from "@components/Header";
import SideBar from "@components/SideBar/SideBar";
import { SIDEBAR_ITEMS } from "@libs/constants";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="grid h-[100vh] grid-cols-6">
        <SideBar sidebarItems={SIDEBAR_ITEMS} />
        <div className="col-span-5 flex h-full flex-col">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
