import { Link } from "react-router-dom";
import Logo from "../assets/logo_black.png";
import { Button } from "@material-tailwind/react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import {   useState } from "react";
const Sidebar = () => {
  let navigationData = [
    { title: "Dashboard", icon: <LuLayoutDashboard className="text-xl" /> },
    {
      title: "Create a lab",
      icon: <AiOutlinePlusSquare className="text-xl" />,
    },
    { title: "Settings", icon: <IoSettingsOutline className="text-xl" /> },
    { title: "Nav 1" },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSidebarItemClick = (index) => {
    setActiveItem(index);
  };
  const [activeItem, setActiveItem] = useState(null);
  
  return (
    <div className="h-[100vh] w-[15%] fixed left-0 ">
      <div className="h-[5rem] flex items-center px-[2rem] border-b border-b-gray-300">
        <Link to={"/"}>
          <img className="w-[18rem]" src={Logo} alt="" />
        </Link>
      </div>
      <div className="px-[1rem] flex flex-col justify-between pt-10 border-r border-r-gray-300 h-[92vh]">
        <ul className=" flex flex-col gap-5 ">
          {navigationData.map((item, index) => (
            <li
              onClick={() => handleSidebarItemClick(index)}
              className={`h-[3rem] text-gray-700 cursor-pointer rounded-md hover:bg-[rgba(2,0,36,0.99)] hover:text-white flex items-center pl-5 gap-5 ${
                activeItem === index ? "bg-[rgba(2,0,36,0.99)] text-white" : ""
              }`}
              key={index}>
              {item.icon}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
        <div className="bg-[rgba(2,0,36,0.1)] border border-[rgba(2,0,36,0.99)] p-5 mb-5 rounded-md">
          <BsFillRocketTakeoffFill className="text-2xl mb-3" />
          <span className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            modi{" "}
          </span>
          <Button className="mt-3" fullWidth>
            Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
