import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

interface ExperienceProps {
  onViewCV: () => void;
}

const Experience: React.FC<ExperienceProps> = ({ onViewCV }) => {
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

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-slate-800"></div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 md:pl-24">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-0 w-4 h-4 -translate-x-[7px] bg-orange-500 rounded-full border-4 border-[#0a1525] z-10 group-hover:scale-125 transition-transform"></div>

                {/* Content Card */}
                <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 hover:border-orange-500/50 transition-all group">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4 gap-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-slate-300 font-medium mt-1">
                        {exp.company} <span className="mx-2 text-slate-600">|</span>
                        <span className="text-slate-400 text-sm">{exp.location}</span>
                      </p>
                    </div>
                    <div className="px-4 py-2 border border-orange-500/30 bg-orange-500/5 rounded-full text-xs font-bold uppercase tracking-wider text-orange-500 whitespace-nowrap">
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-slate-400 leading-relaxed text-sm md:text-base flex items-start">
                        <span className="mr-3 text-orange-500 mt-1.5">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onViewCV}
            className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-orange-900/20 hover:shadow-orange-700/40 transform hover:-translate-y-1"
          >
            <span>View More</span>
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Experience;
