import { GoPencil } from "react-icons/go";

const ActionElement = ({ id, onOpenModal }) => {
  return (
    <button
      className="hover:text-primary cursor-pointer text-[20px]"
      onClick={() => onOpenModal(id)}
    >
      <GoPencil />
    </button>
  );
};
export default ActionElement;
