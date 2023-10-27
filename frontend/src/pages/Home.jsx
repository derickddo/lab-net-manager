import 'aos/dist/aos.css'
import features from "../components/Features"
import Feature from "../components/Feature"
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import { Footer } from '../components/Footer'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'


const Home = () => {
  const [Features] = useState(features)
  let {name} = useContext(AuthContext)
  useEffect(() =>{
    console.log(name)
  })
  return (
    <>
    {/* top section */}
    <HeroSection/>

    {/* features section */}
    <div className="mb-24">
      <div className="container">
        <h2 className="text-3xl mt-40 lg:mt-72 lg:text-4xl font-bold text-center">Unleash the Power of Lab Management</h2>
        <p className="mt-5 leading-7 lg:text-lg text-gray-700  w-full lg:w-[60rem] mx-auto text-center">Discover a Suite of Features Designed to Revolutionize Your ICT Lab Administration. From Real-time Tracking to Automated Analysis, We have Got You Covered.</p>

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

        <About/>
        <Footer/>
    </>
    

   
   
  )
}

export default Home