import { motion as Motion } from "framer-motion";
import { profile } from "../data";
import { FaArrowRight, FaFolderOpen } from "react-icons/fa";

// Update 25 September 2026 By Afi
import { Link } from "react-router-dom";

export default function Hero() {
  const fullText = `I'm ${profile.nama}`;
  const letters = fullText.split("");

  return (
    <>
      <section
        id="home"
        className="relative px-6 sm:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto 
                   grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div
            className="absolute -top-20 -left-20 w-72 h-72 
                       bg-teal-500/10 rounded-full blur-3xl"
          />

          <div
            className="absolute top-1/3 right-0 w-72 h-72 
                       bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        {/* Foto */}
        <Motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl 
                         bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 
                         blur-2xl"
            />

            <div className="relative rounded-2xl p-[4px] overflow-hidden">
              <div
                className="absolute inset-0 rounded-2xl 
                           bg-[conic-gradient(at_top_left,_#14b8a6,_#3b82f6,_#8b5cf6,_#14b8a6)] 
                           animate-spin blur-sm opacity-80"
                style={{ animationDuration: "8s" }}
              />

              <div
                className="relative rounded-2xl bg-white/5 
                           shadow-xl shadow-teal-500/30 overflow-hidden"
              >
                <img
                  src={profile.foto}
                  alt={profile.nama}
                  className="rounded-2xl object-contain max-h-[28rem] w-auto 
                             transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Hero Content */}
        <div className="text-center lg:text-left order-2 lg:order-1 lg:pl-8 xl:pl-12">
          <Motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 
                       font-extrabold leading-tight"
          >
            <span className="block text-gray-200 text-xl sm:text-2xl lg:text-3xl mb-2">
              Halo,
            </span>

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
            className="mt-5 text-gray-300 text-sm sm:text-base 
             max-w-xl leading-relaxed mx-auto lg:mx-0"
          >
            Saya merupakan lulusan{" "}
            <span className="text-teal-300 font-medium">
              D3 Manajemen Informatika
            </span>{" "}
            dengan pengalaman di bidang{" "}
            <span className="text-sky-300 font-medium">
              pengembangan dan pengujian aplikasi web
            </span>
            , termasuk pengujian REST API, dokumentasi sistem, serta
            pengembangan frontend menggunakan ReactJS. Saya tertarik untuk terus
            berkembang sebagai{" "}
            <span className="text-indigo-300 font-medium">
              Junior Software Developer
            </span>
            .
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            <span
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm
                         bg-white/5 border border-white/10 text-gray-300"
            >
              Pengembangan & Pengujian Sistem
            </span>

            <span
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm
                         bg-white/5 border border-white/10 text-gray-300"
            >
              Dokumentasi
            </span>

            <span
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm
                         bg-white/5 border border-white/10 text-gray-300"
            >
              Pelayanan & Administrasi
            </span>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 
                       justify-center lg:justify-start"
          >
            <Link
              to="/experience"
              className="group px-6 py-3 rounded-full 
                         bg-gradient-to-r from-teal-500 to-blue-500 
                         text-white font-semibold flex items-center 
                         justify-center gap-2 shadow-lg shadow-blue-500/20
                         transition-all duration-300
                         hover:scale-105 hover:shadow-blue-500/40
                         w-full sm:w-auto"
            >
              Lihat Pengalaman
              <FaArrowRight
                className="transition-transform duration-300 
                           group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/projects"
              className="group px-6 py-3 rounded-full 
                         border border-white/20 text-gray-200
                         flex items-center justify-center gap-2
                         hover:bg-white/10 hover:border-teal-400
                         transition-all duration-300
                         w-full sm:w-auto"
            >
              <FaFolderOpen className="text-teal-300" />
              Lihat Proyek
            </Link>
          </Motion.div>
        </div>
      </section>

      <section
        id="about"
        className="relative px-6 sm:px-8 py-16 sm:py-20 lg:py-24 max-w-6xl mx-auto 
                   grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
      >
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-10 left-1/4 w-52 sm:w-64 md:w-72 lg:w-80 
                       h-52 sm:h-64 md:h-72 lg:h-80 bg-teal-500/40 
                       rounded-full blur-2xl animate-pulse"
          />

          <div
            className="absolute bottom-10 right-1/4 w-52 sm:w-64 md:w-72 lg:w-80 
                       h-52 sm:h-64 md:h-72 lg:h-80 bg-purple-500/40 
                       rounded-full blur-2xl animate-pulse delay-200"
          />

          <div
            className="absolute inset-0 bg-gradient-to-r 
                       from-slate-900/20 via-slate-800/10 to-slate-900/20 
                       backdrop-blur-[2px]"
          />
        </div>

        <Motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profile.image}
            alt={profile.nama}
            className="rounded-2xl object-cover 
                       w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 
                       lg:w-[28rem] lg:h-[28rem]
                       border border-white/10 
                       shadow-lg shadow-purple-500/40"
          />
        </Motion.div>

        <Motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6 
                       bg-gradient-to-r from-teal-400 to-blue-400 
                       bg-clip-text text-transparent"
          >
            About Me
          </h2>

          <p className="text-gray-200 leading-relaxed mb-4 text-base sm:text-lg">
            Hi! Saya <span className="text-teal-300">{profile.nama}</span>,
            lulusan{" "}
            <span className="text-sky-300">D3 Manajemen Informatika</span> dari{" "}
            <span className="text-indigo-300">
              Universitas Nasional Pasim Bandung
            </span>{" "}
            dan penerima{" "}
            <span className="text-purple-300">
              Beasiswa Pemberdayaan Umat Berkelanjutan (PUB) Angkatan 22
            </span>
            . Selama masa pendidikan hingga pengalaman kerja, saya memperoleh
            pengalaman melalui pelatihan, proyek, organisasi, magang, serta
            berbagai peran yang melibatkan pekerjaan teknis maupun pelayanan.
          </p>

          <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
            Pengalaman saya mencakup{" "}
            <span className="text-teal-300">
              pengembangan dan pengujian sistem, dokumentasi, pelayanan
              informasi, administrasi, serta koordinasi pekerjaan
            </span>
            . Saya juga pernah menjalani peran sebagai{" "}
            <span className="text-sky-300">
              Software Development Intern, Front Office, dan Instruktur
            </span>
            , sehingga terbiasa bekerja dengan sistem sekaligus berkomunikasi
            dengan pengguna maupun tim. Di bidang teknis, saya memiliki
            pengalaman menggunakan{" "}
            <span className="text-indigo-300">
              C#, ASP.NET Core MVC, Entity Framework, LINQ, REST API, ReactJS,
              JavaScript, HTML, CSS, Tailwind CSS, MySQL, dan SQL Server
            </span>
            .
          </p>
        </Motion.div>
      </section>
    </>
  );
}
