import Footer from "../components/Footer"
import LeftSideBar from "../components/LeftSideBar"
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"
import RightSideBar from "../components/RightSideBar"
import { data } from '../data/projectData';

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Projects = () => {

  const particlesInit = (engine) => {
    loadSlim(engine);
  };

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: "#000000",
    },
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      shape: {
        type: "triangle", 
      },
      opacity: {
        value: 0.7,
        random: true,
        animation: { enable: true, speed: 1, minimumValue: 0.1 },
      },
      size: {
        value: 6,
        random: true,
        animation: { enable: true, speed: 4, minimumValue: 3 },
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
        attract: { enable: true, rotateX: 600, rotateY: 600 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.5,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
  };


  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">

      <Particles
              id="tsparticles"
              init={particlesInit}
              options={particlesOptions}
              className="absolute top-0 left-0 w-full h-full"
      />

      <Navbar/>

      <div className="h-[85vh] flex justify-between">
        <LeftSideBar/>

        <div className="flex justify-evenly items-center w-[80vw] overflow-auto mx-10 scrollbar">
          {
            data.map((item,index) => {
              return (
                <div key={index} className="shrink-0 mx-10">
                  <ProjectCard title={item.title} description={item.description} image={item.image} techStack={item.techStack} projectLink={item.projectLink} githubLink={item.githubLink} />
                </div>
              )
            })
          }
        </div>

        <RightSideBar/>

      </div>

      <Footer/>
    </div>
  )
}

export default Projects
