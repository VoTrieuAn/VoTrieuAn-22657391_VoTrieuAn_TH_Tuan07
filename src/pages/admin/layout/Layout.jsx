import Header from "@components/Header";
import SideBar from "@components/SideBar/SideBar";
import { SIDEBAR_ITEMS } from "@libs/constants";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="flex h-screen">
        <aside className="col-span-1 w-[288px]">
          <SideBar sidebarItems={SIDEBAR_ITEMS} />
        </aside>
        <div className="h-full flex-1">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
