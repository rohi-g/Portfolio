import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const Footer = () => {

  const navigate = useNavigate()

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
    <div className="flex justify-evenly items-center">
      <p className={`text-2xl cursor-pointer hover:scale-125 transition-all duration-300 ease-in  ${isBackGroundBlack ? "invert" : ""}`} onClick={() => navigate("/about")} >About</p>
      <p className={`text-2xl cursor-pointer hover:scale-125 transition-all duration-300 ease-in  ${isBackGroundBlack ? "invert" : ""}`} onClick={() => navigate("/skills")}>My Skills</p>
    </div>
  )
}

export default Footer
