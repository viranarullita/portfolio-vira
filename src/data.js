import {
  FaReact,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGitAlt,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDotnet,
  SiMysql,
  SiPostman,
  SiPostgresql,
} from "react-icons/si";

export const skills = [
  {
    group: "Frontend",
    icon: FaReact,
    items: [
      { name: "ReactJS", icon: FaReact, color: "text-cyan-400" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },
  {
    group: "Backend",
    icon: SiDotnet,
    items: [
      { name: "C#", icon: FaCode, color: "text-purple-500" },
      { name: ".NET Core", icon: SiDotnet, color: "text-indigo-500" },
      { name: "ASP.NET Core", icon: SiDotnet, color: "text-blue-600" },
    ],
  },
  {
    group: "Database",
    icon: FaDatabase,
    items: [
      { name: "MySQL", icon: SiMysql, color: "text-teal-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    ],
  },
  {
    group: "Tools",
    icon: FaGitAlt,
    items: [
      { name: "Git & GitHub", icon: FaGitAlt, color: "text-red-500" },
      { name: "Visual Studio", icon: FaLaptopCode, color: "text-blue-600" },
      { name: "VS Code", icon: FaCode, color: "text-sky-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
      { name: "Laragon", icon: FaLaptopCode, color: "text-green-500" },
      { name: "XAMPP", icon: FaLaptopCode, color: "text-orange-500" }, // XAMPP
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Premium Car Collection Web App",
    desc: "Aplikasi web koleksi mobil premium, dibuat saat pelatihan React Fundamental.",
    repo: "https://github.com/viranarullita/UTS-React-Vira.git",
    live: "https://cars-collection-vira.vercel.app/",
    image: "/cars.png",
  },
  {
    id: 2,
    title: "Sistem Manajemen Karyawan",
    desc: "Aplikasi Dekstop dengan menggunakan C#",
    repo: "https://github.com/viranarullita/SistemManajemenKaryawan.git",
    live: "",
    image: "/sistemMK.png",
  },
  {
    id: 3,
    title: "Sistem Informasi Perpustakaan",
    desc: "Aplikasi web pengelolaan perpustakaan dengan fitur peminjaman dan pengembalian buku.",
    repo: "https://github.com/viranarullita/Perpustakaan.git",
    live: "",
    image: "/perpus.png",
  },
  {
    id: 4,
    title: "REST API",
    desc: "REST API sederhana menggunakan ASP.NET Core",
    repo: "https://github.com/viranarullita/UTS-Project-ViraNarullita.git",
    live: "",
    image: "/api.png",
  },
  {
    id: 5,
    title: "Flavorscape - Website Resep Makanan",
    desc: "Website resep makanan interaktif, dibuat dengan HTML, CSS, dan JavaScript.",
    repo: "https://github.com/viranarullita/Flavorscape.git",
    live: "https://flavorscape-iota.vercel.app/",
    image: "/flavorscape.png",
  },
  {
    id: 6,
    title: "Vilaundry - Aplikasi Laundry Console",
    desc: "Aplikasi konsol untuk manajemen laundry, dibuat menggunakan bahasa C.",
    repo: "https://github.com/viranarullita/Laundry-ProjectC.git",
    live: "",
    image: "/laundry.png",
  },
  {
    id: 7,
    title: "CookRecipe - Platform Recipe Masakan",
    desc: "Cook Recipes adalah platform resep masakan sederhana dengan langkah jelas dan bahan mudah didapat, dari masakan tradisional hingga internasional.",
    repo: "https://github.com/viranarullita/CookRecipes.git",
    live: "https://cook-recipes.vercel.app/",
    image: "/cookrecipes.png",
  },
];

export const education = [
  {
    title: "D3 Manajemen Informatika",
    place: "Universitas Nasional Pasim",
    year: "2023 - Sekarang",
  },
  {
    title: "SMK PGRI Jatibarang",
    place: "Jurusan Akuntansi Keuangan dan Lembaga",
    year: "2020 - 2023",
  },
];

export const experiences = [
  {
    role: "Frontend Developer",
    company: "PT Tech Indonesia",
    desc: "Mengembangkan antarmuka web dengan React dan Tailwind, serta bekerja sama dengan tim UI/UX.",
  },
  {
    role: "Backend Developer",
    company: "Startup XYZ",
    desc: "Membangun REST API dengan Node.js dan Express, serta mengelola database MySQL.",
  },
  {
    role: "Intern Web Developer",
    company: "Software House ABC",
    desc: "Mengerjakan proyek internal dan melakukan maintenance website client.",
  },
];

export const profile = {
  nama: "Vira Narullita",
  title: "Programmer | D3 Manajemen Informatika",
  email: "viranarullita3@gmail.com",
  lokasi: "Bandung, Jawa Barat, Indonesia",
  foto: "/Foto.png",
};
