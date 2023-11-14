import { Input, Textarea, Button } from "@material-tailwind/react";
import { useState, useContext } from "react";
import swal from "sweetalert2";
import ButtonWithSpinner from "../components/ButtonWithSpinner";
import useFetch from "../utils/useFetch";
import PropTypes from "prop-types";
import { PropContext } from "../context/propContext";
import { useNavigate } from "react-router-dom";

const LabForm = ({ setOpen, lab }) => {
  let { setLabs, spin, setLab, setSpin } = useContext(PropContext);
  const [labName, setLabName] = useState(lab ? lab.name : "");
  const [description, setDescription] = useState(lab ? lab.description : "");
  const navigate = useNavigate()
  const api = useFetch();

  const handleSubmit = async (e) => {
    setSpin(true);
    e.preventDefault();
    let method = lab ? "PUT" : "POST";
    let url = lab ? `api/labs/${lab.id}` : "api/labs/";
    const { response, data } = await api(
      url,
      method,
      JSON.stringify({ name: labName, description: description })
    );
    if (response.status === 201 || response.status === 200) {
      if (!lab) {
        setLabs((previous) => [...previous, data]);
        navigate(`/dashboard/lab/${data.id}`)
        
      } else {
        setLabs((previous) =>
          previous.map((lab) => (lab.id === data.id ? data : lab))
        );
      }
      swal.fire({
        title: ` ${
          lab ? `${lab.name} successfully updated` : " Lab successfully created"
        }`,
        icon: "success",
        toast: true,
        timer: 3000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
      setLab(null);
      setOpen(false)
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
    setSpin(false);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} action="" className="px-3">
      <div className="">
        <Input
          className=""
          required
          size="lg"
          type="text"
          label="Lab Name"
          value={labName}
          onChange={(e) => setLabName(e.target.value)}
        />
      </div>
      <div className="mt-10">
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          className=""
        />
      </div>
      <div className="mt-5 flex gap-2">
        <ButtonWithSpinner color={"green"} spin={spin}>
          {lab ? "Update" : "Create"}
        </ButtonWithSpinner>

        <Button
          variant="text"
          color="red"
          onClick={() => {
            setOpen(false);
            setLab(null);
          }}
          className="mr-1">
          <span>Cancel</span>
        </Button>
      </div>
    </form>
  );
};

LabForm.propTypes = {
  spin: PropTypes.bool,
  setSpin: PropTypes.func,
  setLabs: PropTypes.func,
  lab: PropTypes.object,
  setOpen: PropTypes.func,
  setLab: PropTypes.func,
};

export default LabForm;
