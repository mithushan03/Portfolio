import {
  FaHtml5,
  FaJsSquare,
  FaGithub,
  FaGitAlt,
  FaPython,
  FaMicrochip,
  FaNetworkWired,
  FaCog,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNetlify,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const About = () => {
  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          I’m <span className="font-bold text-[#fe5617]">Sachchithananthan Mithushan</span>,
          a passionate Electrical and Electronics Engineer. As an
          Engineer, I’ve successfully completed My First Internship at 
          <span className="font-bold text-[#fe5617]"> Sri Lanka Telecom</span>, and Currently, I’m a 3rd year B.Sc(Hons) Electrical and Electronics Engineering student at
          South Eastern University Of Sri Lanka.
        </p>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#fe5617] text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Skill Icons */}
            <div className="flex flex-col items-center space-y-2">
              <img src="/python.png"
                   alt="Python"
                   className="w-10 h-10" />
              <span className="font-bold">Python</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img src="/matlab.png"
                   alt="Matlab"
                   className="w-10 h-10" />
              <span className="font-bold">Matlab</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img src="/ltspice.png"
                   alt="LT Spice"
                   className="w-10 h-10" />
              <span className="font-bold">LT Spice</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img src="/arduino.png"
                   alt="arduino"
                   className="w-10 h-10" />
              <span className="font-bold">Arduino IDE</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img src="/cisco.png"
                   alt="Cisco"
                   className="w-10 h-10" />
              <span className="font-bold">Cisco Packet Tracer</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img src="/solidworks.png"
                   alt="Solidworks"
                   className="w-10 h-10" />
              <span className="font-bold">Solidworks</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold">HTML5</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJsSquare size={40} className="text-[#f7df1e]" />
              <span className="font-bold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaGitAlt size={40} className="text-[#f05032]" />
              <span className="font-bold">Git</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaGithub size={40} className="text-black" />
              <span className="font-bold">GitHub</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <DiVisualstudio size={40} className="text-[#0078d7]" />
              <span className="font-bold">VS Code</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiNetlify size={40} className="text-[#00d1b2]" />
              <span className="font-bold">Netlify</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
