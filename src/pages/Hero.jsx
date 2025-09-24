import { motion as Motion } from "framer-motion";
import { profile } from "../data";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  const fullText = `I'm ${profile.nama}`;
  const letters = fullText.split("");

  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="px-6 sm:px-8 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto 
                   grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 
                   items-center"
      >
        {/* Foto */}
        <Motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center order-1 md:order-2"
        >
          <img
            src={profile.foto}
            alt="foto"
            className="rounded-2xl object-cover w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 
                       border border-white/10 shadow-2xl shadow-teal-500/20 
                       transform transition duration-500 hover:scale-105 hover:rotate-1"
          />
        </Motion.div>

        {/* Intro teks */}
        <div className="text-center md:text-left order-2 md:order-1">
          <Motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight"
          >
            <span className="block">Hallo,</span>
            <span
              className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 
                             bg-clip-text text-transparent animate-gradient inline-block"
            >
              {letters.map((char, i) => (
                <Motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {char}
                </Motion.span>
              ))}
            </span>
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed 
                       mx-auto md:mx-0"
          >
            Mahasiswa D3 Manajemen Informatika{" "}
            <span className="text-teal-300 font-medium">
              Universitas Nasional Pasim Bandung
            </span>
            .
            <br />
            Berpengalaman dalam{" "}
            <span className="text-sky-300 font-medium">
              C#, ASP.NET Core, MySQL
            </span>
            , serta membangun aplikasi web dan desktop. Antusias mengembangkan
            aplikasi modern dengan{" "}
            <span className="text-indigo-300 font-medium">
              ReactJS & TailwindCSS
            </span>
            .
          </Motion.p>

          {/* Tombol */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              className="group px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 
             text-white font-semibold flex items-center justify-center gap-2 
             shadow-lg shadow-blue-500/30 transition-transform transform 
             hover:scale-105 hover:shadow-blue-500/50 w-full sm:w-auto"
              href="/CV-ViraNarullita.pdf"
              download="CV-ViraNarullita.pdf"
            >
              <FaDownload className="group-hover:animate-bounce" /> Download CV
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-full border border-white/20 text-gray-200 
                         hover:bg-white/10 hover:border-teal-400 transition-all duration-300 
                         w-full sm:w-auto text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section
        id="about"
        className="relative px-6 sm:px-8 py-16 sm:py-20 lg:py-24 max-w-6xl mx-auto 
                   grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center 
                   rounded-3xl overflow-hidden"
      >
        {/* Background dekorasi */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-10 left-1/4 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 
                          bg-teal-500/40 rounded-full blur-2xl animate-pulse"
          />
          <div
            className="absolute bottom-10 right-1/4 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 
                          bg-purple-500/40 rounded-full blur-2xl animate-pulse delay-200"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-slate-800/10 
                          to-slate-900/20 backdrop-blur-[2px]"
          />
        </div>

        {/* Foto About */}
        <Motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profile.foto}
            alt="about me"
            className="rounded-2xl object-cover w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 
                       border border-white/10 shadow-lg shadow-purple-500/40"
          />
        </Motion.div>

        {/* Teks About */}
        <Motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 
                         to-blue-400 bg-clip-text text-transparent"
          >
            About Me
          </h2>
          <p className="text-gray-200 leading-relaxed mb-4 text-base sm:text-lg">
            Hi! Saya <span className="text-teal-300">{profile.nama}</span>,
            seorang{" "}
            <span className="text-sky-300">
              mahasiswa D3 Manajemen Informatika
            </span>
            . Saya memiliki keahlian utama di{" "}
            <span className="text-indigo-300">C#, ASP.NET Core, dan MySQL</span>
            , serta berpengalaman membuat aplikasi web dengan{" "}
            <span className="text-sky-300">HTML, CSS, JavaScript, ReactJS</span>{" "}
            dan <span className="text-purple-300">TailwindCSS</span>.
          </p>
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
            Saya bersemangat dalam membangun aplikasi modern, mengeksplorasi
            framework baru, serta berkontribusi pada proyek nyata.
          </p>
        </Motion.div>
      </section>
    </>
  );
}
