
import { useContext, useEffect, useState } from "react";

import AuthContext from "../context/AuthContext";

import useFetch from "../utils/useFetch";

import DashboardView from "./DashboardView";
import TopBar from "./TopBar";
import LabView from "./LabView";

const DashboardCenter = () => {
  const [labs, setLabs] = useState([]);
  const [chartData, setChartData] = useState({});
  const { user, logoutUser } = useContext(AuthContext);
  const [spin, setSpin] = useState(false);
  const [open, setOpen] = useState(false);
  const [lab, setLab] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const [visitLab, setVisitLab] = useState(false)

  const api = useFetch();

  useEffect(() => {
    getLabs();
  }, [setLabs, lab]);

  useEffect(() => {
    getLabData();
  }, [setLabs, lab]);

  const getLabs = async () => {
    let { response, data } = await api("api/labs/");
    if (response.status === 200) {
      setLabs(data);
    }
  };

  const getLabData = async () => {
    let { response, data } = await api("api/lab-data/");
    if (response.status === 200) {
      console.log(data);
      setChartData(data);
    }
  };

  return (
    <div className="w-[85%] ml-[15%]">
      <TopBar
        lab={lab}
        setLab={setLab}
        setLabs={setLabs}
        setOpen={setOpen}
        setSpin={setSpin}
        spin={spin}
        isDelete={isDelete}
        logoutUser={logoutUser()}
        user={user}
        open={open}
      />
      { !visitLab ? <DashboardView
        labs={labs}
        setIsDelete={setIsDelete}
        setLab={setLab}
        setOpen={setOpen}
        chartData={chartData}
        setVisitLab={setVisitLab}
      />: <LabView lab={lab}/>}
      
    </div>
  );
};

export default DashboardCenter;
