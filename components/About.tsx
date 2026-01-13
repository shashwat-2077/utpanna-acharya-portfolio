
import React from 'react';
import Section from './Section';
import { ABOUT_ME, LOOKING_FOR } from '../constants';

const About: React.FC = () => {
    return (
        <Section id="about" title="About Me">
            <div className="space-y-4 text-xl text-gray-800 leading-relaxed">
                <p>{ABOUT_ME.p1}</p>
                <p>{ABOUT_ME.p2}</p>
            </div>
            <div className="mt-12 p-6 bg-teal/10 border-l-4 border-teal rounded-r-lg">
                <h3 className="text-3xl font-semibold text-navy mb-2">What I'm Looking For</h3>
                <p className="text-xl text-gray-800">{LOOKING_FOR}</p>
            </div>
        </Section>
    );
};

export default About;
