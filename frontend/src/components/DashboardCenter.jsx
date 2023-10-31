import {
  Avatar,
  Button,
  // Card,
  // Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import Dropdown from "./Dropdown";
import { useContext } from "react";
import { Modal } from "./Modal";
import AuthContext from "../context/AuthContext";
import LabComponent from "./LabComponent";
import LabChart from "./BarChart";
import LineChart from "./LineChart";
const DashboardCenter = () => {
  const options = ["login", "logout"];

  // const TABLE_HEAD = ["Name", "Job", "Employed", ""];

  // const TABLE_ROWS = [
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "Alexa Liras",
  //     job: "Developer",
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "Laurent Perrier",
  //     job: "Executive",
  //     date: "19/09/17",
  //   },
  //   {
  //     name: "Michael Levi",
  //     job: "Developer",
  //     date: "24/12/08",
  //   },
  //   {
  //     name: "Richard Gran",
  //     job: "Manager",
  //     date: "04/10/21",
  //   },
  // ];

  const labs = [
    {
      name: " Lab 1",
      descrption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitVoluptas, temporibus.",
      devices: 20,
      created_at: "2 days",
    },
  ];
  const chartData = {
    labels: ["Lab A", "Lab B", "Lab C", 'Lab D'],
    deviceCount: [30, 25, 20, 40],
  };

  const { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="w-[85%] ml-[15%]">
      <div className="h-[5rem] sticky bg-white top-0 z-10 border-b border-b-gray-300">
        <div className="w-[95%] flex justify-between items-center h-full mx-auto">
          <Modal
            state={false}
            buttonName={"create a lab"}
            title={"Create a lab"}>
            <form action="" className="px-3">
              <div className="">
                <Input required size="lg" type="text" label="Lab Name" />
              </div>
              <div className="mt-10">
                <Textarea label="Description" className="" />
              </div>
              <Button className="flex justify-end mt-3" type="submit">
                Create
              </Button>
            </form>
          </Modal>
          <div className="">
            <Dropdown
              logoutUser={logoutUser}
              options={options}
              item={
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
            {labs.map((item, index) => (
              <LabComponent
                name={item.name}
                descrption={item.descrption}
                created_at={item.created_at}
                devices={item.devices}
                key={index}
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
