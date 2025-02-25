import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const LeftSideBar = () => {

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
    <div className="w-[5vw] h-full flex flex-col justify-around items-center">
      <a href={"./resume_rohini.pdf"} target="_blank" className={`text-2xl -rotate-90 cursor-pointer hover:scale-125 transition-all duration-300 ease-in 
        ${isBackGroundBlack ? "invert" : ""}`}>Resume</a>
      <Link to={"/projects"} className={`text-2xl -rotate-90 cursor-pointer hover:scale-125 transition-all duration-300 ease-in 
        ${isBackGroundBlack ? "invert" : ""}`}>Projects</Link>

      <div className={isBackGroundBlack ? "invert" : ""}>
        <Link to="http://linkedin.com/in/rohini-gunasekaran" target="_blank">
          <FaLinkedin size={25} className="my-3 cursor-pointer hover:scale-125 transition-all duration-300 ease-in"/>
        </Link>

        <Link to="https://github.com/rohi-g" target="_blank">
          <FaGithub size={25} className="my-3 cursor-pointer hover:scale-125 transition-all duration-300 ease-in"/>
        </Link>

        <Link to="" target="_blank">
          <FaTwitter size={25} className="my-3 cursor-pointer hover:scale-125 transition-all duration-300 ease-in"/>
        </Link>

        <Link to="" target="_blank">
          <FaFacebook size={25} className="my-3 cursor-pointer hover:scale-125 transition-all duration-300 ease-in"/>
        </Link>

        <Link to="" target="_blank">
          <FaYoutube size={25} className="my-3 cursor-pointer hover:scale-125 transition-all duration-300 ease-in"/>
        </Link>
      </div>
    </div>
  )
}

export default LeftSideBar
