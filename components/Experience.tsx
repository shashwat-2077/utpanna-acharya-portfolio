
import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA, RESEARCH_DATA } from '../constants';
import type { ExperienceItem, ResearchItem } from '../types';
import { CheckCircle, Award } from 'lucide-react';

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
            <h3 className="text-3xl font-bold text-navy">{item.title}</h3>
            <p className="text-lg font-medium text-teal">{item.period}</p>
        </div>
        <p className="text-xl font-semibold text-gray-700">{item.company}, {item.location}</p>
        <ul className="mt-4 space-y-2">
            {item.points.map((point, index) => (
                <li key={index} className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-teal mt-1.5 mr-3" />
                    <span className="text-lg text-gray-800">{point}</span>
                </li>
            ))}
        </ul>
    </div>
);

const ResearchCard: React.FC<{ item: ResearchItem }> = ({ item }) => (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
        <div className="flex items-start">
            <Award className="flex-shrink-0 h-6 w-6 text-teal mt-1 mr-3" />
            <div>
                <h3 className="text-2xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-lg text-gray-800">{item.description}</p>
            </div>
        </div>
    </div>
);

const Experience: React.FC = () => {
    return (
        <Section id="experience" title="Experience">
            <h2 className="text-3xl font-bold text-navy mb-6">Internship Case Studies</h2>
            {EXPERIENCE_DATA.map((item, index) => (
                <ExperienceCard key={index} item={item} />
            ))}
            <h2 className="text-3xl font-bold text-navy mb-6 mt-12">Research & Publications</h2>
            {RESEARCH_DATA.map((item, index) => (
                <ResearchCard key={index} item={item} />
            ))}
        </Section>
    );
};

export default Experience;
