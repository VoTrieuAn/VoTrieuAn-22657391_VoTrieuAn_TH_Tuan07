const OverviewItem = ({ title, value, change }) => {
  return (
    <div className="w-full rounded-[6px] bg-amber-200 p-5">
      <p>{title}</p>
      <p>${value}</p>
      <p>
        <span>{change}%</span> period of change
      </p>
    </div>
  );
};
export default OverviewItem;
