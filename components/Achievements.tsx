
import React from 'react';
import Section from './Section';
import { ACHIEVEMENTS_DATA } from '../constants';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
    return (
        <Section id="achievements" title="Achievements & Responsibilities">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {ACHIEVEMENTS_DATA.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <Trophy className="h-5 w-5 text-teal mt-1.5 mr-3 flex-shrink-0" />
                        <div className="text-lg">
                            <span className="font-medium text-navy">{item.description}</span>
                            <span className="text-gray-700"> – {item.context}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default Achievements;
