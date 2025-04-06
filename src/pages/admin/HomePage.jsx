import Button from "@components/Button";
import Title from "@components/Title";
import Overview from "@components/overview/Overview";
import { use, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { IoDocument } from "react-icons/io5";
import { CiImport, CiExport } from "react-icons/ci";
import { dataTableConfig } from "@config/dataTableConfig";
import { GoPencil } from "react-icons/go";
import { useModalContext } from "@context/ModalProvider";

// 8. Click Edit Modal (30')

// 9. Connect Modal (API get, put) (45')

// 10. Add user (Modal post API) (30')

const perRows = [6, 12, 18, 24];
const paginationComponentOption = {
  rowsPerPageText: "",
  noRowsPerPage: true,
};

const HomePage = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");
  const [customer, setCustomer] = useState({});
  const { openPopup } = useModalContext();

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

  const action = (dt) => (
    <button
      className="hover:text-primary cursor-pointer text-[20px]"
      onClick={() => handleClickButtonUpdate(dt.id)}
    >
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

  const dataFinal = (data || []).map((dt) => ({
    ...dt,
    orderDateElement: orderDateElement(dt),
    action: action(dt),
    statusElement: statusElement(dt),
    customerNameElement: customerNameElement(dt),
  }));

  useEffect(() => {
    if (status !== "") {
      const content = (
        <div className="flex flex-col gap-2">
          <div className="">
            <div className="mb-1">
              <label htmlFor="customerName">Tên khách hàng</label>
            </div>
            <input
              type="text"
              name="customerName"
              id="customerName"
              placeholder="Nhập tên khách hàng..."
              className="w-full rounded-[6px] border border-slate-600/50 p-1 text-[14px] outline-none"
              value={customer.customer_name}
            />
          </div>
          <div className="">
            <div className="mb-1">
              <label htmlFor="company">Tên công ty</label>
            </div>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Nhập tên công ty..."
              className="w-full rounded-[6px] border border-slate-600/50 p-1 text-[14px] outline-none"
              value={customer.company}
            />
          </div>
          <div className="">
            <div className="mb-1">
              <label htmlFor="company">Order Value</label>
            </div>
            <input
              type="number"
              name="orderValue"
              id="order-value"
              className="w-full rounded-[6px] border border-slate-600/50 p-1 text-[14px] outline-none"
              disabled
              value={customer.order_value}
            />
          </div>
          <div className="">
            <div className="mb-1">
              <label htmlFor="company">Order Date</label>
            </div>
            <input
              type="date"
              name="orderDate"
              id="order-date"
              className="w-full rounded-[6px] border border-slate-600/50 p-1 text-[14px] outline-none"
              disabled
              value={customer.order_date}
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <input
                type="radio"
                name="status"
                id="new"
                checked={status === "New"} // Kiểm tra status để xác định radio nào được checked
                onChange={() => setStatus("New")} // Cập nhật status khi radio này được chọn
              />
              <label htmlFor="new">New</label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                name="status"
                id="in-progress"
                checked={status === "In-progress"}
                onChange={() => setStatus("In-progress")}
              />
              <label htmlFor="in-progress">In-progress</label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                name="status"
                id="completed"
                checked={status === "Completed"}
                onChange={() => setStatus("Completed")}
              />
              <label htmlFor="completed">Completed</label>
            </div>
          </div>
          <div className="bg-primary flex justify-center rounded-[6px] py-1 text-white">
            <button className="h-full w-full cursor-pointer">Cập nhật</button>
          </div>
        </div>
      );
      openPopup(content);
    }
  }, [status, customer]); // Mở modal khi status thay đổi

  function handleClickButtonUpdate(id) {
    const customer = dataFinal.find((c) => c.id === id);
    setCustomer(customer);
    setStatus(customer.status);
  }
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
