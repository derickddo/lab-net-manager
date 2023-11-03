import { Modal } from "./Modal";
import DeleteDialog from "./DeleteDialog";
import LabForm from "../forms/LabForm";
import { Input } from "@material-tailwind/react";
import { IoNotificationsOutline } from "react-icons/io5";
import Dropdown from "./Dropdown";
import {Avatar} from '@material-tailwind/react'
import PropTypes from "prop-types";

const TopBar = ({
  setLabs,
  spin,
  isDelete,
  setLab,
  setOpen,
  lab,
  setSpin,
  logoutUser,
  user,
  open
}) => {
  return (
    
      <div className="h-[5rem] sticky bg-white top-0 z-10 border-b border-b-gray-300">
        <div className="w-[95%] flex justify-between  items-center h-full mx-auto">
          <div className="flex gap-5 items-center">
            <Modal
              open={open}
              setOpen={setOpen}
              state={false}
              buttonName={"create a lab"}
              setLab={setLab}
              title={`${
                !isDelete ? (!lab ? "Create a lab" : "Update Lab") : ""
              }`}>
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
              options={["Profile", "Logout"]}
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
   
  );
};

TopBar.propTypes = {
  lab: PropTypes.object,
  open: PropTypes.bool,
  spin: PropTypes.bool,
  setSpin: PropTypes.func,
  user: PropTypes.object,
  setLabs: PropTypes.func,
  setLab: PropTypes.func,
  setOpen: PropTypes.func,
  isDelete: PropTypes.bool,
  logoutUser: PropTypes.func

};

export default TopBar;
