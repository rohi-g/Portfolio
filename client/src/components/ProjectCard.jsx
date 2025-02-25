/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseOut = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFlipped(false);
    }
  };

  return (
    <div 
      className="scene cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseOut={handleMouseOut}
    >
      <div className={`${isFlipped ? "card is-flipped" : "card"}`}>
        
        <div className="card_face front border border-white text-white mx-3 rounded-tl-[60px] rounded-br-[60px]">
          <h1 className="text-2xl font-bold mb-10">{props.title}</h1>
          <p className="px-5">{props.description}</p>
        </div>

       
        <div className="card_face back border border-white text-white mx-3 rounded-tl-[60px] rounded-br-[60px]">
          <img src={props.image} alt="" className="w-[200px] h-[150px] my-5"/>
          <p className="my-5">{props.techStack}</p>

          <div className="w-full flex justify-around items-center px-5">
            <Link 
              to={props.projectLink} 
              target="_blank" 
              className="border border-white bg-white text-black px-10 py-2 rounded-tl-lg rounded-br-lg"
            >
              Visit
            </Link>

            <Link to={props.githubLink} target="_blank">
              <FaGithub size={20} className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
