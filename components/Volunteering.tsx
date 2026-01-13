
import React from 'react';
import Section from './Section';
import { VOLUNTEERING_DATA } from '../constants';
import type { VolunteeringItem } from '../types';
import { HeartHandshake } from 'lucide-react';

const VolunteeringCard: React.FC<{ item: VolunteeringItem }> = ({ item }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
        <div className="flex items-start gap-4">
            <HeartHandshake className="h-8 w-8 text-teal flex-shrink-0 mt-1" />
            <div>
                <h3 className="text-2xl font-bold text-navy">{item.event} <span className="text-lg font-normal text-gray-600">({item.year})</span></h3>
                <p className="text-lg text-gray-800 mt-2">{item.description}</p>
            </div>
        </div>
    </div>
);

const Volunteering: React.FC = () => {
    return (
        <Section id="volunteering" title="Social & Volunteering" className="bg-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {VOLUNTEERING_DATA.map((item, index) => (
                    <VolunteeringCard key={index} item={item} />
                ))}
            </div>
        </Section>
    );
};

export default Volunteering;
