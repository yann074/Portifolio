import { useState } from 'react';
import type { ReactNode } from 'react';
import { Github, Linkedin, FileText, GraduationCap, Menu, X } from "lucide-react";
import yann from "./assets/yann.png";
import curriculo from "../public/curriculoyannsmith.pdf";
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Worker from './Components/Worker';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Fundo Light Premium: Slate-50 com um leve gradiente para Slate-100
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* HEADER com Glassmorphism sutil */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href='#' className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-80 transition">
            Yann Smith
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 font-medium">
              {['Sobre mim', 'Linguagens', 'Trabalhos', 'Projetos'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(" ", "")}`} 
                    className="text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            <a href='#contato' className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5">
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-xl absolute w-full left-0 animate-in fade-in slide-in-from-top-4">
            <ul className="flex flex-col p-6 space-y-4 text-center">
              <li><a href='#sobremim' onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 hover:text-indigo-600">Sobre mim</a></li>
              <li><a href='#linguagens' onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 hover:text-indigo-600">Linguagens</a></li>
              <li><a href='#trabalhos' onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 hover:text-indigo-600">Trabalhos</a></li>
              <li><a href='#projetos' onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 hover:text-indigo-600">Projetos</a></li>
              <li><a href='#contato' onClick={() => setIsOpen(false)} className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg mt-2 font-semibold">Contato</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between" id='id1'>
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0" data-aos="fade-right">
          <div className="space-y-2 mb-6">

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
              Yann Smith
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-500">
              Desenvolvedor <span className="text-indigo-600">Full Stack</span>
            </h2>
          </div>
          
          <p className="text-lg text-slate-600 italic mb-10 border-l-4 border-indigo-500 pl-4 max-w-lg">
            "Transformando ideias complexas em interfaces elegantes e sistemas robustos."
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <SocialButton href="https://www.linkedin.com/in/yann-smiith/" icon={<Linkedin />} label="LinkedIn" />
            <SocialButton href="https://github.com/yann074" icon={<Github />} label="GitHub" />
            <SocialButton href={curriculo} icon={<FileText />} label="Currículo" isDownload />
          </div>
        </div>

        <div className="relative w-56 h-56 md:w-80 md:h-80" data-aos="fade-left">
          {/* Efeito de brilho sutil atrás da foto */}
          <div className="absolute inset-0 bg-indigo-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <img 
            src={yann} 
            alt="Yann Smith" 
            className="relative w-full h-full object-cover rounded-full border-8 border-white shadow-2xl" 
          />
        </div>
      </section>

      {/* SOBRE MIM - Fundo levemente contrastante para separar seções */}
      <section id="sobremim" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl" data-aos="fade-up">
          <div className="flex flex-col items-center gap-3 mb-12">
            <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600">
              <GraduationCap size={40} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Sobre Mim</h2>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-6 text-lg leading-relaxed text-slate-700">
            <p className="text-lg font-medium">
              Atualmente atuo como <strong className="text-indigo-600">Desenvolvedor Júnior na Liberty TI</strong> (efetivado em Nov/2025), onde desenvolvo sistemas de gestão e integrações críticas para clientes.
            </p>

            <p>
              Trabalho com desenvolvimento full‑stack: <span className="font-semibold">TypeScript + React</span> no front-end e <span className="font-semibold">Spring Boot</span> no back-end. Uso Docker para conteinerização e mantenho pipelines de <strong>CI/CD</strong> para deploy automatizado.
            </p>

            <p>
              Também tenho experiência com autenticação (Keycloak), monitoramento (Grafana), desenvolvimento mobile (React Native) e design de interfaces (Figma). Gerencio e contribuo para sistemas open‑source usados internamente.
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {['TypeScript','React','Spring Boot','Docker','CI/CD','Keycloak','Grafana','React Native','Figma'].map((s) => (
                <span key={s} className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-medium">{s}</span>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-slate-900">Principais contribuições</h4>
              <ul className="list-disc list-inside mt-3 text-slate-700">
                <li>Implementação de features full‑stack em TypeScript/React e Spring Boot.</li>
                <li>Automatização de deploys com pipelines CI/CD e containers Docker.</li>
                <li>Integração de autenticação com Keycloak e monitoramento com Grafana.</li>
              </ul>
            </div>

            <blockquote className="bg-white p-5 rounded-2xl border-l-4 border-indigo-500 italic text-center shadow-sm">
              "Construir sistemas confiáveis e escaláveis é o meu principal objetivo." 
            </blockquote>
          </div>
        </div>
      </section>

      {/* SEÇÕES EXTERNAS */}
      <div className="space-y-0">
        <Skills />
        <Worker />
        <Projects />
        <Contact />
      </div>

      <footer className="py-12 text-center text-slate-500 text-sm bg-white border-t border-slate-100">
        <p>© {new Date().getFullYear()} Yann Smith. Todos os Direitos Reservados.</p>
      </footer>
    </main>
  );
}

function SocialButton({ href, icon, label, isDownload = false }: { href: string; icon: ReactNode; label: string; isDownload?: boolean; }) {
  return (
    <a 
      href={href} 
      target={isDownload ? "_self" : "_blank"} 
      rel="noopener noreferrer" 
      download={isDownload ? "Curriculo Yann.pdf" : undefined}
      className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 hover:border-indigo-500 hover:text-indigo-600 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all group"
    >
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span className="font-semibold">{label}</span>
    </a>
  );
}

export default App;