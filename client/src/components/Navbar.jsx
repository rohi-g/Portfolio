import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const [isBackGroundBlack , setIsBackGroundBlack] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const darkPaths = ["/projects","/skills"]

    if(darkPaths.includes(location.pathname))
    {
      setIsBackGroundBlack(true)
    }

  },[])

  return (
    <div className="flex flex-row justify-between items-center my-5 px-10 contrast-200">
      <Link to={"/"} className={`text-3xl font-bold italic cursor-pointer ${isBackGroundBlack ? "invert" : ""}`}>GR</Link>
      <Link to={"/"} className={`border border-black border-solid rounded-full p-3 text-xl font-bold cursor-pointer 
        hover:shadow-2xl hover:shadow-black hover:scale-110 transition-all duration-300 ease-in ${isBackGroundBlack ? "invert" : ""}`}>
          <IoIosArrowBack/>
      </Link>
      <p className={`text-xl cursor-pointer hover:scale-125 transition-all duration-300 ease-in ${isBackGroundBlack ? "invert" : ""}`}>Say hi...</p>
    </div>
  )
}

export default Navbar
