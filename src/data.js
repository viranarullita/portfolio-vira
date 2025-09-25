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
    desc: "Sebuah aplikasi web untuk menampilkan koleksi mobil premium. Dibangun menggunakan React untuk komponen interaktif, Tailwind CSS untuk styling responsif, serta Vite sebagai bundler agar performa lebih cepat. Proyek ini juga di-deploy di Vercel untuk akses online.",
    repo: "https://github.com/viranarullita/UTS-React-Vira.git",
    live: "https://cars-collection-vira.vercel.app/",
    image: "/cars.png",
  },
  {
    id: 2,
    title: "Sistem Manajemen Karyawan",
    desc: "Aplikasi desktop berbasis C# Windows Forms yang dirancang untuk membantu admin perusahaan dalam mengelola data karyawan, departemen, dan gaji. Dengan sistem ini, admin dapat menambah, mengedit, dan menghapus data dengan mudah. Aplikasi ini bertujuan untuk meningkatkan efisiensi pengelolaan data karyawan.",
    repo: "https://github.com/viranarullita/SistemManajemenKaryawan.git",
    live: "",
    image: "/sistemMK.png",
  },
  {
    id: 3,
    title: "Sistem Informasi Perpustakaan",
    desc: "Aplikasi Library Management System berbasis ASP.NET Core MVC yang digunakan oleh admin untuk mengelola data perpustakaan. Fitur utama mencakup CRUD buku, manajemen peminjaman dan pengembalian, serta autentikasi admin. Backend menggunakan MySQL dengan Entity Framework Core",
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
    desc: "Sebuah website resep makanan interaktif yang dibangun menggunakan HTML, CSS, dan JavaScript. Website ini menampilkan berbagai resep dengan tampilan menarik serta navigasi yang mudah dipahami pengguna. Proyek ini di-deploy menggunakan Vercel sehingga dapat diakses secara online.",
    repo: "https://github.com/viranarullita/Flavorscape.git",
    live: "https://flavorscape-iota.vercel.app/",
    image: "/flavorscape.png",
  },
  {
    id: 6,
    title: "Vilaundry - Aplikasi Laundry Console",
    desc: "Vilaundry adalah aplikasi console berbasis C yang digunakan oleh admin layanan laundry untuk mengelola operasional harian",
    repo: "https://github.com/viranarullita/Laundry-ProjectC.git",
    live: "",
    image: "/laundry.png",
  },
  {
    id: 7,
    title: "CookRecipe - Platform Recipe Masakan",
    desc: "Sebuah Aplikasi web berbasis ReactJS & TailwindCSS dengan fitur menelusuri, menambahkan, dan berbagi resep. Mendukung localStorage untuk menyimpan resep favorit tanpa backend. Proyek ini di-deploy menggunakan Vercel sehingga dapat diakses secara online.",
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
    title: "Jurusan Akuntansi Keuangan dan Lembaga",
    place: "SMK PGRI Jatibarang",
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
