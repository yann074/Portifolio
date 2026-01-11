import { Folder, ExternalLink, Github, Code2 } from "lucide-react";

function Projects() {
  const projetos = [
    {
      id: 1,
      title: "Terrário",
      description: "Landing Page responsiva desenvolvida para uma empresa de terrários, com foco em design biofílico e conversão.",
      techs: ["React", "CSS3", "Responsividade"],
      link: "https://lading-terrario.vercel.app",
      link_git: "https://github.com/yann074/LadingTerrario",
    },
    {
      id: 2,
      title: "Carangonde",
      description: "Plataforma web para uma ONG, gerenciando divulgação de cursos, eventos e captação de voluntários.",
      techs: ["Web Design", "UI/UX", "Front-end"],
      link: "https://desenvolvimento-carangonde.vercel.app",
      link_git: "https://github.com/yann074/desenvolvimento_carangonde"
    },
    {
      id: 3,
      title: "Desafio Técnico",
      description: "Solução Full Stack para desafio empresarial de movimentações financeiras. Arquitetura limpa e escalável.",
      techs: ["Laravel", "Vue.js", "MySQL", "API Rest"],
      link: "https://github.com/yann074/DesafioTecnico-MovimentacoesFinanceiras", // Se não tiver deploy, melhor levar pro repo
      link_git: "https://github.com/yann074/DesafioTecnico-MovimentacoesFinanceiras",
    },
    {
      id: 4,
      title: "Sistema de RH",
      description: "Aplicação robusta para gestão de vagas e candidaturas. Controle de acesso e fluxo de aprovação.",
      techs: ["Back-end", "Segurança", "Database"],
      link: "https://github.com/yann074/tcc-backend",
      link_git: "https://github.com/yann074/tcc-backend",
    },
    {
      id: 5,
      title: "Auth System",
      description: "Implementação completa de sistema de autenticação e autorização segura para estudos aprofundados.",
      techs: ["Laravel", "Sanctum", "Auth"],
      link: "https://github.com/yann074/AutenticacaoLaravel",
      link_git: "https://github.com/yann074/AutenticacaoLaravel",
    },
    {
      id: 6,
      title: "Tio Do Pastel",
      description: "Landing Page de alta performance para comércio local, focada em cardápio digital e atração de clientes.",
      techs: ["HTML", "CSS", "Marketing"],
      link: "https://tiodopastel.vercel.app", // Adicionei o https:// para evitar erros
      link_git: "https://github.com/yann074/tiodopastel",
    },
  ];

  return (
  <section id="projetos" className="py-20 bg-slate-50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Título da Seção */}
        <div className="flex flex-col items-center mb-16" data-aos="fade-up">
          <div className="p-3 bg-indigo-100 rounded-full mb-4">
            <Folder size={32} className="text-indigo-600" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">
            Projetos em Destaque
          </h2>
          <p className="text-slate-600 text-center max-w-2xl">
            Uma seleção de aplicações web e desafios técnicos que demonstram minhas habilidades em resolver problemas reais.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto) => (
            <article 
              key={projeto.id}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-indigo-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              
              {/* Conteúdo do Card */}
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <Code2 size={24} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {projeto.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {projeto.description}
                </p>

                {/* Tags de Tecnologias */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {projeto.techs.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rodapé do Card (Links) */}
              <div className="p-6 border-t border-slate-100 flex gap-4">
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold py-2 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
                <a
                  href={projeto.link_git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href="https://github.com/yann074?tab=repositories" target="_blank" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline">
                Ver todos os repositórios <ExternalLink size={16}/>
            </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;