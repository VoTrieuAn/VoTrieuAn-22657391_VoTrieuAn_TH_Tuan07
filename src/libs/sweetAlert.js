import Swal from "sweetalert2";

export const draggableModal = ({
  title = "",
  icon = "success",
  draggable = true,
}) => {
  Swal.fire({
    title,
    icon,
    draggable,
  });
};

export const dialogWithThree = ({
  title = "Do you want to save the changes?",
  showDenyButton = true,
  showCancelButton = true,
  confirmButtonText = "Save",
  denyButtonText = `Don't save`,
  resultSuccess,
}) => {
  Swal.fire({
    title,
    showDenyButton,
    showCancelButton,
    confirmButtonText,
    denyButtonText,
  }).then((result) => {
    if (result.isConfirmed) {
      // Gọi hàm với ID và dữ liệu cần cập nhật
      resultSuccess();
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};
