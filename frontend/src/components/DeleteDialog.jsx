import { CiCircleAlert } from "react-icons/ci";
import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import ButtonWithSpinner from "./ButtonWithSpinner";
import useFetch from "../utils/useFetch";
import swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const DeleteDialog = ({ name, spin, setOpen, lab, setSpin, setLab }) => {
  const api = useFetch();

  const handleSubmit = async (e) => {
    setSpin(true);
    e.preventDefault();
    let method = "DELETE";
    let url = `api/labs/${lab.id}`;
    const {response, data} = await api(url, method);
    console.log(data, response)
    if(response.status === 204) {
      setLab(null);
      setOpen(false);
      swal.fire({
        title: `${lab.name} successfully Deleted`,
        icon: "success",
        toast: true,
        timer: 3000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      swal.fire({
        title: "an error occurred",
        icon: "error",
        toast: true,
        timer: 3000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-3">
      <div className="">
        <CiCircleAlert className="text-8xl text-gray-300" />
      </div>
      <p>Are you sure you want to delete {name}</p>
      <div className="mt-5 flex gap-5">
        <ButtonWithSpinner color={"green"} spin={spin}>
          Delete
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
};
DeleteDialog.propTypes = {
  name: PropTypes.string,
  spin: PropTypes.bool,
  setSpin: PropTypes.func,
  setLab: PropTypes.func,
  lab: PropTypes.object,
  setOpen: PropTypes.func,
};
export default DeleteDialog;
