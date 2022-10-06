import Socials from "./components/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAnglesDown, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from 'react-router-dom';
function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="w-full flex flex-col min-h-screen">
      <Particles
        className="absolute h-full w-full"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#fffcfa",
            },
          },
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 6,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#dbccc3",
            },
            links: {
              color: "#dbccc3",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 10 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="w-full h-screen p-3 flex flex-col z-10">
        <div className="m-auto flex flex-col">
          <h1 className="text-9xl text-center fontmont text-[#5d2d24] select-none">Kerry Trusch</h1>
          <div className="flex mx-auto pt-2">
            <Socials
              name="LinkedIn"
              location="https://www.linkedin.com/in/kerrytrusch/"
              logo={faLinkedin}
            />
            <Socials
              name="GitHub"
              location="https://github.com/KerryTrusch"
              logo={faGithub}
            />
            <Socials
              name="Email"
              location="mailto:kerry.trusch@gmail.com?subject=subject text"
              logo={faEnvelope}
            />
          </div>
        </div>
        <div className="mx-auto z-10">
          <FontAwesomeIcon
            className="text-blue-400 text-5xl animate-bounce"
            icon={faAnglesDown}
          />
        </div>
      </div>
      <div className="h-screen bg-blue-300 w-full flex flex-col">
        <div className="m-auto flex flex-col">
          <div className="h-full m-auto text-8xl text-[#5d2d24] fontmont max-w-[33%] leading-3">
            <h1 className="mb-20 text-center">
              About me
            </h1>
            <span className="text-2xl text-left leading-3">
              Hi! I'm a current Junior studying at the Georgia Institute of Technology. Recently, I have been interested in web development and have been 
              working on several projects in my free time to experiment with the current frameworks that exist.
            <br />
            <br />
            </span>
            <span className="text-2xl text-left leading-3">
              I am searching for an internship to participate in over this following summer in order to learn more about development in real-world environments. If you have any questions, feel free to shoot me an email using the link above!
            </span>
          </div>
          <Link className="mx-auto mt-10 text-white focus:ring text-2xl flex" to="/portfolio" >
              <span className="bg-orange-400 px-4 py-2 rounded-l">
                Portfolio
              </span>
              <span className="bg-orange-500 p-2 rounded-r">
                <FontAwesomeIcon icon={faAnglesRight} />
              </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
