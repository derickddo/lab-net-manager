
import { Input, Button } from "@material-tailwind/react";
import ButtonWithSpinner from "../components/ButtonWithSpinner";
import { useState, useContext } from "react";
import { PropContext } from "../context/propContext";
import PropTypes from 'prop-types'


const AddDeviceForm = ({setOpen}) => {

    const [deviceName, setDeviceName] = useState('')
    const [deviceIpAddress, setdeviceIpAddress] = useState("");
    let {spin} = useContext(PropContext)

  return (
    <form action="" className="px-3">
      <div className="">
        <Input
          className=""
          required
          size="lg"
          type="text"
          label="Device Name"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <Input
          value={deviceIpAddress}
          onChange={(e) => setdeviceIpAddress(e.target.value)}
          label="IP Address"
          className=""
        />
      </div>
      <div className="mt-5 flex gap-5">
        <ButtonWithSpinner color={"green"} spin={spin}>
          Add
        </ButtonWithSpinner>

        <Button
          variant="text"
          color="red"
          onClick={() => setOpen(false)}
          className="mr-1">
          <span>Cancel</span>
        </Button>
      </div>
    </form>
  );
}
AddDeviceForm.propTypes = {
  setOpen: PropTypes.func
}
export default AddDeviceForm