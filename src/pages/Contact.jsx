import { useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Mail, MapPin, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { profile } from "../data";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_10kzm7c",
        "template_gjwfc8b",
        form.current,
        "9lV0U-nczigeEZ5HB"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10"
    >
      <div>
        <Motion.h2
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
        >
          Get in Touch
        </Motion.h2>
        <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
          Feel free to reach out to me via the form below or directly by email.
        </p>

        <div className="bg-gradient-to-br from-[#0b1222]/80 via-[#0b1426]/60 to-[#061024]/70 shadow-xl rounded-2xl border border-white/10 p-4 sm:p-6">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <input
              name="name"
              placeholder="Your name"
              className="p-3 bg-white/5 border border-white/10 rounded-lg text-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="p-3 bg-white/5 border border-white/10 rounded-lg text-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="p-3 bg-white/5 border border-white/10 rounded-lg text-gray-200 text-sm sm:text-base h-28 sm:h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg shadow-indigo-500/30 sm:hover:scale-[1.02] transition-transform duration-300"
            >
              Send Message
            </button>
          </form>

          {status === "success" && (
            <div className="flex items-center gap-2 text-green-400 mt-3 sm:mt-4 text-sm sm:text-base">
              <CheckCircle className="w-5 h-5" />
              <span>Pesan berhasil dikirim!</span>
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-400 mt-3 sm:mt-4 text-sm sm:text-base">
              <XCircle className="w-5 h-5" />
              <span>Gagal mengirim pesan. Coba lagi.</span>
            </div>
          )}
        </div>
      </div>

      <Motion.div
        initial={{ x: 10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-[#0b1222]/80 via-[#0b1426]/60 to-[#061024]/70 shadow-xl rounded-2xl border border-white/10 p-4 sm:p-6 flex flex-col justify-center"
      >
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">
          Contact Info
        </h3>

        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/30 to-purple-800/30">
            <Mail className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-400">Email</p>
            <p className="text-gray-200 text-sm sm:text-base">
              {profile.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-pink-600/30 to-pink-800/30">
            <MapPin className="w-5 h-5 text-pink-400" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-400">Location</p>
            <p className="text-gray-200 text-sm sm:text-base">
              {profile.lokasi}
            </p>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
