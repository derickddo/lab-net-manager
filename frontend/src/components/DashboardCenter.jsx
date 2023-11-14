
import TopBar from "./TopBar";

// eslint-disable-next-line react/prop-types
const DashboardCenter = ({ children }) => {
  return (
    <div className="w-[85%] ml-[15%]">
      <TopBar />
      {children}
    </div>
  );
};

export default DashboardCenter;
