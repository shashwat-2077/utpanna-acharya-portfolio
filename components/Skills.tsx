
import React from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
    return (
        <Section id="skills" title="Professional Skills" className="bg-slate-100">
            <div className="flex flex-wrap gap-4 justify-center">
                {SKILLS_DATA.map((skill, index) => (
                    <span key={index} className="bg-teal/20 text-teal-800 text-lg font-semibold px-5 py-2.5 rounded-full shadow-sm">
                        {skill}
                    </span>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
