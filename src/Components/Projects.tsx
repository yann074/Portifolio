import { ArrowRight } from "lucide-react";

function Projects() {
  const projetos = [
    {
      id: 1,
      title: "Terrário",
      description: "Uma Lading Page feito para uma Empresa. Transformando Ideias em Sites",
      link: "https://lading-terrario.vercel.app",
    },
    {
      id: 2,
      title: "Carangonde",
      description: "Desenvolvimento de um WebSite para uma Ong da cidade (WEBSITE EM DESENVOLVIMENTO)",
      link: "https://desenvolvimento-carangonde.vercel.app",
    },
    {
      id: 3,
      title: "Tio Do Pastel",
      description: "WebSite Desenvolvido Para uma Pastelaria",
      link: "https://tiodopastel.vercel.app",
    },
    {
      id: 4,
      title: "Zacatec",
      description: "Um WebSite desenvolvido para uma empresa",
      link: "https://www.zacatec.com.br",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {projetos.map((projeto) => (
        <div
          key={projeto.id}
          className="w-80 h-70 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          id="projetos"
        >
          <div className="p-10">
            <h2 className="text-xl font-bold text-gray-800">{projeto.title}</h2>
            <p className="text-sl text-gray-600 mt-2">{projeto.description}</p>
          </div>
          <div className="p-4 bg-gray-100 flex justify-end">
            <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 flex items-center gap-1 hover:text-blue-800"
            >
              Ver Site
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
