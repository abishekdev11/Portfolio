import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // If clicking hamburger button → ignore (important fix)
      if (buttonRef.current && buttonRef.current.contains(event.target)) {
        return;
      }

      // If clicking outside menu → close
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex justify-between items-center px-8 py-4">
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

        {/* Hamburger */}
        <button
          ref={buttonRef}
          className="md:hidden text-2xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden flex flex-col items-center gap-4 pb-4 bg-black/30 backdrop-blur-md"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}