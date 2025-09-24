import Header from "./Header";
import Footer from "./Footer";
import StarsBackground from "./StarsBackground"; // motion bintang jatuh

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-white">
      <StarsBackground />

      <Header />

      {/* Konten halaman */}
      <main className="flex-1 pt-24 px-4">{children}</main>

      {/* Footer selalu ada */}
      <Footer />
    </div>
  );
}
