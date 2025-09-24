import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Nama & tahun */}
        <p className="text-gray-400 text-sm mb-4">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">Vira Narullita</span> —
          All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-4">
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <Github size={22} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Linkedin size={22} />
          </a>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=viranarullita3@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
