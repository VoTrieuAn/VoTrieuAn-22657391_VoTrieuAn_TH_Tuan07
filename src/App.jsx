import Header from "@components/Header";
import Overview from "@components/overview/Overview";
import Slider from "@components/slider/Slider";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";

DataTable.use(DT);

function App() {
  return (
    <>
      <div className="grid h-[100vh] grid-cols-6">
        <Slider />
        <div className="col-span-5 flex h-full flex-col">
          <Header />
          <Overview />
          <div className="gap-4px-7 flex flex-1 flex-col justify-between py-10">
            <div className="">
              <h1 className="mb-5">Detailed report</h1>
              <DataTable className="display w-full">
                <thead>
                  <tr>
                    <th className="px-2 py-3">
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
                      <img src="/" alt="" />
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
                      <img src="/" alt="" />
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
                      <img src="/" alt="" />
                      Elizabeth Lee
                    </td>
                    <td className="px-2 py-3">AvatarSystems</td>
                    <td className="px-2 py-3">$359</td>
                    <td className="px-2 py-3">10/07/2023</td>
                    <td className="px-2 py-3">New</td>
                    <td className="px-2 py-3">Edit</td>
                  </tr>
                </tbody>
              </DataTable>
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
