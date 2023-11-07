
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export function Modal({ buttonName, title, children, state, open, setOpen, setLab }) {
  

  const handleOpen = () => {
    setLab(null)
    setOpen(!open);
  }

  return (
    <>
      <Button size="md" onClick={handleOpen} variant="gradient">
        {buttonName}
      </Button>
      <Dialog size="sm" open={open} handler={handleOpen}>
        <DialogHeader>{title}</DialogHeader>
        <DialogBody>{children}</DialogBody>
        {state && (
          <DialogFooter>
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
              onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        )}
      </Dialog>
    </>
  );
}
