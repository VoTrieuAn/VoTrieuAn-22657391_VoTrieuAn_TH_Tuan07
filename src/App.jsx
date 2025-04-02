import { MdOutlineDashboard } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { BiPieChartAlt2 } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdCode } from "react-icons/io";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="grid h-[100vh] grid-cols-6">
        <div className="h-full px-4 py-5">
          <div className="h-9 w-[106px]">
            <img
              src="/logo.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <ul className="">
            <li>
              <MdOutlineDashboard /> Dashboard
            </li>
            <li>
              <FaRegFolder /> Projects
            </li>
            <li>
              <GrGroup /> Teams
            </li>
            <li>
              <BiPieChartAlt2 /> Analytics
            </li>
            <li>
              <BiMessageDetail /> Messages
            </li>
            <li>
              <IoMdCode /> Integrations
            </li>
          </ul>
        </div>
        <div className="col-span-5 flex h-full flex-col">
          <div className="bg-blue-200 px-7 py-4">Header</div>
          <div className="bg-amber-400 p-7">
            <h1 className="mb-5">Overview</h1>
            <div className="flex justify-between gap-4">
              <div className="w-full rounded-[6px] bg-amber-200 p-5">
                <p>Turnover</p>
                <p>$92,405</p>
                <p>
                  <span>5.39%</span> period of change
                </p>
              </div>
              <div className="w-full rounded-[6px] bg-amber-200 p-5">
                <p>Profit</p>
                <p>$92,405</p>
                <p>
                  <span>5.39%</span> period of change
                </p>
              </div>
              <div className="w-full rounded-[6px] bg-amber-200 p-5">
                <p>New customer</p>
                <p>298</p>
                <p>
                  <span>5.39%</span> period of change
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between gap-4 bg-slate-300 px-7 py-10">
            <div className="">
              <h1 className="mb-5">Detailed report</h1>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th>CUSTOMER NAME</th>
                    <th>COMPANY</th>
                    <th>ORDER VALUE</th>
                    <th>ORDER DATE</th>
                    <th>STATUS</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="px-2 py-3">
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td className="px-2 py-3">
                      <img src="" alt="" />
                      Elizabeth Lee
                    </td>
                    <td className="px-2 py-3">AvatarSystems</td>
                    <td className="px-2 py-3">$359</td>
                    <td className="px-2 py-3">10/07/2023</td>
                    <td className="px-2 py-3">New</td>
                    <td className="px-2 py-3">Edit</td>
                  </tr>
                  <tr className="text-center">
                    <td className="px-2 py-3">
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td className="px-2 py-3">
                      <img src="" alt="" />
                      Elizabeth Lee
                    </td>
                    <td className="px-2 py-3">AvatarSystems</td>
                    <td className="px-2 py-3">$359</td>
                    <td className="px-2 py-3">10/07/2023</td>
                    <td className="px-2 py-3">New</td>
                    <td className="px-2 py-3">Edit</td>
                  </tr>
                  <tr className="text-center">
                    <td className="px-2 py-3">
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td className="px-2 py-3">
                      <img src="" alt="" />
                      Elizabeth Lee
                    </td>
                    <td className="px-2 py-3">AvatarSystems</td>
                    <td className="px-2 py-3">$359</td>
                    <td className="px-2 py-3">10/07/2023</td>
                    <td className="px-2 py-3">New</td>
                    <td className="px-2 py-3">Edit</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between px-4 py-3.5">
              <div>
                Result: <span>63</span>
              </div>
              <div className="flex gap-4">
                <button className="cursor-pointer rounded bg-slate-600 px-3 py-1 text-white">
                  &lt;
                </button>
                <button className="cursor-pointer rounded bg-slate-600 px-3 py-1 text-white">
                  1
                </button>
                <button className="cursor-pointer rounded bg-slate-600 px-3 py-1 text-white">
                  2
                </button>
                <button className="cursor-pointer rounded bg-slate-600 px-3 py-1 text-white">
                  3
                </button>
                <button className="cursor-pointer rounded bg-slate-600 px-3 py-1 text-white">
                  4
                </button>
                <button className="cursor-pointer rounded bg-slate-600 px-3 py-1 text-white">
                  5
                </button>
                <button className="cursor-pointer rounded bg-slate-600 px-3 py-1 text-white">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
