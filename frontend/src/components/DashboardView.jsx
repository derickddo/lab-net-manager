import LabComponent from "./LabComponent";
import PropTypes from "prop-types";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const DashboardView = ({ labs, setLab, setOpen, setIsDelete, chartData, setVisitLab }) => {
  return (
    <div className="bg-gray-100 h-[100vh] overflow-auto pt-[2rem]">
      <div className="w-[95%] mx-auto">
        <h3 className="text-3xl font-bold">Available Labs.</h3>
        <div className="grid grid-cols-3 gap-5">
          {labs.map((item) => (
            <LabComponent
              key={item.id}
              item={item}
              setLab={setLab}
              setOpen={setOpen}
              setIsDelete={setIsDelete}
              setVisitLab= {setVisitLab}
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
  setVisitLab: PropTypes.func
};
export default DashboardView;
