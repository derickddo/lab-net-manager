import { Avatar, Input } from "@material-tailwind/react";
import Dropdown from "./Dropdown";
import { useContext, useEffect, useState } from "react";
import { Modal } from "./Modal";
import AuthContext from "../context/AuthContext";
import LabComponent from "./LabComponent";
import LabChart from "./BarChart";
import LineChart from "./LineChart";
import { IoNotificationsOutline } from "react-icons/io5";
import useFetch from "../utils/useFetch";
import LabForm from "../forms/LabForm";
import DeleteDialog from "./DeleteDialog";

const DashboardCenter = () => {
  const options = ["login", "logout"];
  const [labs, setLabs] = useState([]);
  const [chartData, setChartData] = useState({});
  const { user, logoutUser } = useContext(AuthContext);
  const [spin, setSpin] = useState(false);
  const [open, setOpen] = useState(false);
  const [lab, setLab] = useState({});
  const [isDelete, setIsDelete] = useState(false);

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
      <div className="h-[5rem] sticky bg-white top-0 z-10 border-b border-b-gray-300">
        <div className="w-[95%] flex justify-between  items-center h-full mx-auto">
          <div className="flex gap-5 items-center">
            <Modal
              open={open}
              setOpen={setOpen}
              state={false}
              buttonName={"create a lab"}
              setLab={setLab}
              title={`${!isDelete ? !lab ? "Create a lab": 'Update Lab' : ""}`}>
              {!isDelete ? (
                <LabForm
                  spin={spin}
                  setLabs={setLabs}
                  setSpin={setSpin}
                  open={open}
                  lab={lab}
                  setLab={setLab}
                  setOpen={setOpen}
                />
              ) : (
                <DeleteDialog
                  name={lab.name}
                  lab={lab}
                  setOpen={setOpen}
                  spin={spin}
                  setSpin={setSpin}
                  setLab={setLab}
                />
              )}
            </Modal>
            <div className="">
              <Input
                className="w-[30rem]"
                label="search"
                type="text"
                size="lg"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <IoNotificationsOutline className="text-3xl" />
            <Dropdown
              logoutUser={logoutUser}
              options={options}
              element={
                <div className="flex gap-2 items-center">
                  <Avatar
                    className="w-[2.3rem] h-[2.3rem]"
                    src={`${
                      user.avatar ? user.avatar : "https://i.pravatar.cc/300"
                    }`}
                  />
                  <p>{user.email}</p>
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-[100vh] overflow-auto pt-[2rem]">
        <div className="w-[95%] mx-auto">
          <h3 className="text-3xl font-bold">Available Labs.</h3>
          <div className="grid grid-cols-3 gap-5">
            {labs.map((item) => (
              <LabComponent
                name={item.name}
                descrption={item.description}
                created_at={new Date(item.created).toDateString()}
                devices={item.devices}
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
            <LabChart data={chartData} />
          </div>
          <div className="">
            <LineChart data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCenter;
