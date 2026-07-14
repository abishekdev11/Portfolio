import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-4 py-20 md:py-0"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-600/20 to-pink-500/20 blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left relative"
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm{" "}
            <span className="text-cyan-400">ABISHEK</span>
            <br />
            <span className="text-cyan-400">Full Stack Developer</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-gray-300 max-w-xl mx-auto md:mx-0">
            Full-stack developer skilled in MERN stack and Python full-stack
            development, building scalable, responsive applications with clean
            UI and smooth UX.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Resume
            </a>

            <a
              href="https://linkedin.com/in/abishek-s-s8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://github.com/abishekdev11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 border border-gray-700 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaGithub size={20} />
              GitHub
            </a>
          </div>

          {/* Scroll Indicator - Mobile */}
          <motion.div
            className="flex justify-center mt-10 md:hidden"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-7 h-11 border-2 border-cyan-400 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                animate={{ y: [0, 14, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/profile.jpg"
            alt="Abishek"
            className="w-78 h-72 md:w-96 md:h-96 rounded-full object-cover object-top border-4 border-cyan-400 shadow-2xl shadow-cyan-400/30"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator - Desktop */}
      <motion.div
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-7 h-11 border-2 border-cyan-400 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            animate={{ y: [0, 14, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}