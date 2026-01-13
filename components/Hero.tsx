
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, Linkedin, Download } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="w-full min-h-screen flex items-center justify-center bg-off-white pt-20 md:pt-0">
            <div className="container mx-auto max-w-4xl px-4 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <div className="md:order-2">
                        <picture>
                            <source srcSet="/images/display_picture.webp" type="image/webp" />
                            <img 
                                src="/images/display_picture.png"
                                alt="Utpanna Acharya"
                                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white"
                            />
                        </picture>
                    </div>
                    <div className="md:order-1 flex-1">
                        <h1 className="text-5xl md:text-6xl font-bold text-navy tracking-tight">
                            {PERSONAL_INFO.name}
                        </h1>
                        <p className="mt-4 text-xl md:text-2xl font-medium text-teal">
                            {PERSONAL_INFO.tagline}
                        </p>
                        <p className="mt-6 max-w-xl mx-auto md:mx-0 text-xl text-gray-800 leading-relaxed">
                            A dedicated Personnel Management and Industrial Relations postgraduate with a focus on building fair, safe, and engaging workplaces through effective HR strategies and employee advocacy.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                            <a href={PERSONAL_INFO.resumeLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-teal hover:bg-teal-600 transition-colors shadow-lg">
                                <Download size={20} />
                                Download Resume
                            </a>
                            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 text-lg font-medium rounded-md text-navy bg-white hover:bg-slate-100 transition-colors shadow-lg">
                                Contact Me
                            </a>
                        </div>
                         <div className="mt-8 flex items-center justify-center md:justify-start gap-6 text-lg text-gray-600">
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-teal transition-colors"><Mail size={20} /><span>Email</span></a>
                            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal transition-colors"><Linkedin size={20} /><span>LinkedIn</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
