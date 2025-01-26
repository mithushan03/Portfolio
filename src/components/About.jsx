import {
  FaHtml5,
  FaJsSquare,
  FaGithub,
  FaGitAlt,
  FaPython,
  FaCode,
  FaMicrochip,
  FaNetworkWired,
  FaCog,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNetlify,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";

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
          I’m <span className="font-bold text-[#fe5617]">Mithushan Sachchithananthan </span>,
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
              <FaPython size={40} className="text-[#3776AB]" />
              <span className="font-bold">Python</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaCode size={40} className="text-[#0076A8]" />
              <span className="font-bold">MATLAB</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiTailwindcss size={40} className="text-[#38bdf8]" />
              <span className="font-bold">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaMicrochip size={40} className="text-[#00979D]" />
                <span className="font-bold">Arduino</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaNetworkWired size={40} className="text-[#1BA0D7]" />
                <span className="font-bold">Cisco Packet Tracer</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaCog size={40} className="text-[#FF3A3A]" />
                <span className="font-bold">SolidWorks</span>
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
