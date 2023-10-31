import { useState } from 'react';
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const Dropdown = ({ options, item, logoutUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    logoutUser()
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex w-full rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-800"
          id="options-menu"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="options-menu"
        >
          {item}
          
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-[rgba(2,0,36,0.99)] hover:text-white"
                role="menuitem"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
    options: PropTypes.array,
    item: PropTypes.node
    
}
