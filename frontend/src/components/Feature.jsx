

// eslint-disable-next-line react/prop-types
const Feature = ({title, image, description, direction, fade_in}) => {
  return (
    <div className="lg:mt-[10rem] mt-[5rem]" data-aos={fade_in ? "fade-right": "fade-left"}>
          <div className={` ${direction && 'lg:flex-row-reverse '} lg:flex-row flex-col md:flex-col flex  items-center lg:gap-20 gap-10`}>
            <div className="">
              <h3 className="lg:text-3xl text-xl font-bold">{title}</h3>
              <p className="lg:mt-5 mt-3 leading-7  lg:text-lg text-gray-700">{description}</p>
            </div>
            <div className="bg-gray-100 h-full w-full p-[2rem] lg:p-[3rem] rounded-md">
              <img src={image} alt="" />
            </div>
          </div>
      </div>
  )
}

export default Feature