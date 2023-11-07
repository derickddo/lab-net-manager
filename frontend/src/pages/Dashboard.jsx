import Sidebar from "../components/Sidebar";
import DashboardCenter from "../components/DashboardCenter";

// eslint-disable-next-line react/prop-types
const Dashboard = ({ children }) => {
  return (
    <div className="">
      <Sidebar />
      <DashboardCenter>{children}</DashboardCenter>
    </div>
  );
};

export default Dashboard;
