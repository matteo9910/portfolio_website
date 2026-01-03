import React from 'react';
import { Linkedin, Github, Mail, Database, Brain, Code2 } from 'lucide-react';
import { SOCIAL_LINKS, SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes("AI")) return <Brain size={32} />;
    if (title.includes("Data")) return <Database size={32} />;
    return <Code2 size={32} />;
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Socials */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-800 pb-8 gap-8">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2 block">My Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none">
              What I Bring<br />To The Table
            </h2>
          </div>
          
          <div className="flex gap-6">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors group">
              <Linkedin size={24} />
              <span className="uppercase text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">LinkedIn</span>
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
              <Github size={24} />
              <span className="uppercase text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">Github</span>
            </a>
            <a href={SOCIAL_LINKS.email} className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors group">
              <Mail size={24} />
              <span className="uppercase text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">Email</span>
            </a>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-900 p-8 border border-slate-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-8 text-orange-500 bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {getIcon(category.title)}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-slate-400 group-hover:text-slate-200 transition-colors">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;