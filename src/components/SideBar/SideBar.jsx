import { Link, useLocation } from "react-router-dom";

const SideBar = ({ sidebarItems }) => {
  const { pathname } = useLocation();

  return (
    <div className="fixed left-0 h-full w-[237.5px] border-r-[1px] border-[#E2E2E4] px-4 py-5">
      <div className="h-9 w-[106px]">
        <img src="/logo.svg" alt="" className="h-full w-full object-contain" />
      </div>
      <ul className="mt-6 flex flex-col">
        {sidebarItems.map((item) => (
          <li
            key={item.id}
            className={`${pathname == item.path ? "bg-primary text-white" : "text-dark"} rounded-[6px] px-4 py-3 text-[14px]`}
          >
            <Link to={item.path} className="flex items-center gap-4 font-[700]">
              <item.icon className="text-[24px]" /> {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideBar;
