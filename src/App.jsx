import Header from "@components/Header";
import Overview from "@components/overview/Overview";
import Slider from "@components/slider/Slider";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { useEffect, useState } from "react";

DataTable.use(DT);

function App() {
  const [data, setData] = useState([]);
  const columns = [
    { data: "customer_name" },
    { data: "company" },
    { data: "order_value" },
    { data: "order_date", title: "ORDER DATE" },
    { data: "status", title: "STATUS" },
  ];

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch(
          "https://67ece4444387d9117bbb5ab5.mockapi.io/api/v1/data-all",
        );
        const dataAPI = await res.json();
        setData(dataAPI[0].detailed_report);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  console.log(data);

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
              <DataTable
                data={data}
                columns={columns}
                className="display w-full"
                options={{
                  responsive: true,
                  select: true,
                }}
              >
                <thead>
                  <tr>
                    <th>CUSTOMER NAME</th>
                    <th>COMPANY</th>
                    <th>ORDER VALUE</th>
                    <th>ORDER DATE</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
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
