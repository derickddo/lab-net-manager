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

// eslint-disable-next-line react/prop-types
const LabComponent = ({ name, descrption, devices, created_at, item, setOpen, setLab, setIsDelete  }) => {
  return (
    <Card className="mt-6 w-full">
      <CardBody className="p-6">
        <div className="w-full mb-8 relative">
          <Dropdown
            item = {item}
            className='-m-7'
            options={["Edit", "Delete"]}
            element={<BsThreeDots className="text-2xl rounded" />}
            cardDropdown={true}
            setOpen={setOpen}
            setLab={setLab}
            setIsDelete={setIsDelete}
          />
        </div>
        <div className="flex w-full justify-between">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <span className="text-sm">{created_at}</span>
        </div>
        <p>{descrption}</p>
        <div className="flex gap-1 mt-3">
          <RiComputerLine className="text-2xl" />
          <span>Devices: {devices}</span>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Visit Lab</Button>
      </CardFooter>
    </Card>
  );
};

export default LabComponent;
