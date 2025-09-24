import { skills } from "../data";
import { motion as Motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 max-w-6xl mx-auto px-8 py-12">
      {/* Judul Section */}
      <Motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 text-center text-white"
      >
        Skills
      </Motion.h2>

      {/* Grid Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((g, i) => (
          <Motion.div
            key={g.group}
            className="bg-gradient-to-br from-[#0b1222]/80 via-[#0b1426]/60 
                       to-[#061024]/70 shadow-xl rounded-2xl border 
                       border-white/5 p-6 hover:scale-[1.02] 
                       hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Judul + Icon */}
            <h3 className="flex items-center gap-2 font-semibold text-xl mb-4 text-primary">
              <g.icon className="text-2xl text-indigo-400" /> {g.group}
            </h3>

            {/* Skill Items */}
            <div className="flex flex-wrap gap-3">
              {g.items.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/10 
                             rounded-full text-sm text-gray-200 hover:bg-primary/20 
                             transition-colors"
                >
                  <s.icon className={`text-base ${s.color}`} /> {/* warna dari data */}
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
