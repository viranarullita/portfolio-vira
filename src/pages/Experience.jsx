import { motion as Motion } from "framer-motion";
import { experiences } from "../data";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Experience() {
  const [showButton, setShowButton] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  // Pantau scroll untuk tombol
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);

      // Cek apakah sudah dekat footer
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setIsNearFooter(rect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 relative"
    >
      <Motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center"
      >
        Experience
      </Motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {experiences.map((exp, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-gradient-to-br from-[#0b1222]/80 via-[#0b1426]/60 to-[#061024]/70
                       shadow-xl rounded-2xl border border-white/10
                       p-4 sm:p-6
                       flex flex-col gap-2
                       transition-transform duration-300
                       hover:scale-100 sm:hover:scale-[1.02] sm:hover:shadow-2xl"
          >
            <h3 className="text-base sm:text-lg font-semibold text-primary">
              {exp.role}
            </h3>
            <span className="text-xs sm:text-sm text-gray-400 italic">
              {exp.company}
            </span>
            <p className="text-gray-300 text-sm leading-relaxed">{exp.desc}</p>
          </Motion.div>
        ))}
      </div>

      {/* Tombol Scroll ke Atas */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className={`fixed right-4 sm:right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/80 transition-all
      ${isNearFooter ? "bottom-32 sm:bottom-36" : "bottom-4 sm:bottom-8"}`}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </section>
  );
}
