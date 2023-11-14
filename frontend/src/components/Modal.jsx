import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import React, {useState } from "react";


// eslint-disable-next-line react/prop-types
export function Modal({ buttonName, title, children, isButton, item }) {
  const [lab, setLab] = useState(null);
  const [open, setOpen] = useState(false);

  const childrenWithProps = React.cloneElement(children, {setOpen, lab})

  const handleOpen = () => {
    setOpen(true);
    setLab(item)
  };
  const handleClose = () => {
    setOpen(false);
    setLab(null);
  };

  return (
    <>
      {isButton ? (
        <Button size="md" onClick={handleOpen} variant="gradient">
          {buttonName}
        </Button>
      ) : (
        <span
          className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-[rgba(2,0,36,0.99)] hover:text-white"
          role="menuitem"
          onClick={handleOpen}>
          {buttonName}
        </span>
      )}

      <Dialog size="sm" open={open} handler={handleClose}>
        <DialogHeader>{title}</DialogHeader>
        <DialogBody>{childrenWithProps}</DialogBody>

        {/* <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button
            type="submit"
            variant="gradient"
            color="green"
            onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter> */}
      </Dialog>
    </>
  );
}
Modal.propTypes = {
  
}
