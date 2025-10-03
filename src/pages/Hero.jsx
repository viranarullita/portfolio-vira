import { motion as Motion } from "framer-motion";
import { profile } from "../data";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  const fullText = `I'm ${profile.nama}`;
  const letters = fullText.split("");

  return (
    <>
      <section
        id="home"
        className="px-6 sm:px-8 py-10 sm:py-12 lg:py-16 max-w-7xl mx-auto 
                   grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
      >
        <Motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <div className="relative rounded-2xl p-[4px] overflow-hidden">
            <div
              className="absolute inset-0 rounded-2xl bg-[conic-gradient(at_top_left,_#14b8a6,_#3b82f6,_#8b5cf6,_#14b8a6)] 
                 animate-spin blur-sm opacity-80"
              style={{ animationDuration: "8s" }}
            ></div>

            <div className="relative rounded-2xl bg-white/5 shadow-xl shadow-teal-500/30 overflow-hidden">
              <img
                src={profile.foto}
                alt="foto"
                className="rounded-2xl object-contain max-h-[28rem] w-auto transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Motion.div>

        <div className="text-center lg:text-left order-2 lg:order-1 lg:pl-8 xl:pl-12">
          <Motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-snug"
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
            className="mt-4 text-gray-300 text-sm sm:text-base max-w-md leading-relaxed 
                       mx-auto lg:mx-0"
          >
            Mahasiswa D3 Manajemen Informatika di{" "}
            <span className="text-teal-300 font-medium">
              Universitas Nasional Pasim Bandung
            </span>
            . Saya percaya bahwa teknologi bukan hanya soal kode, tapi juga
            tentang{" "}
            <span className="text-sky-300 font-medium">solusi nyata</span> untuk
            membantu banyak orang. Dengan semangat belajar yang tinggi, saya
            terus mengasah kemampuan diri dan{" "}
            <span className="text-indigo-300 font-medium">
              berkomitmen untuk berkembang
            </span>{" "}
            agar siap berkontribusi di dunia profesional.
          </Motion.p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              className="group px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 
                         text-white font-semibold flex items-center justify-center gap-2 
                         shadow-lg shadow-blue-500/30 transition-transform 
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

      <section
        id="about"
        className="relative px-6 sm:px-8 py-16 sm:py-20 lg:py-24 max-w-6xl mx-auto 
                   grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
      >
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-10 left-1/4 w-52 sm:w-64 md:w-72 lg:w-80 
                          h-52 sm:h-64 md:h-72 lg:h-80 bg-teal-500/40 rounded-full 
                          blur-2xl animate-pulse"
          />
          <div
            className="absolute bottom-10 right-1/4 w-52 sm:w-64 md:w-72 lg:w-80 
                          h-52 sm:h-64 md:h-72 lg:h-80 bg-purple-500/40 rounded-full 
                          blur-2xl animate-pulse delay-200"
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
            alt="about me"
            className="rounded-2xl object-cover 
                       w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]
                       border border-white/10 shadow-lg shadow-purple-500/40"
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
            seorang{" "}
            <span className="text-sky-300">
              mahasiswa D3 Manajemen Informatika
            </span>{" "}
            di{" "}
            <span className="text-indigo-300">
              Universitas Nasional Pasim Bandung
            </span>{" "}
            serta penerima{" "}
            <span className="text-purple-300">
              Beasiswa Pemberdayaan Umat Berkelanjutan (PUB) Angkatan 22
            </span>
            . Beasiswa ini tidak hanya menanggung biaya kuliah, tetapi juga
            mempercepat proses studi dan membekali penerimanya dengan{" "}
            <span className="text-sky-300">
              pelatihan intensif di bidang pemrograman
            </span>
            . Dengan program akselerasi ini, mahasiswa dipersiapkan untuk siap
            bekerja di industri IT sejak tahun terakhir perkuliahan.
          </p>
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
            Memiliki keahlian pada{" "}
            <span className="text-teal-300">
              C#, ASP.NET Core, dan .NET Framework
            </span>
            , serta pengalaman membangun{" "}
            <span className="text-indigo-300">
              web application, REST API, dan desktop app
            </span>
            . Terbiasa menggunakan{" "}
            <span className="text-sky-300">
              ReactJS, HTML, CSS, JavaScript, TailwindCSS
            </span>{" "}
            dengan database{" "}
            <span className="text-purple-300">MySQL & PostgreSQL</span>. Saya
            senang mengeksplorasi teknologi baru, menerapkan prinsip{" "}
            <span className="text-teal-300">clean code</span>, dan siap
            berkontribusi dalam proyek nyata.
          </p>
        </Motion.div>
      </section>
    </>
  );
}
