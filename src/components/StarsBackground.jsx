import { motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  // ambil ukuran halaman penuh
  useEffect(() => {
    setDimensions({
      w: window.innerWidth,
      h: document.body.scrollHeight,
    });

    const handleResize = () =>
      setDimensions({
        w: window.innerWidth,
        h: document.body.scrollHeight,
      });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stars = Array.from({ length: 150 });

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {stars.map((_, i) => {
        const size = Math.random() * 2 + 1; // 1px - 3px
        const x = Math.random() * dimensions.w;
        const y = Math.random() * dimensions.h;

        return (
          <Motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{ width: size, height: size, left: x, top: y }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
}
