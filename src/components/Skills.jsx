import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLock,
  FaPython
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Django", icon: <FaPython className="text-gray-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MYSQL",    icon: <FaDatabase className="text-yellow-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },  
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },  
  // { name: "JWT", icon: <FaLock className="text-yellow-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-full
            hover:bg-cyan-500 hover:scale-110 transition-all duration-300 cursor-pointer shadow-md"
          >
            {skill.icon}
            <span className="text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}