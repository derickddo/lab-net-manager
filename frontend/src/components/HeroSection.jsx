import Navbar from "../components/Navbar"
import Dash from '../assets/Summary.png'

const HeroSection = () => {
  return (
    <div className="hero-section ">
      <Navbar/>
      <div className="h-[100vh] container flex flex-col">
        <div className="mt-[8rem] dash">
          <h1 className="text-white text-6xl text-center">Elevate Your Lab Management </h1>
          <p className="text-white text-center w-[50rem] mx-auto mt-[2rem] text-2xl leading-9">Streamline Computer Tracking and Network Analysis for Effortless ICT Lab Administration</p>
        </div>
        <div className="z-20 mt-[4rem]  shadow-2xl dash">
            <img className="" src={Dash} alt="" />
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1698170642">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
          </svg>
      </div>   
      
    </div>
  )
}

export default HeroSection