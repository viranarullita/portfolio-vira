import { skills } from "../data";
import { motion as Motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-16 lg:py-20"
    >
      {/* Judul Section */}
      <Motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white"
      >
        Skills
      </Motion.h2>

      {/* Grid Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {skills.map((g) => (
          <Motion.div
            key={g.group}
            className="bg-gradient-to-br from-[#0b1222]/80 via-[#0b1426]/60 
           to-[#061024]/70 shadow-xl rounded-2xl border 
           border-white/10 ring-1 ring-white/10 p-4 sm:p-6 
           hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Judul + Icon */}
            <h3 className="flex items-center gap-2 font-semibold text-lg sm:text-xl mb-4 text-primary">
              <g.icon className="text-xl sm:text-2xl text-indigo-400" /> {g.group}
            </h3>

            {/* Skill Items */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {g.items.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 
                             bg-white/10 border border-white/10 rounded-full 
                             text-xs sm:text-sm text-gray-200 hover:bg-primary/20 
                             transition-colors"
                >
                  <s.icon className={`text-sm sm:text-base ${s.color}`} />
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
