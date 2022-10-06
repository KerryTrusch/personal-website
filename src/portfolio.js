import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "./components/card";
export default function Portfolio() {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#fffcfa]">
      <div className="flex flex-col max-w-[60%] m-auto">
        <div className="flex">
          <div className="basis-1/4 flex flex-col">
            <h1 className="text-6xl text-black fontmont mb-8">
              GitHub Portfolio
            </h1>
            <span className="text-3xl text-black fontmont mb-6">
              Pieces from my time in web development
            </span>
            <span className="text-2xl text-black fontmont mb-6">
              This page will be periodically updated as I complete more projects
            </span>
            <div className="flex">
              <Link to="/">
                <FontAwesomeIcon className="text-3xl mr-5" icon={faHome} />
              </Link>
              <a
                href={`https://www.linkedin.com/in/KerryTrusch`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="text-3xl mr-5" icon={faGithub} />
              </a>
              <a
                href={`https://www.linkedin.com/in/KerryTrusch`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="basis-3/4 grid grid-cols-2 gap-[10px] justify-items-center items-center place-content-center">
            <Card title="Group messaging app" body="Talk to your friends with the ability to create private servers with individual channels. Backend hosted locally using MySQL." tags={{tagOne: "React", tagTwo: "Full-stack", tagThree: "Node.js"}} imagesrc="/reactchat.png"/>
            <Card title="TensorFlow Webcam Labeler" body="Pick specific tags and hold them up to the camera to see TensorFlow's live capabilities. Insert your phone number to get text notifications if you want to use it as a security camera!" tags={{tagOne: "HTML/CSS", tagTwo: "Machine Vision", tagThree: "TensorFlow"}} imagesrc="/webcam.png"/>
            <Card title="Live Flight Tracker" body="Track planes currently in transit and pan around in 3D space to see the height differences. Using Maptalks map framework and OpenSkies plane API." tags={{tagOne: "React.js", tagTwo: "API", tagThree: "Data Analytics"}} imagesrc="/planefinder.png" />
            <Card title="Whiteboard" body="More easily draw data structures using this whiteboard app. Created using React and HTML's canvas. " tags={{tagOne: "React.js", tagTwo: "Data Structures", tagThree: "JavaScript"}} imagesrc="/whiteboard.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
