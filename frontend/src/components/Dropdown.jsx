import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { PropContext } from "../context/propContext";
import AuthContext from "../context/AuthContext";
import { Modal } from "./Modal";
import DeleteDialog from "./DeleteDialog";
import LabForm from "../forms/LabForm";

// eslint-disable-next-line react/prop-types
const Dropdown = ({ options, cardDropdown, children, item, modify }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  let {setLab} = useContext(PropContext);
  const { logoutUser } = useContext(AuthContext);

  const handleOptionClick = (option) => {
    setLab(item);
    if (option === "Logout") {
      logoutUser();
    } 
    
    setIsOpen(false);
  };

  return (
    <div
      className={`${
        !cardDropdown && "w-full relative inline-block text-left "
      }`}>
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className={`${
            !cardDropdown
              ? "inline-flex w-full rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-800"
              : "float-right"
          }`}
          id="options-menu"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="options-menu">
          {children}
        </button>
      </div>

      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-3 ${
            !cardDropdown ? "w-56" : "w-32 mt-[3.3rem]"
          } rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu">
            {!modify ? (
              options.map((option) => (
                <div
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-[rgba(2,0,36,0.99)] hover:text-white"
                  role="menuitem">
                  {option}
                </div>
              ))
            ) : (
              <div>
                <Modal item={item} state={false} title={"Edit"} buttonName={options[0]}>
                  <LabForm />
                </Modal>
                <Modal item={item} state={false}  buttonName={options[1]}>
                  <DeleteDialog/>
                </Modal>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  options: PropTypes.array,
  item: PropTypes.object,
};
