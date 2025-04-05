const Title = ({ icon: Icon, title }) => {
  return (
    <div className="mb-5 flex items-center gap-2 text-[20px] text-[#171A1FFF]">
      <Icon className="text-primary" />
      <h1 className="font-[700]">{title}</h1>
    </div>
  );
};
export default Title;
