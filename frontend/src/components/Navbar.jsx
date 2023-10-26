import { Link } from "react-router-dom";
import {Button} from '@material-tailwind/react'
import { useEffect, useState } from "react";
import Logo from '../assets/logo.png'
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [showMobileNavbar, setShowMobileNavbar]  = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 800){
          setIsSticky(true)
        }
        else{
          setIsSticky(false)
        }
        
    })

    return ()=>{
      window.removeEventListener('scroll', ()=>{})
    }
  })


  return (
    <header className={`flex items-center h-[5rem] ${isSticky && 'w-full fixed top-0 bg-[rgba(2,0,36,0.99)] z-50 dash'}`}>
      <div
        className="container mx-auto 
       "
      >
        <nav className="flex justify-between items-center">
          <Link to={'/'}>
            <img className="w-48 lg:w-64" src={Logo} alt="" />
          </Link>
          <ul className={`${showMobileNavbar ? 'block md:block' : 'hidden md:hidden'} rounded-md z-20 shadow-lg p-4 bg-white w-[20rem] flex-col absolute right-[4%] md:rigth[10%] mt-[20rem] lg:flex lg:static lg:flex-row lg:mt-0 lg:bg-inherit gap-[2rem] dash`}>
            <li className="lg:text-white text-black py-3 spy-3 cursor-pointer transition-all hover:bg-[rgba(2,0,36,0.99)] hover:text-white rounded-md pl-3">
              <Link to={'/'}>Home</Link>
            </li>
            <li  className="lg:text-white text-black py-3 cursor-pointer transition-all hover:bg-[rgba(2,0,36,0.99)] hover:text-white rounded-md pl-3"><Link to={'/about'}>About</Link></li>
            <li  className="lg:text-white text-black py-3 transition-all cursor-pointer hover:bg-[rgba(2,0,36,0.99)] hover:text-white rounded-md pl-3"><Link to={'/contact'}>Contact</Link>
            </li>
            
              <Button ripple={true} className="block bg-[rgba(2,0,36,0.99)] lg:hidden mt-3 h-[3rem]" fullWidth>
               <Link to='/login'>Get Started</Link>
             </Button>
            
            
          </ul>
          <Button color="white" ripple={false} className="string hidden lg:block">
            <Link to='/login'>Get Started</Link>
          </Button>
          <HiOutlineMenu onClick={() =>{
            if(showMobileNavbar === false){
              setShowMobileNavbar(true)
            }
            else{
              setShowMobileNavbar(false)
            }
          }} className="text-white text-4xl lg:hidden cursor-pointer"/>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
