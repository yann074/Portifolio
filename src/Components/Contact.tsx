import { useState } from 'react';
import { Mail, Linkedin, Github, Copy, CheckCircle2 } from "lucide-react";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "yannsmiithdev@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
  <section id="contato" className="py-24 bg-slate-100 transition-colors duration-300">
      <div className="container mx-auto px-6" data-aos="fade-up">
        
  <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="p-8 md:p-12 text-center">
            
            <div className="inline-flex items-center justify-center p-4 bg-indigo-100 rounded-full mb-6">
              <Mail size={40} className="text-indigo-600" />
            </div>

            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Vamos construir algo juntos?
            </h2>
            
            <p className="text-slate-600 text-lg mb-10">
              Estou aberto a novas oportunidades e parcerias em projetos desafiadores. 
              Sinta-se à vontade para entrar em contato!
            </p>

            {/* Email Display com Copy Function */}
            <div className="flex flex-col items-center gap-6">
              <div 
                onClick={copyToClipboard}
                className="group relative flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 cursor-pointer hover:border-indigo-500 transition-all w-full md:w-auto"
              >
                <Mail className="text-slate-400 group-hover:text-indigo-500 transition-colors" size={20} />
                <span className="text-slate-700 font-medium break-all">{email}</span>
                <button className="ml-2 p-2 text-slate-400 hover:text-indigo-500 transition-colors">
                  {copied ? <CheckCircle2 size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
                
                {copied && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs py-1 px-3 rounded-md shadow-lg">
                    Copiado!
                  </span>
                )}
              </div>

              {/* Redes Sociais */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/yann-smiith/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-700 hover:text-indigo-600 hover:shadow-lg hover:-translate-y-1 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
                
                <a 
                  href="https://github.com/yann074" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-700 hover:text-indigo-600 hover:shadow-lg hover:-translate-y-1 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Banner inferior decorativo sutil */}
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;