const Button = ({ icon: Icon, name, onClick }) => {
  return (
    <button
      className="border-primary text-primary hover:bg-primary flex cursor-pointer items-center gap-1 rounded-[6px] border px-2 py-1 text-sm font-normal hover:text-white"
      onClick={onClick}
    >
      <Icon /> {name}
    </button>
  );
};
export default Button;
