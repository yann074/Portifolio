import { ArrowRight, Folder } from "lucide-react";

function Projects() {
  const projetos = [
    {
      id: 1,
      title: "Terrário",
      description: "Uma Lading page responsiva sobre terrário feito para uma Empresa. Acesse para ver sobre",
      link: "https://lading-terrario.vercel.app",
      link_git: "https://github.com/yann074/LadingTerrario",

    },
    {
      id: 2,
      title: "Carangonde",
      description: "Desenvolvimento web para um Ong, contendo página de cursos e evento. Acesse para ver sobre.",
      link: "https://desenvolvimento-carangonde.vercel.app",
      link_git: "https://github.com/yann074/desenvolvimento_carangonde"
    },
    {
      id: 3,
      title: "Desafio Técnico",
      description: "Desafio técnico full stack feito para uma empresa, ultilizando Laravel e Vue. Acesse para ver sobre",
      link: "https://github.com/yann074/DesafioTecnico-MovimentacoesFinanceiras",
      link_git: "https://github.com/yann074/DesafioTecnico-MovimentacoesFinanceiras",
    },
    {
      id: 4,
      title: "Sistema de Rh",
      description: "Projeto para aplicação de vagas, ainda em desenvolvimento(Dados privados)",
      link: "https://github.com/yann074/tcc-backend",
      link_git: "https://github.com/yann074/tcc-backend",
    },
    {
      id: 5,
      title: "Sistema de Autenticação",
      description: "Sistema de Autenticação com Laravel, projeto desenvolvido para estudo)",
      link: "https://github.com/yann074/AutenticacaoLaravel",
      link_git: "https://github.com/yann074/AutenticacaoLaravel",
    },
    {
      id: 6,
      title: "Tio Do Pastel",
      description: "Uma Lading Page desenvolvida para uma pastelaria da cidade local",
      link: "tiodopastel.vercel.app",
      link_git: "https://github.com/yann074/tiodopastel",
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold mt-12 pb-1 text-center flex items-center justify-center gap-3 dark:text-white">
        <Folder size={30} />
        Projetos
      </h2>

      <div className="flex flex-wrap justify-center gap-6 p-4">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="w-80 h-70 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 dark:bg-gray-800 dark:text-white"
            id="projetos"
          >
            <div className="p-10">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">{projeto.title}</h2>
              <p className="text-sm text-gray-600 mt-2 dark:text-gray-400">{projeto.description}</p>
            </div>
            <div className="p-4 bg-gray-100 flex items-end flex-col dark:bg-gray-700">
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 flex items-center gap-1 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
              >
                Ver Site
                <ArrowRight size={20} />
              </a>
              <a
                href={projeto.link_git}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 flex items-center gap-1 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
              >
                Ver Repositório
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Projects;
