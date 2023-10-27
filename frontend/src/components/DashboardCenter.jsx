import { Avatar, Button, Card, CardBody, Typography, CardFooter, Input, Textarea } from "@material-tailwind/react"
import Dropdown from "./Dropdown"
import { useState } from "react"
import {RiComputerLine} from 'react-icons/ri'
import { Modal } from "./Modal"
const DashboardCenter = () => {
  const options = ['login', 'logout']

  const TABLE_HEAD = ["Name", "Job", "Employed", ""];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

  const [, setSelectedOption] = useState(options)

  return (
    <div className="fixed right-0 top-0 w-[85%] h-[100vh] mx-auto">
        <div className="h-[5rem] border-b border-b-gray-300">
          <div className="w-[95%] flex justify-between items-center h-full mx-auto">
            <Modal buttonName={'create a lab'} title={'Create a lab'}>
              <form action="">
                <div className="mb-5">
                  <Typography variant="h6" className="mb-3" >Lab name</Typography>
                  <Input type="text" placeholder="lab 1"/>
                </div>
                <div className="">
                  <Typography variant="h6" className="mb-3" >Description</Typography>
                 <Textarea/>
                </div>
              </form>
            </Modal>
            <div className="">
              
              <Dropdown options={options} item={<div className="flex gap-2 items-center"><Avatar className="w-[2.5rem] h-[2.5rem]" src={'https://i.pravatar.cc/300'}/><p>name@gmail.com</p></div>} setSelectedOption={setSelectedOption}/>
            </div>
          </div>
            
        </div>
        <div className="bg-gray-100 h-full pt-[2rem]">
            <div className="w-[95%] mx-auto">
            <h3 className="text-3xl font-bold">Available Labs.</h3>
            <div className="grid grid-cols-3 gap-5">
              <Card className="mt-6 w-full ">
                <CardBody>
                  <div className="flex justify-between">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                   Lab 1
                  </Typography>
                    <span className="text-sm">created 2 days ago</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, temporibus.</p>
                  <div className="flex gap-1 mt-3">
                    <RiComputerLine className="text-2xl"/>
                    <span>Devices: 20</span>
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>Visit Lab</Button>
                </CardFooter>
              </Card>
                 <Card className="mt-6 w-full ">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    UI/UX Review Check
                  </Typography>
                  <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>Read More</Button>
                </CardFooter>
              </Card>
                 <Card className="mt-6 w-full ">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    UI/UX Review Check
                  </Typography>
                  <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>Read More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="w-[95%] mx-auto mt-20">
          <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {job}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {date}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  Edit
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </Card>
        </div>
        </div>
        
    </div>
  )
}

export default DashboardCenter