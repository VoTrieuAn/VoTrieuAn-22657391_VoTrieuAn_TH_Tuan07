import BoxInput from "@components/BoxInput";
import { useModalContext } from "@context/ModalProvider";
import { memo, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const CustomerUpdateForm = ({ setIsUpdate, isUpdate }) => {
  const { setIsShowing, setHeaderName } = useModalContext();
  const [status, setStatus] = useState("New");
  const refCustomerName = useRef("");
  const refCompanyName = useRef("");

  useEffect(() => {
    setHeaderName("Add Customer");
  }, []);

  const handleClickButtonAdd = () => {
    const customer_name = refCustomerName.current.value;
    const company = refCompanyName.current.value;
    const newCustomer = { id: uuidv4(), customer_name, company, status };
    const addData = async (id, addData) => {
      try {
        const response = await fetch(
          `https://67ece4444387d9117bbb5ab5.mockapi.io/api/v1/detailed-report`,
          {
            method: "POST", // Phương thức PUT
            headers: {
              "Content-Type": "application/json", // Đảm bảo dữ liệu gửi lên là JSON
            },
            body: JSON.stringify(addData), // Dữ liệu cần cập nhật
          },
        );

        if (!response.ok) {
          draggableModal({
            title: "Update Failed!",
          });
        }
        draggableModal({
          title: "Update Success!",
        });
        setIsShowing(false);
        setIsUpdate(!isUpdate);
      } catch (error) {
        draggableModal({
          title: "Update Failed!",
        });
      }
    };
    // Gọi hàm với ID và dữ liệu cần cập nhật
    addData(newCustomer.id, newCustomer);
  };
  return (
    <div className="flex flex-col gap-2">
      <BoxInput
        ref={refCustomerName}
        label="Customer Name"
        type="text"
        name="customerName"
        id="customerName"
        placeholder="Enter customer name..."
      />
      <BoxInput
        ref={refCompanyName}
        type="text"
        label="Company Name"
        name="company"
        id="company"
        placeholder="Enter company name..."
      />
      <BoxInput
        type="number"
        label="Order Value"
        name="orderValue"
        id="order-value"
        placeholder="Enter Order Value..."
      />
      <BoxInput
        type="date"
        label="Order Date"
        name="orderDate"
        id="order-date"
        disabled
        defaultValue={new Date().toISOString().split("T")[0]}
      />

      <div className="flex items-center gap-3">
        <BoxInput
          type="radio"
          label="New"
          name="status"
          id="new"
          className="flex items-center gap-1"
          checked={status === "New"}
          onChange={() => setStatus("New")}
        />
        <BoxInput
          type="radio"
          label="In-progress"
          name="status"
          id="in-progress"
          className="flex items-center gap-1"
          checked={status === "In-progress"}
          onChange={() => setStatus("In-progress")}
        />
        <BoxInput
          type="radio"
          label="Completed"
          name="status"
          id="completed"
          className="flex items-center gap-1"
          checked={status === "Completed"}
          onChange={() => setStatus("Completed")}
        />
      </div>
      <div className="bg-primary hover:bg-primary/50 hover:text-primary flex justify-center rounded-[6px] py-1 text-white">
        <button
          className="h-full w-full cursor-pointer"
          onClick={handleClickButtonAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default memo(CustomerUpdateForm);
