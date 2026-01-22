
import React from 'react';
import { PROJECTS } from '../constants.tsx';

const PortfolioShowcase: React.FC = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col mb-24 max-w-3xl">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">Things We've <br />Done</h2>
        <div className="h-1 w-24 bg-[#ff4d00] mb-8"></div>
        <p className="text-white/40 text-xl font-light">A look at some of the events we’ve hosted, brands we’ve helped, and stories we’ve told.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24">
        {PROJECTS.map((project, i) => (
          <div key={project.id} className={`group cursor-pointer ${i % 2 === 1 ? 'lg:mt-32' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#ff4d00]">
                {project.category}
              </span>
              <div className="h-[1px] w-12 bg-white/10"></div>
              <span className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">
                {project.tags[0]}
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 group-hover:text-[#ff4d00] transition-colors duration-500">
              {project.title}
            </h3>

            <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-[#111] relative border border-white/5">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">See the Details</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioShowcase;
