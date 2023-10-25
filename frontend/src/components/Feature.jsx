

// eslint-disable-next-line react/prop-types
const Feature = ({title, image, description, direction, fade_in}) => {
  return (
    <div className="mt-[10rem]" data-aos={fade_in ? "fade-right": "fade-left"}>
          <div className={ direction ? "flex flex-row-reverse items-center gap-10": "flex items-center gap-10"}>
            <div className="">
              <h3 className="text-3xl font-bold">{title}</h3>
              <p className="mt-5 leading-7 text-lg text-gray-700">{description}</p>
            </div>
            <div className="bg-blue-gray-50 h-full w-full p-[3rem] rounded-md">
              <img src={image} alt="" />
            </div>
          </div>
      </div>
  )
}

export default Feature