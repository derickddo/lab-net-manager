import {
  Card,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { RiComputerLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const LabComponent = ({ item, setLab}) => {
  const handleClick = () => {
    setLab(item);
  };
  return (
    <Card className="mt-6 w-full">
      <CardBody className="p-6">
        <div className="w-full mb-8 relative">
          <Dropdown
            item={item}
            options={["Edit", "Delete"]}
            cardDropdown={true}>
            <div className="w-full float-right">
              <BsThreeDots className="float-right text-black cursor-pointer h-[2rem] w-[2rem] p-2 hover:bg-gray-300 rounded-full" />
            </div>
          </Dropdown>
        </div>
        <div className="flex w-full justify-between">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {item.name}
          </Typography>
          <span className="text-sm">
            {new Date(item.created).toDateString()}
          </span>
        </div>
        <p>{item.description}</p>
        <div className="flex gap-1 mt-3">
          <RiComputerLine className="text-2xl" />
          <span>Devices: {item.devices}</span>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Link onClick={handleClick} to={`/dashboard/lab/${item.id}`}>
          <Button>Visit Lab</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
LabComponent.propTypes = {
  item: PropTypes.object,
  setOpen: PropTypes.func,
  setLab: PropTypes.func,
  setIsDelete: PropTypes.func,
  setVisitLab: PropTypes.func,
};
export default LabComponent;
