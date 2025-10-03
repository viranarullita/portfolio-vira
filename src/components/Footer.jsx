import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col gap-4 sm:gap-6">
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">Vira Narullita</span> —
          All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href="https://github.com/viranarullita"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <Github className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/vira-narullita-b934b1287"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Mail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
