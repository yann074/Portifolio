import React from "react";
import { Languages, Code, Database, Boxes } from 'lucide-react';
import phppg from "../assetpng/phplg.png";
import laravelpg from "../assetpng/laravellg.png";
import vuelg from "../assetpng/vuelg.png";
import reactlg from "../assetpng/reactlg.png";
import dockerlg from "../assetpng/dockerlg.png";
import mysqllg from "../assetpng/mysqllg.png";
import postgresqllg from "../assetpng/postgresqllg.png";
import taiwlind from "../assetpng/taiwlindlg.png";
import clg from "../assetpng/clg.png";
import jslg from "../assetpng/jslg.png";

const skills = [
  { img: phppg, name: "PHP" },
  { img: laravelpg, name: "LARAVEL" },
  { img: vuelg, name: "VUE" },
  { img: reactlg, name: "REACT" },
  { img: dockerlg, name: "DOCKER" },
  { img: mysqllg, name: "MYSQL" },
  { img: postgresqllg, name: "POSTGRESQL" },
  { img: taiwlind, name: "TAILWIND" },
  { img: clg, name: "DESIGN" },
  { img: jslg, name: "JAVASCRIPT" },
];

function Skills() {
  return (
    <div data-aos="fade-right" className="p-5" id="linguagens">
      <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
         LINGUAGENS
      </h2>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-3 bg-transparent border border-white/30 rounded-lg p-3 hover:bg-white/10 transition">
            <img src={skill.img} alt={`Logo ${skill.name}`} className="w-10 h-10" />
            <h4 className="text-lg font-medium">{skill.name}</h4>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Skills;
