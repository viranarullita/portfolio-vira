import { projects } from "../data";
import { motion as Motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-8 py-16">
      {/* Judul */}
      <Motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Projects
      </Motion.h2>

      {/* Grid project */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <Motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0b1222]/80 via-[#0b1426]/60 to-[#061024]/70
                       shadow-xl rounded-2xl border border-white/10 overflow-hidden
                       hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300"
          >
            {/* Gambar preview */}
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="w-full object-contain border-b border-white/10 bg-black rounded-t-2xl"
              />
            )}

            {/* Isi */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-primary">{p.title}</h3>
              <p className="text-gray-300 text-sm">{p.desc}</p>

              {/* Tombol */}
              <div className="mt-3 flex gap-3">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-white/5 rounded-full inline-flex items-center gap-2 hover:bg-primary/20 transition"
                  >
                    <FaCode /> Code
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-white/5 rounded-full inline-flex items-center gap-2 hover:bg-primary/20 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
