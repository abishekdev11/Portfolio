const projects = [
  {
    title: "E-Commerce App",
    desc: "Full MERN stack shopping platform with authentication and cart system",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-ecommerce-app.vercel.app",
  },
  {
    title: "E.com website",
    desc: "Real-time e.com web application using React.js and Django",
    github: "https://github.com/yourusername/chat-app",
    live: "https://your-chat-app.vercel.app",
  },
  {
    title: "Portfolio Website",
    desc: "Animated developer portfolio built with React.js and Tailwind",
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-6 rounded-2xl bg-white/5 border border-white/10
            hover:shadow-cyan-500/30 hover:shadow-2xl hover:-translate-y-2
            transition-all duration-300 text-left flex flex-col justify-between"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>

            {/* Description */}
            <p className="text-gray-400 mt-2">{p.desc}</p>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <a
                href={p.github}
                target="_blank"
                className="px-4 py-2 text-sm rounded-lg bg-gray-800 hover:bg-gray-700 transition"
              >
                GitHub
              </a>

              <a
                href={p.live}
                target="_blank"
                className="px-4 py-2 text-sm rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}