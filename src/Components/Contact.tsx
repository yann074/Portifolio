import { Mail, Linkedin, Github, Download } from "lucide-react";
import curriculo from "../../public/curriculoyannsmith.pdf";

function Contact() {
  return (
    <div data-aos="fade-right" className="w-full md:w-4/5 h-auto mx-auto text-center text-lg md:text-xl space-y-6 px-4 dark:bg-black" id="contato">
  <section className="space-y-8">
    <div className="mt-5 flex justify-center items-center gap-4">
      <Mail size={32} className="text-gray-800 dark:text-white" />
      <h1 className="text-4xl font-bold dark:text-white">Fale comigo</h1>
    </div>
    <p className="text-gray-600 dark:text-gray-300">
      Para falar comigo, aqui estão algumas formas de contato. Respondo assim que possível.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <a href="https://www.linkedin.com/in/yann-smiith/" target="_blank" rel="noopener noreferrer">
        <button className="bg-white border border-gray-300 rounded-lg p-3 hover:bg-gray-200 transition dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600">
          <Linkedin size={24} className="text-gray-800 dark:text-white" />
        </button>
      </a>
      <a href="https://github.com/yann074" target="_blank" rel="noopener noreferrer">
        <button className="bg-white border border-gray-300 rounded-lg p-3 hover:bg-gray-200 transition dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600">
          <Github size={24} className="text-gray-800 dark:text-white" />
        </button>
      </a>
      <a href={curriculo} download="Curriculo Yann.pdf">
        <button className="bg-white border border-gray-300 rounded-lg p-3 flex items-center gap-2 hover:bg-gray-200 transition dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600">
          <Download size={24} className="text-gray-800 dark:text-white" />
          <span className="text-sm text-gray-800 dark:text-white">Currículo</span>
        </button>
      </a>
      <div className="flex items-center gap-2 text-gray-800 dark:text-white">
        <Mail className="w-5 h-5" />
        <p>yannsmiithdev@gmail.com</p>
      </div>
    </div>
  </section>
</div>

  );
}

export default Contact;
