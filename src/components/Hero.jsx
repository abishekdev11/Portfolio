import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1120] px-6 lg:px-20"
    >
      {/* Background Glow */}
      <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 lg:flex-row">
        {/* ---------------- LEFT SIDE ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center lg:text-left"
        >
          <p className="mb-3 text-cyan-400 font-medium tracking-widest uppercase">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Abishek
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-300 md:text-4xl">
            Full Stack Developer
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Full-stack developer specializing in the MERN Stack and Python.
            Passionate about building scalable web applications with modern UI,
            clean architecture, and exceptional user experiences.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5 lg:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="rounded-full border border-cyan-400 px-8 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              View Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center gap-6 lg:justify-start">
            <a
              href="https://github.com/abishekdev11"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-4 text-white transition hover:scale-110 hover:bg-cyan-500"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-4 text-white transition hover:scale-110 hover:bg-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 1 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative flex items-center justify-center"
        >
          {/* Glow Behind Image */}
          <div className="absolute h-[380px] w-[380px] rounded-full bg-cyan-500/30 blur-3xl"></div>

          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
            className="absolute h-[360px] w-[360px] rounded-full border border-cyan-400/30 border-dashed"
          />

          {/* Profile Image */}
          <div className="relative rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-2 shadow-[0_0_60px_rgba(34,211,238,0.45)]">
            <img
              src="/profile.png"
              alt="Abishek"
              className="h-80 w-80 rounded-full border-4 border-[#0B1120] object-cover md:h-96 md:w-96"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-cyan-400">
          <div className="mt-2 h-3 w-3 rounded-full bg-cyan-400"></div>
        </div>
      </motion.div>
    </section>
  );
}