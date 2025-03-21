import { useState } from 'react';
import { Github, Linkedin, FileText, GraduationCap } from "lucide-react";
import yann from "./assets/yann.png"
import curriculo from "../public/curriculoyannsmith.pdf";
import './App.css'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import "./App.css"

function App() {
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
  localStorage.theme = "light";
  localStorage.theme = "dark";
  localStorage.removeItem("theme");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <main className="dark:bg-black">
        {/* HEADER*/}
        <header>
          <nav className="bg-white p-9 shadow-md dark:bg-black">
            <div className="container mx-auto flex justify-between items-center">
              <a href='#' className="text-gray-800 text-2xl font-bold dark:text-white">Yann Smith</a>

              <div>


              <button
                className="text-gray-800 md:hidden focus:outline-none dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>

              <div className={`md:flex items-center ${isOpen ? "block" : "hidden"}`}>
              <ul className="md:flex md:space-x-6 space-y-4 md:space-y-0">
                  <li>
                    <a href='#sobremim' className="text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-gray-300">Sobre mim</a>
                  </li>
                  <li>
                    <a href='#linguagens' className="text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-gray-300">Linguagens</a>
                  </li>
                  <li>
                    <a href='#projetos' className="text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-gray-300">Projetos</a>
                  </li>
                  <li>
                    <a href='#contato' className="bg-gray-800 text-white px-4 py-2 rounded-lg mt-4 md:mt-0 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600">Contato</a>
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </nav>
        </header>

        <section>
          {/* PRIMEIRA IMPRESSÃO*/}
          <div className="flex flex-col md:flex-row justify-between items-center w-4/5 mx-auto my-8 font-sans" data-aos="fade-right" id='id1'>

            <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-lg mb-6 md:mb-0">
              <div className="mb-4 test">
                <h1 className="text-4xl font-bold typewriter dark:text-white">Yann Smith</h1>
                <h4 className="text-xl text-gray-600 dark:text-white">Desenvolvedor Full Stack</h4>
              </div>
              <p className="text-lg italic dark:text-white">"Transformando Ideias em Sites"</p>

              <div className="flex space-x-4 mt-6">
                <a href="https://www.linkedin.com/in/yann-smiith/" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-300 border border-black rounded-lg p-3 transition dark:bg-gray-700 dark:border-gray-500 dark:hover:bg-gray-600">
                  <Linkedin className="w-8 h-8 text-gray-800 dark:text-white" />
                </a>
                <a href="https://github.com/yann074" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-300 border border-black rounded-lg p-3 transition dark:bg-gray-700 dark:border-gray-500 dark:hover:bg-gray-600">
                  <Github className="w-8 h-8 text-gray-800 dark:text-white" />
                </a>
                <a
                  href={curriculo}
                  download="Curriculo Yann.pdf"
                  className="bg-white hover:bg-gray-300 border border-black rounded-lg p-3 transition dark:bg-gray-700 dark:border-gray-500 dark:hover:bg-gray-600"
                >
                  <FileText className="w-8 h-8 text-gray-800 dark:text-white" />
                </a>
              </div>
            </div>

            <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-700">
              <img src={yann} alt="Yann Smith" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* SOBRE MIM */}
        <section>
          <div data-aos="fade-right" className="w-4/5 mx-auto text-center text-lg md:text-xl dark:text-white" id="sobremim">
            <section className="space-y-6">
              <div className="flex justify-center items-center gap-2 mt-20">
                <GraduationCap size={32} className="text-gray-800 dark:text-white" />
                <h1 className="text-4xl font-bold dark:text-white">Sobre mim</h1>
              </div>
              <div className="space-y-4">
                <p>
                  Olá! Sou um desenvolvedor Full Stack e residente na cidade de Feira de Santana,
                  BA - Brasil. Atualmente, estou cursando o quinto semestre
                  no curso de Análise e Desenvolvimento de Sistemas na Universidade Nobre (Unifan).
                </p>
                <p>
                  Comecei minha jornada como aspirante a programador no primeiro semestre de 2023,
                  quando iniciei minha graduação em Análise e Desenvolvimento de Sistemas na Unifan,
                  obtendo cada vez mais conhecimento tanto no Front-End quanto no Back-End. Para complementar
                  meu desenvolvimento como programador, fiz cursos externos, como PHP, Vue.js 3 e React, ambos em
                  Desenvolvimento Web, durante o ano de 2023, além de ter realizado um curso de Laravel - Desenvolvimento
                  Web no primeiro semestre de 2024, em 2025, tenho conhecimento em APIs e arquiteturas como MVC. Diante das minhas capacidades mencionadas, estou procurando meu primeiro
                  emprego como desenvolvedor Back-End, buscando acrescentar experiência e aprendizado. "Aprender nunca é um fardo,
                  então estou em constante evolução".
                </p>
              </div>
            </section>
          </div>
        </section>


        {/* PROJETOS*/}
        <Projects />
        {/* LINGUAGENS*/}
        < Skills />

        {/* CONTATOS*/}
        <Contact />
        <footer className="h-32 flex flex-col items-center justify-center p-4 text-sm text-gray-700 dark:text-gray-300">
          <hr className="w-3/5 border-gray-400 dark:border-gray-600" />
          <h3 className="mt-3 dark:text-gray-300">© 2024 Yann Smith. Todos os Direitos Reservados.</h3>
        </footer>

      </main>
    </>
  )
}

export default App
