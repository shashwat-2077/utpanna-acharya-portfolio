
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <Section id="contact" title="Get In Touch" className="bg-navy text-white">
            <div className="text-center max-w-2xl mx-auto">
                <p className="text-2xl text-light-slate mb-8">
                    I'm currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out. I'll do my best to get back to you!
                </p>
                <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="inline-block px-8 py-4 border border-teal text-teal text-2xl font-medium rounded-md hover:bg-teal/10 transition-colors"
                >
                    Say Hello
                </a>
                <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
                    <div className="flex items-center gap-3 text-lg text-lightest-slate">
                        <Mail className="h-6 w-6 text-teal" />
                        <span>{PERSONAL_INFO.email}</span>
                    </div>
                     <div className="flex items-center gap-3 text-lg text-lightest-slate">
                        <Phone className="h-6 w-6 text-teal" />
                        <span className="whitespace-nowrap">{PERSONAL_INFO.phone}</span>
                    </div>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-lightest-slate hover:text-teal transition-colors">
                        <Linkedin className="h-6 w-6" />
                        <span className="whitespace-nowrap">LinkedIn Profile</span>
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
