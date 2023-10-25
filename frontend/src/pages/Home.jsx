import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
import features from "../components/Features"
import Feature from "../components/Feature"
import HeroSection from '../components/HeroSection'


const Home = () => {
  const [Features] = useState(features)

  useEffect(() =>{
    Aos.init()
  })
  
  return (
    <>
    {/* top section */}
    <HeroSection/>

    {/* features section */}
    <div className="mb-24 dash">
      <div className="container pt-80">
        <h2 className="text-4xl font-bold text-center">Unleash the Power of Lab Management</h2>
        <p className="mt-5 leading-7 text-lg text-gray-700 w-[60rem] mx-auto text-center">Discover a Suite of Features Designed to Revolutionize Your ICT Lab Administration. From Real-time Tracking to Automated Analysis, We have Got You Covered.</p>

        {
          Features.map((item, index) => (
          <Feature 
            key={index} 
            title={item.title} 
            description={item.description} 
            image={item.image}
            direction={item.direction}
            fade_in={item.fade_left}
            />
          
          ))
        }
      
      </div>
      
    </div>

    <div className="bg-black h-80">

    </div>
    </>
    

   
   
  )
}

export default Home