import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { Spinner } from "@material-tailwind/react";
import PC from "../assets/pc.svg";
import { PropContext } from "../context/propContext";
import { Modal } from "./Modal";
import AddDeviceForm from "../forms/AddDeviceForm";


const LabView = () => {
  let {lab, setLab} = useContext(PropContext);
  const [devices, ] = useState([])
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
  }, [id, setLab]);

  return (
    <div className="w-[95%] mx-auto mt-[2.5rem]  gap-10">
      <div className="">
        <div className="border border-gray-300 relative">
          <Dropdown
            modify={true}
            options={["Edit", "Delete"]}
            item={lab}
            cardDropdown={true}>
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
              <img className="w-[20rem]" src={PC} alt="" />
              <p className="text-center mt-3">No devices</p>
              <div className="mt-[2rem] flex gap-5">
                <Modal
                  state={false}
                  isButton={true}
                  buttonName={"+ Add device"}
                  title={"Add a device"}>
                  <AddDeviceForm />
                </Modal>

                <Modal isButton={true} buttonName={"scan for devices"}>
                  <div className="flex justify-center items-center">
                    <Spinner />
                  </div>
                </Modal>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
LabView.propTypes = {
  lab: PropTypes.object,
};
export default LabView;
