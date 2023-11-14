import LabComponent from "./LabComponent";
import PropTypes from "prop-types";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import { useContext } from "react";
import { PropContext } from "../context/propContext";

const DashboardView = () => {
  let { labs, setLab, setOpen, setIsDelete, chartData } =
    useContext(PropContext);
  return (
    <div className="bg-gray-100 h-full pt-[2rem]">
      <div className="w-[95%] mx-auto">
        <h3 className="text-3xl font-bold">Available Labs.</h3>
        <div className="grid  2xl:grid-cols-3  md:grid-cols-2 gap-5">
          {labs.map((item) => (
            <LabComponent
              key={item.id}
              item={item}
              setLab={setLab}
              setOpen={setOpen}
              setIsDelete={setIsDelete}
            />
          ))}
        </div>
      </div>
      <div className="w-[95%] mx-auto mt-20 grid grid-cols-2 gap-5">
        <div className="">
          <BarChart data={chartData} />
        </div>
        <div className="">
          <LineChart data={chartData} />
        </div>
      </div>
    </div>
  );
};

DashboardView.propTypes = {
  labs: PropTypes.array,
  setLab: PropTypes.func,
  setOpen: PropTypes.func,
  setIsDelete: PropTypes.func,
  chartData: PropTypes.object,
};
export default DashboardView;
