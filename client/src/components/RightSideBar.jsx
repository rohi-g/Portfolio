import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const RightSideBar = () => {

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
    <div className="w-[5vw] h-full flex flex-col justify-evenly items-center">
      <p className={`text-2xl rotate-90 cursor-pointer hover:scale-125 transition-all duration-300 ease-in ${isBackGroundBlack ? "invert" : ""}`} onClick={() => navigate("/feats")}>Feats</p>
    </div>
  )
}

export default RightSideBar
