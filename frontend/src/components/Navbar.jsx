import { Link } from "react-router-dom";
import {Button} from '@material-tailwind/react'

const Navbar = () => {
  return (
    <header className="flex items-center h-[5rem] ">
      <div
        className="container mx-auto 
       "
      >
        <nav className="flex justify-between items-center">
          <h1  className="text-white text-2xl font-bold">LabNet Manger</h1>
          <ul className="flex gap-3">
            <li className="text-white">
              <Link to={'/'}>Home</Link>
            </li>
            <li  className="text-white"><Link to={'/about'}>About</Link></li>
            <li  className="text-white"><Link to={'/contact'}>Contact</Link></li>
            
          </ul>
          <Button color="white">Get Started</Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
