import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1 className="font-bold text-xl">FULLSTACK Dev</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-black/30 backdrop-blur-md">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}