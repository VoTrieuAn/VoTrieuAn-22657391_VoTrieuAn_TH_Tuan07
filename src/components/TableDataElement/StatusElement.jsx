const StatusElement = ({ status }) => {
  return (
    <div
      className={`rounded-[14px] p-2 text-[12px] font-normal ${
        status === "New"
          ? "bg-[#F1F8FD] text-[#379AE6]"
          : status === "In-progress"
            ? "bg-[#FEF9EE] text-[#A27722]"
            : "bg-[#EEFDF3] text-[#137C36]"
      }`}
    >
      {status}
    </div>
  );
};
export default StatusElement;
