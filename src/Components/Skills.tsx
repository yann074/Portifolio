import { FaPhp, FaLaravel, FaVuejs, FaReact, FaDocker, FaFigma } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiTailwindcss, SiJavascript } from 'react-icons/si';

const skills = [
  { icon: <FaPhp size={40} />, name: "PHP" },
  { icon: <FaLaravel size={40} />, name: "LARAVEL" },
  { icon: <FaVuejs size={40} />, name: "VUE" },
  { icon: <FaReact size={40} />, name: "REACT" },
  { icon: <FaDocker size={40} />, name: "DOCKER" },
  { icon: <SiMysql size={40} />, name: "MYSQL" },
  { icon: <SiPostgresql size={40} />, name: "POSTGRESQL" },
  { icon: <SiTailwindcss size={40} />, name: "TAILWIND" },
  { icon: <FaFigma size={40} />, name: "FIGMA UI/UX" },
  { icon: <SiJavascript size={40} />, name: "JAVASCRIPT" },
];

function Skills() {
  return (
    <div data-aos="fade-right" className="p-5 text-center" id="linguagens">
      <h2 className="text-2xl font-bold mb-5 flex justify-center items-center gap-2">
        LINGUAGENS
      </h2>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-2 bg-transparent border border-white/30 rounded-lg p-3  transform transition-transform hover:scale-105"
          >
            <div className="w-16 h-16 bg-gray-200 rounded-full flex justify-center items-center overflow-hidden">
              {skill.icon}
            </div>
            <h4 className="text-lg font-medium">{skill.name}</h4>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Skills;
