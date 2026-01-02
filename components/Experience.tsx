import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0a1525]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
           <div className="inline-block p-3 rounded-full bg-slate-900 border border-slate-800 mb-4">
            <svg className="w-6 h-6 text-orange-500 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
           </div>
           <h2 className="text-4xl font-black text-white uppercase tracking-tight">Professional Journey</h2>
           <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
             A track record of delivering high-impact data and AI solutions in enterprise environments.
           </p>
        </div>

        <div className="space-y-6">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div 
              key={exp.id} 
              className="bg-slate-900 border border-slate-800 p-8 md:p-10 flex flex-col md:flex-row gap-8 hover:border-orange-500/50 transition-colors group"
            >
              {/* Number/Year Box */}
              <div className="hidden md:flex flex-col items-center justify-center w-24 h-24 bg-slate-950 border border-slate-800 group-hover:bg-orange-600 transition-colors flex-shrink-0">
                 <span className="text-3xl font-black text-white">{index + 1}</span>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">{exp.role}</h3>
                    <p className="text-lg text-slate-300 font-medium">{exp.company} <span className="mx-2 text-slate-600">|</span> <span className="text-slate-400 text-sm">{exp.location}</span></p>
                  </div>
                  <div className="mt-2 md:mt-0 px-4 py-1 border border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 whitespace-nowrap">
                    {exp.duration}
                  </div>
                </div>
                
                <ul className="space-y-2 mt-6">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-slate-400 leading-relaxed text-sm md:text-base flex items-start">
                      <span className="mr-3 text-orange-500 mt-1.5 text-xs">◆</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;