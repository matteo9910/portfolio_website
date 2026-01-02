import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
             Say Hi! <span className="text-slate-400 font-light block text-3xl md:text-5xl mt-2">and tell me about your idea</span>
           </h2>
           <div className="w-24 h-1 bg-orange-500 mx-auto mt-8"></div>
        </div>

        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">Name*</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Hello..." 
                className="w-full border-b border-slate-300 py-3 text-xl focus:outline-none focus:border-orange-500 bg-transparent placeholder:text-slate-300"
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">Email*</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Where can I reply?" 
                className="w-full border-b border-slate-300 py-3 text-xl focus:outline-none focus:border-orange-500 bg-transparent placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="company" className="block text-sm font-bold text-slate-900 mb-2">Company Name</label>
             <input 
                type="text" 
                id="company" 
                placeholder="Your company or website?" 
                className="w-full border-b border-slate-300 py-3 text-xl focus:outline-none focus:border-orange-500 bg-transparent placeholder:text-slate-300"
              />
          </div>

          <div className="pt-8 flex justify-end">
            <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors flex items-center gap-3">
              Send Me <Send size={20} />
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;