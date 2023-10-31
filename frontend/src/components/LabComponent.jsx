import { Card, CardBody, Typography, Button, CardFooter } from "@material-tailwind/react";
import { RiComputerLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const LabComponent = ({name, descrption, devices, created_at}) => {
  return (
    <Card className="mt-6 w-full ">
      <CardBody>
        <div className="flex justify-between">
          <Typography variant="h5" color="blue-gray" className="mb-2">
           {name}
          </Typography>
          <span className="text-sm">created {created_at} ago</span>
        </div>
        <p>
          {descrption}
        </p>
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
}

export default LabComponent