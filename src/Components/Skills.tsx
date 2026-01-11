import { FaPhp, FaLaravel, FaVuejs, FaReact, FaDocker, FaFigma, FaJava } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiTailwindcss, SiJavascript, SiSpring, SiKeycloak, SiGrafana } from 'react-icons/si';
import { Cpu, Server, Layout, Database } from "lucide-react"; // Ícones para os títulos das categorias

// Organização por áreas de conhecimento
const skillCategories = [
  {
    title: "Backend & Arquitetura",
    icon: <Server size={24} />,
    skills: [
      { icon: <FaPhp size={32} className="text-indigo-600" />, name: "PHP" },
      { icon: <FaLaravel size={32} className="text-red-600" />, name: "Laravel" },
      { icon: <FaJava size={32} className="text-red-500" />, name: "Java" },
      { icon: <SiSpring size={32} className="text-green-500" />, name: "Spring Boot" },
      { icon: <SiJavascript size={32} className="text-yellow-400" />, name: "Node/JS" },
    ]
  },
  {
    title: "Frontend & Mobile",
    icon: <Layout size={24} />,
    skills: [
      { icon: <FaReact size={32} className="text-blue-400" />, name: "React" },
      { icon: <FaReact size={32} className="text-blue-500" />, name: "React Native" },
      { icon: <FaVuejs size={32} className="text-green-500" />, name: "Vue.js" },
      { icon: <SiTailwindcss size={32} className="text-cyan-400" />, name: "Tailwind" },
      { icon: <FaFigma size={32} className="text-pink-500" />, name: "Figma" },
    ]
  },
  {
    title: "DevOps, Banco & Segurança",
    icon: <Database size={24} />,
    skills: [
      { icon: <SiMysql size={32} className="text-blue-600" />, name: "MySQL" },
      { icon: <SiPostgresql size={32} className="text-blue-400" />, name: "PostgreSQL" },
      { icon: <FaDocker size={32} className="text-blue-500" />, name: "Docker" },
      { icon: <SiKeycloak size={32} className="text-orange-500" />, name: "Keycloak" },
      { icon: <SiGrafana size={32} className="text-orange-400" />, name: "Grafana" },
    ]
  }
];

function Skills() {
  return (
    <section id="linguagens" className="py-20 bg-white transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block p-3 rounded-full bg-indigo-100 mb-4">
            <Cpu size={32} className="text-indigo-600" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Tech Stack & Ferramentas
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Minha caixa de ferramentas técnica, focada em performance, segurança e escalabilidade.
          </p>
        </div>

        {/* Grid de Categorias */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-xl group"
            >
              {/* Título da Categoria */}
              <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
                <span className="text-indigo-600 group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <h3 className="text-xl font-bold text-slate-800">
                  {category.title}
                </h3>
              </div>

              {/* Grid de Skills Interno */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  >
                    <div className="mb-3 transform transition-transform group-hover/skill:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-semibold text-slate-600 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;