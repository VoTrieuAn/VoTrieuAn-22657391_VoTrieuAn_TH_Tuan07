import Overview from "@components/overview/Overview";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const action = <button>Edit</button>;
const perRows = [5, 10, 15, 20];
const paginationComponentOption = {
  rowsPerPageText: "",
  noRowsPerPage: true,
};

const HomePage = () => {
  const [data, setData] = useState([]);
  const columns = [
    { name: "CUSTOMER NAME", selector: (row) => row.customer_name },
    { name: "COMPANY", selector: (row) => row.company },
    { name: "ORDER VALUE", selector: (row) => row.order_value },
    { name: "ORDER DATE", selector: (row) => row.order_date },
    { name: "STATUS", selector: (row) => row.status },
    { name: "", selector: (row) => row.action },
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

  const dataFinal = (data || []).map((dt) => ({ ...dt, action }));
  console.log(dataFinal);
  return (
    <>
      <Overview />
      <div className="gap-4px-7 flex flex-1 flex-col justify-between py-10">
        <div className="">
          <h1 className="mb-5">Detailed report</h1>
          <DataTable
            data={dataFinal}
            columns={columns}
            highlightOnHover
            pointerOnHover
            selectableRows
            selectableRowsHighlight
            striped
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={perRows}
            paginationTotalRows={dataFinal.length}
            paginationComponentOptions={paginationComponentOption}
          />
        </div>
        <div className="flex items-center justify-between px-4 py-3.5">
          <div>
            Result: <span>{data.length}</span>
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
    </>
  );
};
export default HomePage;
