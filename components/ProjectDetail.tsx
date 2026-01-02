import React from 'react';
import { X, Github, Calendar, Code, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-slate-800 flex flex-col no-scrollbar">
        
        {/* Header Image */}
        <div className="relative h-64 sm:h-96 w-full flex-shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-black/50 text-white rounded-full hover:bg-orange-500 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="absolute bottom-8 left-8 right-8">
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              {project.category}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white">{project.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Sidebar Info */}
            <div className="space-y-8 col-span-1">
               <div>
                  <h4 className="text-sm uppercase font-bold text-slate-500 mb-3 flex items-center gap-2">
                    <Code size={16} /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
               </div>
               
               <div>
                  <h4 className="text-sm uppercase font-bold text-slate-500 mb-3 flex items-center gap-2">
                    <Calendar size={16} /> Timeline
                  </h4>
                  <p className="text-slate-300">2023 - Project Completed</p>
               </div>

               <a 
                 href={project.githubUrl}
                 className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-bold transition-colors border border-slate-700"
               >
                 <Github size={18} /> View Repository
               </a>
            </div>

            {/* Main Description */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-6">About the project</h3>
              <p className="text-slate-300 leading-relaxed text-lg mb-8">
                {project.fullContent}
              </p>
              
              <h3 className="text-xl font-bold text-white mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400">
                    <ChevronRight className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                    <span>Implemented advanced algorithms improving accuracy by 15% over baseline models.</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;