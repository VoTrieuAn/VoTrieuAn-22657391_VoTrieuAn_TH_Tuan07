import Button from "@components/Button";
import Title from "@components/Title";
import Overview from "@components/Overview/Overview";
import { useEffect, useRef, useState } from "react";
import DataTable from "react-data-table-component";
import { IoDocument } from "react-icons/io5";
import { CiImport, CiExport } from "react-icons/ci";
import {
  dataTableConfig,
  paginationComponentOption,
  perRows,
} from "@config/dataTableConfig";
import { useModalContext } from "@context/ModalProvider";
import CustomerUpdateForm from "@components/ModalContent/CustomerUpdateForm";
import ActionElement from "@components/TableDataElement/ActionElement";
import StatusElement from "@components/TableDataElement/StatusElement";
import CustomerNameElement from "@components/TableDataElement/CustomerNameElement";
import OrderDateElement from "@components/TableDataElement/OrderDateElement";
import { IoIosAddCircleOutline } from "react-icons/io";

// 10. Add user (Modal post API) (30')

const HomePage = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");
  const [customer, setCustomer] = useState({});
  const [isCheckShowing, setIsCheckShowing] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
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

  useEffect(() => {
    if (status !== "") {
      const content = (
        <CustomerUpdateForm
          customer={customer}
          status={status}
          setStatus={setStatus}
          setIsUpdate={setIsUpdate}
          isUpdate={isUpdate}
        />
      );
      openPopup(content);
    }
  }, [status, JSON.stringify(customer), isCheckShowing]); // Mở modal khi status thay đổi

  const action = (dt) => (
    <ActionElement id={dt.id} onOpenModal={handleClickButtonModalUpdate} />
  );

  const statusElement = (dt) => <StatusElement status={dt.status} />;

  const customerNameElement = (dt) => (
    <CustomerNameElement customerName={dt.customer_name} />
  );

  const orderDateElement = (dt) => (
    <OrderDateElement orderDate={dt.order_date} />
  );

  function handleClickButtonModalUpdate(id) {
    const customer = data.find((c) => c.id === id);
    setCustomer(customer);
    setStatus(customer.status);
    setIsCheckShowing(!isCheckShowing);
  }

  const dataFinal = (data || []).map((dt) => ({
    ...dt,
    orderDateElement: orderDateElement(dt),
    action: action(dt),
    statusElement: statusElement(dt),
    customerNameElement: customerNameElement(dt),
  }));

  return (
    <>
      <Overview />
      <div className="flex flex-1 flex-col justify-between gap-4 p-7 py-10">
        <div className="">
          <div className="flex items-center justify-between">
            <Title icon={IoDocument} title="Detailed report" />
            <div className="flex gap-3.5">
              <Button icon={IoIosAddCircleOutline} name="Add Customer" />
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
