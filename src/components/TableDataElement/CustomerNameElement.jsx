const CustomerNameElement = ({ customerName }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 cursor-pointer overflow-hidden rounded-full bg-[#FBC8DAFF]">
        <img src="/avatar.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <p className="line-clamp-1 font-[700]">{customerName}</p>
    </div>
  );
};
export default CustomerNameElement;
