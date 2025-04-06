import Button from "@components/Button";
import Title from "@components/Title";
import Overview from "@components/overview/Overview";
import { use, useEffect, useRef, useState } from "react";
import DataTable from "react-data-table-component";
import { IoDocument } from "react-icons/io5";
import { CiImport, CiExport } from "react-icons/ci";
import { dataTableConfig } from "@config/dataTableConfig";
import { GoPencil } from "react-icons/go";
import { useModalContext } from "@context/ModalProvider";
import Swal from "sweetalert2";

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
  const [isCheckShowing, setIsCheckShowing] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const { openPopup, setIsShowing } = useModalContext();
  const refCustomerName = useRef("");
  const refCompanyName = useRef("");
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
  console.log("re render");
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch(
          "https://67ece4444387d9117bbb5ab5.mockapi.io/api/v1/detailed-report",
        );
        const dataAPI = await res.json();
        setData(dataAPI);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, [isUpdate]);

  const action = (dt) => (
    <button
      className="hover:text-primary cursor-pointer text-[20px]"
      onClick={() => handleClickButtonModalUpdate(dt.id)}
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
              <label htmlFor="customerName">Customer Name</label>
            </div>
            <input
              ref={refCustomerName}
              type="text"
              name="customerName"
              id="customerName"
              placeholder="Enter customer name..."
              className="w-full rounded-[6px] border border-slate-600/50 p-1 text-[14px] outline-none"
              defaultValue={customer.customer_name}
            />
          </div>
          <div className="">
            <div className="mb-1">
              <label htmlFor="company">Company Name</label>
            </div>
            <input
              ref={refCompanyName}
              type="text"
              name="company"
              id="company"
              placeholder="Enter company name..."
              className="w-full rounded-[6px] border border-slate-600/50 p-1 text-[14px] outline-none"
              defaultValue={customer.company}
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
              className="w-full rounded-[6px] border border-slate-600/50 bg-slate-200 p-1 text-[14px] outline-none"
              disabled
              defaultValue={customer.order_value}
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
              className="w-full rounded-[6px] border border-slate-600/50 bg-slate-200 p-1 text-[14px] outline-none"
              disabled
              defaultValue={customer.order_date}
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
          <div className="bg-primary hover:bg-primary/50 hover:text-primary flex justify-center rounded-[6px] py-1 text-white">
            <button
              className="h-full w-full cursor-pointer"
              onClick={handleClickButtonUpdate}
            >
              Cập nhật
            </button>
          </div>
        </div>
      );
      openPopup(content);
    }
  }, [status, JSON.stringify(customer), isCheckShowing]); // Mở modal khi status thay đổi

  function handleClickButtonModalUpdate(id) {
    const customer = data.find((c) => c.id === id);
    setCustomer(customer);
    setStatus(customer.status);
    setIsCheckShowing(!isCheckShowing);
  }

  const handleClickButtonUpdate = () => {
    const customer_name = refCustomerName.current.value;
    const company = refCompanyName.current.value;

    const newCustomer = { ...customer, customer_name, company, status };

    const updateData = async (id, updatedData) => {
      try {
        const response = await fetch(
          `https://67ece4444387d9117bbb5ab5.mockapi.io/api/v1/detailed-report/${id}`,
          {
            method: "PUT", // Phương thức PUT
            headers: {
              "Content-Type": "application/json", // Đảm bảo dữ liệu gửi lên là JSON
            },
            body: JSON.stringify(updatedData), // Dữ liệu cần cập nhật
          },
        );

        if (!response.ok) {
          Swal.fire({
            title: "Update Failed!",
            icon: "error",
            draggable: true,
          });
        }

        Swal.fire({
          title: "Update Success!",
          icon: "success",
          draggable: true,
        });
        setIsShowing(false);
        setIsUpdate(!isUpdate);
      } catch (error) {
        Swal.fire({
          title: error,
          icon: "error",
          draggable: true,
        });
      }
    };
    // Gọi hàm với ID và dữ liệu cần cập nhật
    updateData(newCustomer.id, newCustomer);
  };

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
