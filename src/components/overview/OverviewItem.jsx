import Icon from "@components/Icon";
import { IoCartOutline } from "react-icons/io5";
import { TfiMoney } from "react-icons/tfi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
const OverviewItem = ({ id, title, value, change }) => {
  let icon = null;
  let bg = null;
  let border = null;
  switch (id) {
    case 1:
      icon = <IoCartOutline className="text-[#f44b87ff]" />;
      bg = "bg-[#FEF0F5FF]";
      border = "border-[#f44b87ff]";
      break;
    case 2:
      icon = <TfiMoney className="text-[#2b80ffff]" />;
      bg = "bg-[#F0F6FFFF]";
      border = "border-[#2b80ffff]";
      break;
    case 3:
      icon = <FaRegUserCircle className="text-[#2b80ffff]" />;
      bg = "bg-[#F1F8FDFF]";
      border = "border-[#2b80ffff]";
      break;
    default:
      icon = null;
      bg = null;
      border = null;
  }

  return (
    <div className={`w-full rounded-[6px] ${bg}`}>
      <div className="flex items-start justify-between p-5">
        <div className={bg}>
          <p className="text-[16px] font-[700]">{title}</p>
          <p className="text-[32px] font-[700]">
            {id === 3 ? `${value}` : `$${value}`}
          </p>
          <p className="flex items-center gap-1">
            <IoMdArrowDropup className="text-[#117B34FF]" />
            <span className="font-[700] text-[#117B34FF]">{change}%</span>{" "}
            <span className="text-[14px] font-[400] text-[#565E6CFF]">
              period of change
            </span>
          </p>
        </div>
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-[6px] border ${border}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};
export default OverviewItem;
