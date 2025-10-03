import { useState, useRef, useEffect } from "react";
import { training } from "../data";
import { motion as Motion } from "framer-motion";

export default function Training() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const totalPages = Math.ceil(training.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTraining = training.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    if (sectionRef.current) {
      const y =
        sectionRef.current.getBoundingClientRect().top +
        window.scrollY -
        100; 
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
    <section ref={sectionRef} className="min-h-screen py-16 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">
        Certificate Training
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {currentTraining.map((item, index) => (
          <Motion.div
            key={`${item.id}-${currentPage}`}
            className="rounded-2xl shadow-2xl p-5 text-center 
                       bg-white/20 backdrop-blur-md border border-white/30"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(56,189,248,0.5)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-3 rounded-lg mb-4 bg-white/40 transition-colors duration-300 ease-in-out">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 sm:h-64 lg:h-72 object-contain rounded-md"
              />
            </div>
            <h2 className="text-base sm:text-lg font-semibold text-white drop-shadow">
              {item.title}
            </h2>
          </Motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-lg text-white transition
            ${currentPage === 1
              ? "bg-gray-500/40 cursor-not-allowed opacity-60"
              : "bg-white/10 hover:bg-white/20 cursor-pointer"}`}
        >
          Prev
        </button>

        <span className="text-gray-300">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-lg text-white transition
            ${currentPage === totalPages
              ? "bg-gray-500/40 cursor-not-allowed opacity-60"
              : "bg-white/10 hover:bg-white/20 cursor-pointer"}`}
        >
          Next
        </button>
      </div>
    </section>
  );
}
