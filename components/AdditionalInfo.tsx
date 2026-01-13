
import React from 'react';
import Section from './Section';
import { ADDITIONAL_INFO_DATA } from '../constants';

const AdditionalInfo: React.FC = () => {
    return (
        <Section id="additional" title="More About Me">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold text-navy mb-2">Hobbies</h3>
                    <p className="text-xl text-gray-800">{ADDITIONAL_INFO_DATA.hobbies.join(', ')}</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-navy mb-2">Languages</h3>
                    <p className="text-xl text-gray-800">{ADDITIONAL_INFO_DATA.languages.join(', ')}</p>
                </div>
            </div>
        </Section>
    );
};

export default AdditionalInfo;
