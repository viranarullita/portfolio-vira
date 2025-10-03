import { motion as Motion } from "framer-motion";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-8 py-16">
      <Motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Education
      </Motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((item, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0b1222]/80 via-[#0b1426]/60 to-[#061024]/70
                       shadow-xl rounded-2xl border border-white/10
                       p-6 hover:scale-[1.02] hover:shadow-2xl
                       transition-transform duration-300 flex flex-col gap-2"
          >
            <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
            <span className="text-sm text-gray-400 italic">{item.place}</span>
            <p className="text-gray-300 text-sm">{item.year}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
