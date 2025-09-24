import { motion as Motion } from "framer-motion";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-8 py-12">
      <Motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Experience
      </Motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gradient-to-br from-[#0b1222]/80 via-[#0b1426]/60 to-[#061024]/70
                       shadow-xl rounded-2xl border border-white/10
                       p-6 hover:scale-[1.02] hover:shadow-2xl
                       transition-transform duration-300 flex flex-col gap-2"
          >
            <h3 className="text-lg font-semibold text-primary">{exp.role}</h3>
            <span className="text-sm text-gray-400 italic">{exp.company}</span>
            <p className="text-gray-300 text-sm leading-relaxed">{exp.desc}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
