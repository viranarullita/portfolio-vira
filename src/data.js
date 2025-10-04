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
      { name: "XAMPP", icon: FaLaptopCode, color: "text-orange-500" },
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
    image: "/projects/cars.png",
    tools: ["ReactJS", "Tailwind CSS", "Vite"],
  },
  {
    id: 2,
    title: "Sistem Manajemen Karyawan",
    desc: "Aplikasi desktop berbasis C# Windows Forms yang dirancang untuk membantu admin perusahaan dalam mengelola data karyawan, departemen, dan gaji. Dengan sistem ini, admin dapat menambah, mengedit, dan menghapus data dengan mudah. Aplikasi ini bertujuan untuk meningkatkan efisiensi pengelolaan data karyawan.",
    repo: "https://github.com/viranarullita/SistemManajemenKaryawan.git",
    live: "",
    image: "/projects/sistemMK.png",
    tools: ["C#", "Windows Forms", "MySQL"],
  },
  {
    id: 3,
    title: "Sistem Informasi Perpustakaan",
    desc: "Aplikasi Library Management System berbasis ASP.NET Core MVC yang digunakan oleh admin untuk mengelola data perpustakaan. Fitur utama mencakup CRUD buku, manajemen peminjaman dan pengembalian, serta autentikasi admin. Backend menggunakan MySQL dengan Entity Framework Core.",
    repo: "https://github.com/viranarullita/Perpustakaan.git",
    live: "",
    image: "/projects/perpus.png",
    tools: ["C#", "ASP.NET Core", "MySQL", "Entity Framework Core"],
  },
  {
    id: 4,
    title: "REST API",
    desc: "REST API sederhana menggunakan ASP.NET Core.",
    repo: "https://github.com/viranarullita/UTS-Project-ViraNarullita.git",
    live: "",
    image: "/projects/api.png",
    tools: ["C#", "ASP.NET Core", "Postman"],
  },
  {
    id: 5,
    title: "Flavorscape - Website Resep Makanan",
    desc: "Sebuah website resep makanan interaktif yang dibangun menggunakan HTML, CSS, dan JavaScript. Website ini menampilkan berbagai resep dengan tampilan menarik serta navigasi yang mudah dipahami pengguna. Proyek ini di-deploy menggunakan Vercel sehingga dapat diakses secara online.",
    repo: "https://github.com/viranarullita/Flavorscape.git",
    live: "https://flavorscape-iota.vercel.app/",
    image: "/projects/flavorscape.png",
    tools: ["HTML5", "CSS3", "JavaScript", "Vercel"],
  },
  {
    id: 6,
    title: "Vilaundry - Aplikasi Laundry Console",
    desc: "Vilaundry adalah aplikasi console berbasis C yang digunakan oleh admin layanan laundry untuk mengelola operasional harian.",
    repo: "https://github.com/viranarullita/Laundry-ProjectC.git",
    live: "",
    image: "/projects/laundry.png",
    tools: ["C", "Console App"],
  },
  {
    id: 7,
    title: "CookRecipe - Platform Recipe Masakan",
    desc: "Sebuah Aplikasi web berbasis ReactJS & TailwindCSS dengan fitur menelusuri, menambahkan, dan berbagi resep. Mendukung localStorage untuk menyimpan resep favorit tanpa backend. Proyek ini di-deploy menggunakan Vercel sehingga dapat diakses secara online.",
    repo: "https://github.com/viranarullita/CookRecipes.git",
    live: "https://cook-recipes.vercel.app/",
    image: "/projects/cookrecipes.png",
    tools: ["ReactJS", "Tailwind CSS", "localStorage", "Vercel"],
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
    role: "Instruktur Logika Algoritma & Bahasa C",
    company: "Universitas Nasional Pasim",
    image: "/sertifikat/InstructorC.jpeg",
    desc: "Membimbing mahasiswa dalam memahami dasar-dasar pemrograman, logika algoritma, dan bahasa C.",
  },
  {
    role: "Instruktur Struktur Data",
    company: "Universitas Nasional Pasim",
    image: "/sertifikat/InstructorDataStructure.jpeg",
    desc: "Mengajar materi struktur data serta membimbing mahasiswa dalam implementasi menggunakan bahasa pemrograman.",
  },
  {
    role: "Front Office",
    company: "Universitas Nasional Pasim",
    desc: "Memberikan layanan informasi kepada mahasiswa, calon mahasiswa, dan tamu kampus dengan sikap ramah dan profesional. Menangani pertanyaan terkait jadwal kelas, biaya kuliah, dan administrasi akademik. Menerima serta mengarahkan tamu ke bagian/unit yang sesuai. Mengelola komunikasi melalui telepon dan whatsapp. Membantu pencatatan dan pengarsipan dokumen administrasi.",
  },
  {
    role: "PKL - Layanan Administrasi Masyarakat",
    company: "Kantor Kecamatan Bangodua, Indramayu",
    desc: "Memberikan pelayanan administrasi masyarakat, termasuk pembuatan KTP, KK, surat keterangan, dan dokumen lainnya. Menyambut dan mengarahkan tamu, melakukan pencatatan data, mengelola arsip, mencetak dokumen, serta membantu kebutuhan fotokopi.",
  },
];

export const training = [
  {
    id: 1,
    title: "Fundamental Back-End Programming Training (C#)",
    image: "/sertifikat/fundamentalCSharp.jpeg",
  },
  {
    id: 2,
    title: "Advanced Back-End Programming Training (C#)",
    image: "/sertifikat/AdvancedCSharp.jpeg",
  },
  {
    id: 3,
    title: "Logic and Algorithm Training (C)",
    image: "/sertifikat/trainingC.jpeg",
  },
  {
    id: 4,
    title: "Database MySQL Training",
    image: "/sertifikat/database.jpeg",
  },
  {
    id: 5,
    title: "Data Structure Training (C)",
    image: "/sertifikat/datastruktur.jpeg",
  },
  {
    id: 6,
    title: "Web Programming Training (HTML, CSS, Javascript)",
    image: "/sertifikat/web.jpeg",
  },
  {
    id: 7,
    title: "GitHub Training",
    image: "/sertifikat/git.jpeg",
  },
  {
    id: 8,
    title: "React Training",
    image: "/sertifikat/react.jpeg",
  },
];

export const profile = {
  nama: "Vira Narullita",
  title: "Programmer | D3 Manajemen Informatika",
  email: "viranarullita3@gmail.com",
  lokasi: "Bandung, Jawa Barat, Indonesia",
  foto: "/Foto.png",
  image: "/me.jpeg"
};
