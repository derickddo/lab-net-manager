
import TopBar from "./TopBar";

// eslint-disable-next-line react/prop-types
const DashboardCenter = ({ children }) => {
  return (
    <div className="w-[82%] ml-[18%]">
      <TopBar />
      {children}
    </div>
  );
};

export default DashboardCenter;
