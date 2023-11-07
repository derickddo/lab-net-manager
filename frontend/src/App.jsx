import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Aos from "aos";
import { useContext, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import DashboardView from "./components/DashboardView";
import useFetch from "./utils/useFetch";
import { PropContext } from "./context/propContext";
import LabView from "./components/LabView";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  let { setLabs, lab, setChartData } = useContext(PropContext);

  const api = useFetch();

  useEffect(() => {
    const getLabs = async () => {
      let { response, data } = await api("api/labs/");
      if (response.status === 200) {
        setLabs(data);
      }
    };

    getLabs();
  }, [setLabs, lab]);

  useEffect(() => {
    const getLabData = async () => {
      let { response, data } = await api("api/lab-data/");
      if (response.status === 200) {
        setChartData(data);
      }
    };
    getLabData();
  }, [setLabs, lab]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route
          path="/dashboard"
          element={
            <Dashboard>
              <DashboardView />
            </Dashboard>
          }
        />
        <Route
          path="/dashboard/lab/:id"
          element={
            <Dashboard>
              <LabView  />
            </Dashboard>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
