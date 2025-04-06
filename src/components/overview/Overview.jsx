import { useEffect, useState } from "react";
import OverviewItem from "./OverviewItem";
import { MdDashboard } from "react-icons/md";
import Title from "@components/Title";

const Overview = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch(
          "https://67ece4444387d9117bbb5ab5.mockapi.io/api/v1/overview",
        );
        const dataAPI = await res.json();
        setData(dataAPI);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);
  return (
    <div className="px-7 pt-7">
      <Title icon={MdDashboard} title="Overview" />
      <div className="flex justify-between gap-4">
        {(data || []).map((item) => (
          <OverviewItem
            key={item.id}
            id={item.id}
            title={item.title}
            value={item.value}
            change={item.change}
          />
        ))}
      </div>
    </div>
  );
};
export default Overview;
