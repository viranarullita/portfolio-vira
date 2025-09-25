import { useState, useRef, useEffect } from "react";
import { projects, skills } from "../data";
import { motion as Motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  // 🔥 Scroll otomatis setiap kali currentPage berubah (dengan offset)
  useEffect(() => {
    if (sectionRef.current) {
      const y =
        sectionRef.current.getBoundingClientRect().top +
        window.scrollY -
        100; // offset 100px (bisa diubah sesuai tinggi navbar)
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((p) => p + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="max-w-6xl mx-auto px-8 py-16"
    >
      {/* Judul */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Projects
      </h2>

      {/* Grid Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {currentProjects.map((p) => (
          <Motion.div
            key={`${p.id}-${currentPage}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-[#0b1222]/80 via-[#0b1426]/60 to-[#061024]/70
              shadow-md md:shadow-xl rounded-2xl border-2 border-white/20 overflow-hidden
              hover:border-yellow-400 md:hover:scale-105 md:hover:shadow-2xl
              transition-all duration-500"
          >
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-contain border-b border-white/10 bg-black rounded-t-2xl"
              />
            )}

            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-lg sm:text-xl font-semibold text-primary">
                {p.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base">{p.desc}</p>

              {/* Tools */}
              {p.tools && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.tools.map((tool, idx) => {
                    const skillItem = skills
                      .flatMap((s) => s.items)
                      .find((item) => item.name === tool);
                    if (!skillItem) return null;
                    const Icon = skillItem.icon;

                    return (
                      <div key={idx} className="relative group">
                        <div
                          className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full border border-white/20 ${skillItem.color} transition-all duration-300`}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div
                          className="absolute -top-8 left-1/2 -translate-x-1/2
                            opacity-0 group-hover:opacity-100
                            scale-90 group-hover:scale-100
                            transition-all duration-200
                            bg-gray-800 text-white text-xs px-2 py-1 rounded pointer-events-none
                            max-w-[120px] truncate text-center z-10"
                        >
                          {tool}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Links */}
              <div className="mt-3 flex flex-wrap gap-3">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-white/5 rounded-full inline-flex items-center gap-2 hover:bg-primary/20 transition text-sm sm:text-base"
                  >
                    <FaCode /> Code
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-white/5 rounded-full inline-flex items-center gap-2 hover:bg-primary/20 transition text-sm sm:text-base"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </Motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-lg bg-white/10 text-white 
                     disabled:opacity-40 hover:bg-white/20 transition"
        >
          Prev
        </button>

        <span className="text-gray-300">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-lg bg-white/10 text-white 
                     disabled:opacity-40 hover:bg-white/20 transition"
        >
          Next
        </button>
      </div>
    </section>
  );
}
