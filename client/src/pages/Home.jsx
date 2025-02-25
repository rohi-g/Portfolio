import { useEffect, useRef, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Footer from "../components/Footer";
import LeftSideBar from "../components/LeftSideBar";
import Navbar from "../components/Navbar";
import RightSideBar from "../components/RightSideBar";
import Typed from "typed.js";

const Home = () => {
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ["Developer", "Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "#ffffff" },
    fpsLimit: 60,
    particles: {
      number: { value: 120, density: { enable: true, value_area: 800 } },
      color: { value: ["#5E60CE", "#48BFE3", "#4EA8DE"] },
      shape: { type: "triangle" },
      opacity: { value: 0.7, random: true },
      size: { value: 5, random: true },
      move: { enable: true, speed: 2, direction: "none", outModes: "out" },
      links: {
        enable: true,
        distance: 150,
        color: "#888888",
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
    <div className="relative w-[100vw] h-[100vh] overflow-hidden home">
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute top-0 left-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      <div className="relative z-10">
      <Navbar />

        <div className="relative z-10 w-[100vw] h-[80vh] my-[3vh] flex justify-between items-center">
          <LeftSideBar />

          <div className="text-center">
            <h1 className="text-4xl font-bold italic">Rohini G</h1>
            <p className="my-2 italic font-medium text-xl">
              I&apos;m{" "}
              <span
                ref={ref}
                className="text-violet-800 underline underline-offset-4"
              ></span>
            </p>
          </div>

          <RightSideBar />
        </div>

        <Footer/>
      </div>
    </div>
  );
};

export default Home;
