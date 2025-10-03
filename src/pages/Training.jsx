import { training } from "../data";
import { motion as Motion } from "framer-motion";

export default function Training() {
  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Judul */}
      <h1 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">
        Certificate Training
      </h1>

      {/* Grid Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {training.map((item, index) => (
          <Motion.div
            key={item.id}
            className="rounded-2xl shadow-2xl p-6 text-center 
                       bg-white/20 backdrop-blur-md border border-white/30"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(56,189,248,0.5)",
            }}
            whileTap={{ scale: 0.98 }} // animasi kecil kalau di klik
          >
            <div className="p-4 rounded-lg mb-4 bg-white/40 transition-colors duration-300 ease-in-out">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-contain rounded-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-white drop-shadow">
              {item.title}
            </h2>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
