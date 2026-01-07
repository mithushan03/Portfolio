import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [homeLock, setHomeLock] = useState(true); // keep header always on while in home viewport
  const hideTimer = useRef(null);

  useEffect(() => {
    const enabled = () => window.innerWidth >= 768;

    const updateHomeLock = () => {
      const inHome = window.scrollY < window.innerHeight * 0.6;
      setHomeLock(inHome);
      if (inHome) {
        setVisible(true);
        if (hideTimer.current) {
          clearTimeout(hideTimer.current);
          hideTimer.current = null;
        }
      }
    };

    function onMouseMove(e) {
      if (!enabled() || homeLock) {
        setVisible(true);
        return;
      }
      if (e.clientY <= 80) {
        setVisible(true);
        if (hideTimer.current) {
          clearTimeout(hideTimer.current);
          hideTimer.current = null;
        }
        return;
      }
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setVisible(false), 800);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", updateHomeLock, { passive: true });
    window.addEventListener("resize", updateHomeLock);
    updateHomeLock();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", updateHomeLock);
      window.removeEventListener("resize", updateHomeLock);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [homeLock]);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => {
        if (homeLock) return;
        if (window.innerWidth >= 768) hideTimer.current = setTimeout(() => setVisible(false), 600);
      }}
      className={`bg-[#FFFFFF] fixed top-0 left-0 w-full z-50 shadow transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-[90%] mx-auto py-3 flex items-center justify-between font-inter">
        {/* Logo */}
        <div>
          <h1 className="text-[2.5rem] font-bold text-[#000] hover:text-[#fe5617] ">
            Mithushan ❤️
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" transition-all duration-500 ease-in text-[#fe5617] "
          >
            {isMenuOpen ? <HiX size={29} /> : <HiMenuAlt3 size={29} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[70px] left-0 w-full bg-[#F2EFE5] p-5 lg:p-0 lg:relative lg:block lg:w-auto lg:px-5 lg:py-3 lg:rounded-2xl lg:top-0`}
        >
          <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5 text-[14px] font-semibold">
           <Link to="home" smooth={true} duration={500}>
           <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
              Home
            </li></Link>
             <Link to="about" smooth={true} duration={500}>
                <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
                  About
                </li>
                </Link>
               <Link to="education" smooth={true} duration={500}>
                <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
                  Education
                </li>
               </Link>
             <Link to="experience" smooth={true} duration={500}>
             <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
                Experience
              </li>
             </Link>
               <Link to="certifications" smooth={true} duration={500}>
               <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
                  Certifications
                </li>
               </Link>
           <Link to="project" smooth={true} duration={500}>
           <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
              Project
            </li>
           </Link>
            <Link to="contact" smooth={true} duration={500}>
            <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
              Contact
            </li>
            </Link>
          </ul>
          {/* Social Media Links for Mobile */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:hidden mt-3 flex justify-center gap-5`}
          >
            <a
              href="https://github.com/mithushan03"
              className="  hover:text-[#fe5617] "
            >
              <FaGithub size={29} />
            </a>
            <a
              href="https://www.linkedin.com/in/mithu03/"
              className="hover:text-[#fe5617]"
            >
              <FaLinkedin size={29} />
            </a>
            <a
              href="https://www.instagram.com/mithushan_03/"
              className="hover:text-[#fe5617]"
            >
              <FaInstagram size={29} />
            </a>
          </div>
        </nav>

        {/* Social Media Links */}
        <div className="hidden lg:flex w-[100px] items-center justify-between">
          <a
            href="https://github.com/mithushan03"
            className="hover:text-[#fe5617]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/mithu03/"
            className="hover:text-[#fe5617]"
          >
            <FaLinkedin size={29} />
          </a>
          <a
            href="https://www.instagram.com/mithushan_03/"
            className="hover:text-[#fe5617]"
          >
            <FaInstagram size={29} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
