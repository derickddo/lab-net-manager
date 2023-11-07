import Navbar from "../components/Navbar"
import Dash from '../assets/Summary.png'

const HeroSection = () => {
  return (
    <div className="hero-section mb-6">
      <Navbar/>
      <div className="container h-[55vh] lg:h-[90vh] flex flex-col">
        <div className="mt-[2rem] lg:mt-[6rem] fade-left">
          <h1 className="text-white text-2xl md:text-4xl  lg:text-5xl text-center">Elevate Your Lab Management </h1>
          <p className="text-white text-center sm:w-full lg:w-[50rem] mx-auto mt-[1rem] lg:text-xl leading-8">Streamline Computer Tracking and Network Analysis for Effortless ICT Lab Administration</p>
        </div>
        <div className="z-10 mt-[2rem] lg:mt-[4rem]  shadow-2xl dash">
            <img className="" src={Dash} alt="" />
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1698170642 hidden lg:block ">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
          </svg>
      </div>   
      
    </div>
  )
}

export default HeroSection