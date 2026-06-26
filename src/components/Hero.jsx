import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden px-4"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-600/20 to-pink-500/20 blur-3xl animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm{" "}
          <span className="text-cyan-400">ABISHEK</span><br />
          <span className="text-cyan-400">Full Stack Developer</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
         Full-stack developer skilled in MERN stack and Python full-stack development,
          building scalable, responsive applications with clean UI and smooth UX.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          
          {/* GitHub */}
          <a
            href="https://github.com/abishekdev11"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 border border-gray-700 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>

          {/* Projects */}
          {/* <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View Projects
          </a> */}

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Resume
          </a>
        </div>
      </motion.div>

      {/* Floating animation dot */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
      />
    </section>
  );
}