import { Button, Input, Typography, Checkbox } from "@material-tailwind/react"
import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'

import {FaGoogle} from 'react-icons/fa'
import { useState } from "react"

const Login = () => {

  const [signUp, setSignUp]  = useState(false)

  return (
    <div className="bg-[rgba(2,0,36,0.99)] ">
        <div className="container lg:flex lg:justify-center lg:items-center  h-[100vh] overflow-auto">
            <div className="lg:w-[30rem] sm:w-full ">
            <Link to={'/'} className="lg:flex lg:justify-center hidden"><img className="lg:w-[18rem] w-[12rem] mb-6" src={Logo} alt="" /></Link>
            <form action="" className="bg-white p-6 mt-20 lg:mt-0 rounded-md">
                <div className="mb-8">
                    <Typography variant="h4" color="blue-gray">
                        { 
                            signUp ? 'Sign Up' : 'Sign In'
                        }
                        
                    </Typography>
                </div>
                {
                    signUp && 
                    <div className="mb-5">
                        <Typography variant="h6" color="blue-gray" className="mb-3">Full Name</Typography>
                        <Input
                            size="lg"
                            placeholder="John Doe"
                            className=" !border-t-blue-gray-200 focus:!border-t-[rgba(2,0,36,0.99)]"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }} 
                        />
                    </div>
                }
                <div className="mb-5">
                    <Typography variant="h6" color="blue-gray" className="mb-3">Email</Typography>
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-[rgba(2,0,36,0.99)]"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }} 
                    />
                </div>
                <div className="">
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                        Password
                    </Typography>
                    <Input
                        type="password"
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <div className="mt-5">
                    <Checkbox
                    label={
                        <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center font-normal"
                        >
                        I agree the
                        <a
                            href="#"
                            className="font-medium transition-colors hover:text-gray-900"
                        >
                            &nbsp;Terms and Conditions
                        </a>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                    />
                </div>
                <div className="mt-5">
                    <Button fullWidth className="bg-[rgba(2,0,36,0.99)] h-[3rem]">
                        {
                            signUp ? 'sign up': ' sign in'
                        }
                       
                    </Button>
                    <Button fullWidth className="bg-blue-700  h-[3rem] mt-3 flex items-center justify-center gap-[0.5rem]">
                        <FaGoogle className="text-lg"/> 
                        <span>continue with google</span>
                    </Button>
                </div>
                <div className="">
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        {
                            signUp ? 'Already have an account?' : "Don't have an account?"
                        }
                        
                        { 
                            signUp ? 
                            <a onClick={() => {setSignUp(false)}} href="#" className="font-medium text-gray-900 ml-2">
                            Sign In
                            </a> 
                            :
                            <a onClick={() => {setSignUp(true)}} href="#" className="font-medium text-gray-900 ml-2">
                                Sign Up
                            </a>
                        }
                       
                    </Typography>
                </div>
            </form>
            <ul className="flex justify-center mt-5 mb-3 gap-3 mb">
                <li className="text-gray-400 border-r border-r-gray-400 pr-3">Privacy Policy</li>
                <li className="text-gray-400">Terms of Service</li>
            </ul>
            <span className="text-gray-400 text-center flex justify-center mb-10">Copyright © 2023 Your Lab Management</span>
        </div>
        </div>
        
    </div>
  )
}

export default Login