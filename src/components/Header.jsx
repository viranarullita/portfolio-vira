import {
  FaHome,
  FaCode,
  FaGraduationCap,
  FaEnvelope,
  FaLaptopCode,
  FaFolderOpen,
  FaBars,
  FaTimes,
  FaCertificate,
} from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-full transition-colors text-sm md:text-base ${
      isActive
        ? "bg-white/20 text-white font-semibold shadow-md"
        : "text-gray-200 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header className="w-full flex justify-center py-3 fixed top-0 z-50 px-4">
      <div className="relative rounded-full p-[2px] bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 shadow-2xl w-full max-w-6xl">
        <Motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between px-6 py-3 rounded-full bg-[#0b1222]/90 backdrop-blur-md"
        >
          <span className="text-white font-bold text-lg">MyPortfolio</span>

          <button
            className="text-white text-2xl lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="hidden lg:flex gap-5">
            <NavLink to="/" className={linkClass}><FaHome /> Home</NavLink>
            <NavLink to="/skills" className={linkClass}><FaLaptopCode /> Skills</NavLink>
            <NavLink to="/experience" className={linkClass}><FaCode /> Experience</NavLink>
            <NavLink to="/education" className={linkClass}><FaGraduationCap /> Education</NavLink>
            <NavLink to="/training" className={linkClass}><FaCertificate /> Training</NavLink>
            <NavLink to="/projects" className={linkClass}><FaFolderOpen /> Projects</NavLink>
            <NavLink to="/contact" className={linkClass}><FaEnvelope /> Contact</NavLink>
          </div>
        </Motion.nav>

        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full mt-2 rounded-2xl bg-[#0b1222]/95 backdrop-blur-md p-4 flex flex-col gap-3 shadow-xl lg:hidden max-h-[80vh] overflow-y-auto"
          >
            {[
              { to: "/", label: "Home", icon: <FaHome /> },
              { to: "/skills", label: "Skills", icon: <FaLaptopCode /> },
              { to: "/experience", label: "Experience", icon: <FaCode /> },
              { to: "/education", label: "Education", icon: <FaGraduationCap /> },
              { to: "/training", label: "Training", icon: <FaCertificate /> },
              { to: "/projects", label: "Projects", icon: <FaFolderOpen /> },
              { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {item.icon} {item.label}
              </NavLink>
            ))}
          </Motion.div>
        )}
      </div>
    </header>
  );
}
