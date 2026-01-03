import React from 'react';
import { FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HERO_DATA, MARQUEE_SKILLS } from '../constants';

interface HeroProps {
  onContactClick: () => void;
  onViewCV: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick, onViewCV }) => {
  return (
    <section id="about" className="relative pt-32 pb-10 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
                👋 Hello World
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">{HERO_DATA.name.split(' ')[0]}</span>
                <br />
                <span className="text-4xl lg:text-5xl font-bold text-slate-400">{HERO_DATA.role}</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed border-l-4 border-orange-500 pl-6 py-2 bg-slate-900/50">
                {HERO_DATA.tagline}
              </p>
            </div>

            <div className="space-y-3">
              {HERO_DATA.mission.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <CheckCircle2 size={20} className="text-orange-500 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-300 font-light">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onContactClick}
                className="flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-orange-900/20 hover:shadow-orange-700/40 transform hover:-translate-y-1"
              >
                <span>Let's Talk</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={onViewCV}
                className="flex items-center justify-center space-x-2 border border-slate-700 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-slate-800"
              >
                <span>View CV</span>
                <FileText size={20} />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
             <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[550px]">
                {/* Decorative elements */}
                <div className="absolute inset-0 border-2 border-slate-800 rounded-tr-[100px] rounded-bl-[100px] translate-x-4 translate-y-4"></div>
                <div className="absolute -top-10 -right-10 text-orange-500/20">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="2" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#dots)" />
                  </svg>
                </div>
                
                {/* Main Image */}
                <div className="w-full h-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden transition-all duration-700 border-4 border-orange-500/30 hover:border-orange-500/50 shadow-2xl shadow-orange-900/20">
                  <img
                    src="/gemini_profile_img.png"
                    alt="Matteo Calza-Metre - AI Engineer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-10 -left-10 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-2xl flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold text-black text-xs">AI</div>
                   <div>
                      <p className="text-white font-bold text-sm">Open to Work</p>
                      <p className="text-xs text-slate-400">Available for projects</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="mt-24 bg-orange-600 rotate-1 transform origin-left w-[110%] -ml-[5%] py-4 shadow-2xl relative z-10 border-y-4 border-slate-900">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((skill, i) => (
              <span key={i} className="text-black font-black uppercase text-xl mx-8 tracking-widest italic">
                {skill} <span className="text-white mx-2">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;