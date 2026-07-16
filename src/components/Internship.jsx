const internships = [
  {
    title: "Python Full Stack Developer course 2025",
    desc: "Completed Pytthon Fullstack Developer course in Career Ladder institution, sundarapuram, coimbatore",
    tools: "Covered Teckstack : React.js, Django, My SQL, Tailwindcss, Bootstrap",
    live: "https://drive.google.com/file/d/15Q-iy8YnpqMAZTzA9tzOh_bZzphRly2F/view?usp=sharing",
  },
  {
    title: "MERN stack Developer Internship 2026",
    desc: "Completed Mern stack developer Internship and worked in real time projects in Eethal-Nad IT solution, eachanari, coimbatore",
    tools: "Covered Teckstack : React.js, Node.js, Express.js, MongoDB, Tailwindcss, Bootstrap",
    live: "https://drive.google.com/file/d/15Q-iy8YnpqMAZTzA9tzOh_bZzphRly2F/view?usp=sharing",
  }
  
];

export default function internship() {
  return (
    <section id="projects" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Courses and Internship</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {internships.map((p) => (
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

             {/* Tools and Techstack */}
            <p className="text-gray-400 mt-2">{p.tools}</p>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              
              <a
                href={p.live}
                target="_blank"
                className="px-4 py-2 text-sm rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
              >
                Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}