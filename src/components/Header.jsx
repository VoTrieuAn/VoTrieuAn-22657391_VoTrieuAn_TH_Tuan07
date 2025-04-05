import { FaBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineQuestionMark } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between border-b-[1px] border-[#E2E2E4] bg-white px-7 py-4">
      <div className="text-primary text-2xl font-[700]">
        <Link to="/">Dashboard</Link>
      </div>
      <div className="flex items-center gap-4">
        <form
          action=""
          className="flex items-center gap-1 rounded-[6px] bg-[#F3F4F6FF] px-3 py-1"
        >
          <IoIosSearch />
          <input
            type="text"
            name="search"
            id=""
            className="outline-none placeholder:font-normal"
            placeholder="Search"
          />
        </form>
        <FaBell className="cursor-pointer text-2xl" />
        <MdOutlineQuestionMark className="cursor-pointer text-2xl" />
        <div className="h-9 w-9 cursor-pointer overflow-hidden rounded-full bg-[#FBC8DAFF]">
          <img
            src="/avatar.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
