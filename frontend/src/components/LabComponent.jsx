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
import { useEffect } from "react";
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const LabComponent = ({ item, setOpen, setLab, setIsDelete, setVisitLab  }) => {
  useEffect(()=>{
    window.addEventListener('popstate', ()=>{
      setVisitLab(false)
      setLab(null)
    })

    return ()=>{
      window.removeEventListener('popstate',()=>{})
    }
  },[])
  const handleClick = () => {
    setLab(item)
    setVisitLab(true)
  }
  return (
    <Card className="mt-6 w-full">
      <CardBody className="p-6">
        <div className="w-full mb-8 relative">
          <Dropdown
            item={item}
            className="-m-7"
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
            {item.name}
          </Typography>
          <span className="text-sm">{new Date(item.created).toDateString()}</span>
        </div>
        <p>{item.descrption}</p>
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
