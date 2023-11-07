import { Link } from "react-router-dom"

import {BsInstagram, BsTwitter, BsFacebook, BsLinkedin} from 'react-icons/bs'
import Logo from '../assets/logo.png'
export const Footer = () => {
  return (
    <div className="bg-black h-[20rem] flex items-center ">
        <div className="container">
            <div className="grid grid-cols-2 gap-10">
                <div className="">
                    <Link to={'/'} ><img className="w-[18rem] mb-[1rem]" src={Logo} alt="" /></Link>
                     <span className="text-gray-500 ">Copyright © 2023</span>
                </div>
                
                <ul className='flex lg:flex-row flex-col justify-between'>
                    <li className="flex flex-col gap-5">
                        <Link className="text-gray-500">Privacy Policy</Link>
                        
                        <Link className="text-gray-500">Terms of Service</Link>
                    </li>
                    <li className="grid mt-10 lg:mt-0 grid-cols-3 gap-5">
                        <Link><BsInstagram className="text-white text-2xl"/></Link>
                        <Link><BsTwitter className="text-white text-2xl"/></Link>
                        <Link><BsFacebook className="text-white text-2xl"/></Link>
                        <Link><BsLinkedin className="text-white text-2xl"/></Link>
                    </li>
                </ul>
               
            </div>
        </div>
    </div>
  )
}

// 
