import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { Button } from "@material-tailwind/react";
import PC from '../assets/pc.svg'

const LabView = () => {
  let [lab, setLab] = useState(null);
  const [devices, setDevices] = useState([]);
  const api = useFetch();
  let { id } = useParams();
  useEffect(() => {
    const getLab = async () => {
      let { response, data } = await api(`api/labs/${id}`);
      if (response.status === 200) {
        setLab(data);
      }
    };
    getLab();
  }, []);

  return (
    <div className="w-[95%] mx-auto mt-[2.5rem] grid grid-cols-6 gap-10">
      <div className="col-span-5">
        <div className="border border-gray-300 relative">
          <Dropdown options={["Edit", "Delete"]} item={lab} cardDropdown={true}>
            <div className="w-full float-right p-3">
              <BsThreeDots className="float-right text-black cursor-pointer h-[2rem] w-[2rem] p-2 hover:bg-gray-300 rounded-full" />
            </div>
          </Dropdown>

          <div className="flex w-full justify-between px-5 pb-5">
            <div className="">
              <h1 className="text-3xl font-bold ">{lab?.name}</h1>
              <p className="mt-[1rem] ">{lab?.description}</p>
            </div>
            <div className="">
              <span>{new Date(lab?.created).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="mt-[2rem] border p-5 border-gray-300">
          <h1 className="text-2xl font-bold">Devices availble</h1>
          {devices?.length != 0 ? (
            <div className="mt-[1rem] grid grid-cols-3 gap-5">
              <div className="bg-[rgba(2,0,36,0.99)] p-5 rounded-sm">
                <h2 className="text-white">Device Name</h2>
                <p className="text-white">IP:</p>
                <p className="text-white">MAC:</p>
              </div>
              <div className="bg-[rgba(2,0,36,0.99)] p-5 rounded-sm">
                <h2 className="text-white">Device Name</h2>
                <p className="text-white">IP:</p>
                <p className="text-white">MAC:</p>
              </div>
              <div className="bg-[rgba(2,0,36,0.99)] p-5 rounded-sm">
                <h2 className="text-white">Device Name</h2>
                <p className="text-white">IP:</p>
                <p className="text-white">MAC:</p>
              </div>
              <div className="bg-[rgba(2,0,36,0.99)] p-5 rounded-sm">
                <h2 className="text-white">Device Name</h2>
                <p className="text-white">IP:</p>
                <p className="text-white">MAC:</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center flex-col h-[35rem] items-center">
              <img className="w-[10rem]" src={PC} alt="" />
              <p>No devices</p>
              <div className="mt-[1rem] flex gap-5">
                <Button>+ Add device</Button>
                <Button>Scan for devices</Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border border-gray-300 min-h-[80vh] p-3">
        <h1>Hello</h1>
      </div>
    </div>
  );
};
LabView.propTypes = {
  lab: PropTypes.object,
};
export default LabView;
