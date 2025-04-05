import Button from "@components/Button";
import Title from "@components/Title";
import Overview from "@components/overview/Overview";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { IoDocument } from "react-icons/io5";
import { CiImport, CiExport } from "react-icons/ci";
import { dataTableConfig } from "@config/dataTableConfig";
import { GoPencil } from "react-icons/go";

const perRows = [6, 12, 18, 24];
const paginationComponentOption = {
  rowsPerPageText: "",
  noRowsPerPage: true,
};

const action = (
  <button className="hover:text-primary cursor-pointer text-[20px]">
    <GoPencil />
  </button>
);

const statusElement = (dt) => (
  <div
    className={`rounded-[14px] p-2 text-[12px] font-normal ${
      dt.status === "New"
        ? "bg-[#F1F8FD] text-[#379AE6]"
        : dt.status === "In-progress"
          ? "bg-[#FEF9EE] text-[#A27722]"
          : "bg-[#EEFDF3] text-[#137C36]"
    }`}
  >
    {dt.status}
  </div>
);

const customerNameElement = (dt) => (
  <div className="flex items-center gap-2">
    <div className="h-9 w-9 cursor-pointer overflow-hidden rounded-full bg-[#FBC8DAFF]">
      <img src="/avatar.jpg" alt="" className="h-full w-full object-cover" />
    </div>
    <p className="line-clamp-1 font-[700]">{dt.customer_name}</p>
  </div>
);

const orderDateElement = (dt) => (
  <span className="text-[#9095a0ff]">{dt.order_date}</span>
);

const HomePage = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "CUSTOMER NAME",
      selector: (row) => row.customerNameElement,
    },
    { name: "COMPANY", selector: (row) => row.company },
    { name: "ORDER VALUE", selector: (row) => row.order_value },
    { name: "ORDER DATE", selector: (row) => row.orderDateElement },
    { name: "STATUS", selector: (row) => row.statusElement },
    { name: "", selector: (row) => row.action, width: "80px" },
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

  const dataFinal = (data || []).map((dt) => ({
    ...dt,
    orderDateElement: orderDateElement(dt),
    action,
    statusElement: statusElement(dt),
    customerNameElement: customerNameElement(dt),
  }));
  console.log(dataFinal);
  return (
    <>
      <Overview />
      <div className="flex flex-1 flex-col justify-between gap-4 p-7 py-10">
        <div className="">
          <div className="flex items-center justify-between">
            <Title icon={IoDocument} title="Detailed report" />
            <div className="flex gap-3.5">
              <Button icon={CiImport} name="Import" />
              <Button icon={CiExport} name="Export" />
            </div>
          </div>
          <DataTable
            data={dataFinal}
            columns={columns}
            customStyles={dataTableConfig}
            highlightOnHover
            pointerOnHover
            selectableRows
            selectableRowsHighlight
            pagination
            paginationPerPage={6}
            paginationRowsPerPageOptions={perRows}
            paginationTotalRows={dataFinal.length}
            paginationComponentOptions={paginationComponentOption}
          />
        </div>
      </div>
    </>
  );
};
export default HomePage;
