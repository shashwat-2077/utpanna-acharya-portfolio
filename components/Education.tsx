
import React from 'react';
import Section from './Section';
import { EDUCATION_DATA } from '../constants';
import type { EducationItem } from '../types';
import { GraduationCap } from 'lucide-react';

const EducationCard: React.FC<{ item: EducationItem; isLast: boolean }> = ({ item, isLast }) => (
    <div className="relative pl-8 sm:pl-10 py-4">
        <div className="absolute left-0 top-4 h-full border-l-2 border-slate-200"></div>
        <div className="absolute left-[-9px] sm:left-[-11px] top-4 w-5 h-5 bg-white border-2 border-teal rounded-full flex items-center justify-center">
            {item.ongoing && <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div>}
        </div>
        <p className="text-base font-semibold uppercase text-gray-600">{item.period}</p>
        <h3 className="text-2xl font-bold text-navy mt-1">{item.degree}</h3>
        <p className="text-lg text-gray-800">{item.details}</p>
        <p className="text-lg font-medium text-teal mt-1">{item.result}</p>
    </div>
);

const Education: React.FC = () => {
    return (
        <Section id="education" title="Education" className="bg-slate-100">
            <div className="relative">
                {EDUCATION_DATA.map((item, index) => (
                    <EducationCard key={index} item={item} isLast={index === EDUCATION_DATA.length - 1} />
                ))}
            </div>
        </Section>
    );
};

export default Education;
