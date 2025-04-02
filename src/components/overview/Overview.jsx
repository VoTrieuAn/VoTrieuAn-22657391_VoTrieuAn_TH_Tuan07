import { useEffect, useState } from "react";
import OverviewItem from "./OverviewItem";

const Overview = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch(
          "https://67ece4444387d9117bbb5ab5.mockapi.io/api/v1/data-all",
        );
        const dataAPI = await res.json();
        setData(dataAPI[0].overview);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);
  console.log(data);
  return (
    <div className="bg-amber-400 p-7">
      <h1 className="mb-5">Overview</h1>
      <div className="flex justify-between gap-4">
        {(data || []).map((item) => (
          <OverviewItem
            key={item.id}
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
