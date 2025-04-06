import BoxInput from "@components/BoxInput";
import { useModalContext } from "@context/ModalProvider";
import { memo, useRef } from "react";
import Swal from "sweetalert2";

const CustomerUpdateForm = ({
  customer,
  status,
  setStatus,
  setIsUpdate,
  isUpdate,
}) => {
  const { setIsShowing } = useModalContext();
  const refCustomerName = useRef("");
  const refCompanyName = useRef("");

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
    <div className="flex flex-col gap-2">
      <BoxInput
        ref={refCustomerName}
        label="Customer Name"
        type="text"
        name="customerName"
        id="customerName"
        placeholder="Enter customer name..."
        defaultValue={customer.customer_name}
      />
      <BoxInput
        ref={refCompanyName}
        type="text"
        label="Company Name"
        name="company"
        id="company"
        placeholder="Enter company name..."
        defaultValue={customer.company}
      />
      <BoxInput
        type="number"
        label="Order Value"
        name="orderValue"
        id="order-value"
        disabled
        defaultValue={customer.order_value}
      />
      <BoxInput
        type="date"
        label="Order Date"
        name="orderDate"
        id="order-date"
        disabled
        defaultValue={customer.order_date}
      />
      <div className="flex items-center gap-3">
        <BoxInput
          type="radio"
          label="New"
          name="status"
          id="new"
          checked={status === "New"}
          className="flex items-center gap-1"
          onChange={() => setStatus("New")}
        />
        <BoxInput
          type="radio"
          label="In-progress"
          name="status"
          id="in-progress"
          checked={status === "In-progress"}
          className="flex items-center gap-1"
          onChange={() => setStatus("In-progress")}
        />
        <BoxInput
          type="radio"
          label="Completed"
          name="status"
          id="completed"
          checked={status === "Completed"}
          className="flex items-center gap-1"
          onChange={() => setStatus("Completed")}
        />
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
};
export default memo(CustomerUpdateForm);
