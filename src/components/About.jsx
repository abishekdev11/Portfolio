import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="about" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      {/* Main About Card */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="max-w-2xl mx-auto bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <p className="text-gray-300 leading-relaxed">
          I am ABISHEK, a Full Stack Developer passionate about building full-stack
          applications and have a strong interest in learning and executing new technologies
          to keep myself up to date in this modern tech environment.
        </p>

        {/* Toggle Button */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-6 px-6 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
        >
          {showDetails ? "Hide Personal Details" : "View Personal Details"}
        </button>

        {/* Hidden Personal Details */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="mt-6 text-left bg-black/30 p-4 rounded-xl border border-white/10"
            >
              <h3 className="text-cyan-400 font-semibold mb-3 text-center">
                Personal Details
              </h3>

              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="text-white font-medium">📍 Location:</span>{" "}
                  Coimbatore, Tamil Nadu, India
                </p>

                <p>
                  <span className="text-white font-medium">🎓 Education:</span>{" "}
                  B.SC (Computer Science )
                </p>

             <p>
  <span className="text-white font-medium">📧 Email:</span>{" "}
  <a
    href="mailto:abishekdev1321@gmail.com"
    className="text-cyan-400 hover:underline"
  >
    abishekdev1321@gmail.com
  </a>
</p>

<p>
  <span className="text-white font-medium">📱 Mobile:</span>{" "}
  <a
    href="tel:+918838051515"
    className="text-cyan-400 hover:underline"
  >
    +91 88380 51515
  </a>
</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}