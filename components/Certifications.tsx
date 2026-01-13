
import React from 'react';
import Section from './Section';
import { CERTIFICATIONS_DATA } from '../constants';
import type { CertificationItem } from '../types';
import { Award } from 'lucide-react';

const CertificationCard: React.FC<{ item: CertificationItem }> = ({ item }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center">
        <Award className="h-10 w-10 text-teal mb-4" />
        <h3 className="text-xl font-bold text-navy">{item.name}</h3>
        <p className="text-lg text-gray-700 mt-1">{item.issuer}</p>
        <p className="text-base text-gray-600 mt-2">{item.year}</p>
    </div>
);

const Certifications: React.FC = () => {
    return (
        <Section id="certifications" title="Certifications">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CERTIFICATIONS_DATA.map((item, index) => (
                    <CertificationCard key={index} item={item} />
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
