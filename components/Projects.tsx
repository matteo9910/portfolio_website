import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
  onStressDetectionClick?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick, onStressDetectionClick }) => {
  const handleProjectClick = (project: Project) => {
    // If it's the Wearable Stress Detection project (p2), open dedicated page
    if (project.id === 'p2' && onStressDetectionClick) {
      onStressDetectionClick();
    } else {
      // Otherwise, open the generic modal
      onProjectClick(project);
    }
  };
  return (
    <section id="projects" className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center mb-20">
          <div>
             <div className="flex items-center gap-2 mb-2">
                <div className="w-12 h-1 bg-orange-500"></div>
                <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Case Studies</span>
             </div>
             <h2 className="text-5xl font-black text-white uppercase">Selected Works</h2>
          </div>
          <div className="hidden md:block text-right">
             <p className="text-slate-500 font-mono text-sm">
                ENGINEERING <br/> PORTFOLIO
             </p>
          </div>
        </div>

        <div className="space-y-32">
          {PROJECTS_DATA.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}
            >
              
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative">
                 <div className="relative overflow-hidden rounded-lg aspect-[4/3] group-hover:shadow-[0_0_50px_rgba(249,115,22,0.15)] transition-all duration-500">
                    <div className="absolute inset-0 bg-orange-500/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    />
                 </div>
                 {/* Decorative number */}
                 <div className={`absolute -top-10 text-[120px] font-black text-white/5 z-0 ${index % 2 === 0 ? '-left-10' : '-right-10'}`}>
                    0{index + 1}
                 </div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 z-10">
                <div className="inline-block px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs font-bold text-orange-500 mb-6 uppercase tracking-wider">
                  {project.category}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                   {project.techStack.map(tech => (
                      <span key={tech} className="text-slate-500 text-sm font-mono border-r border-slate-700 last:border-0 pr-3 mr-1">
                        {tech}
                      </span>
                   ))}
                </div>

                <div className="flex gap-6">
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="flex items-center gap-2 text-white font-bold text-lg border-b-2 border-orange-500 pb-1 hover:text-orange-500 transition-colors"
                  >
                    See Details <ArrowUpRight size={20} />
                  </button>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-slate-500 font-bold text-lg border-b-2 border-transparent pb-1 hover:text-white transition-colors"
                  >
                    Github <Github size={20} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;