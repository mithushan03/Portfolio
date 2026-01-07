import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#fe5617]">Sachchithananthan Mithushan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#fe5617]">I’m an</span>
            <Typewriter
              options={{
                strings: [
                  "Electrical Engineer.",
                  "AI/ML-Oriented Engineer."
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium text-justify">
            A final-year Electrical and Electronics Engineering undergraduate with strong interests in Artificial Intelligence, Machine Learning, and software development. Passionate about integrating EEE fundamentals with intelligent systems, I enjoy applying theory to real-world solutions through projects in automation, IoT, and data-driven applications. As a tutor and content creator, I simplify complex technical concepts for effective learning. Highly motivated to grow, innovate, and contribute meaningfully at the intersection of engineering and intelligent technologies.
          </p>

          {/* Contact Information */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold ">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" size={20} />
              <span>Vavuniya, Sri Lanka.</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" size={20} />
              <span>+94775742738</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <span>smithushan03@gmail.com</span>
            </div>
          </div>
          {/* Button */}
          <div className="flex items-center">
            <div className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold ">
              <a href="https://drive.google.com/file/d/1SYCztJy3UILrmqaxTQnfYxiaEd6BAHSu/view?usp=drive_link">
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-end items-center">
          <img
            className="w-[85%] rounded-[50px]"
            src="/profile.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
