
import React from 'react';
import { KEY_HIGHLIGHTS } from '../constants';
import { Star } from 'lucide-react';

const KeyHighlights: React.FC = () => {
    return (
        <section className="bg-navy text-white py-12">
            <div className="container mx-auto max-w-6xl px-4">
                <h3 className="text-center text-lg font-semibold uppercase tracking-wider text-light-slate mb-8">Key Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {KEY_HIGHLIGHTS.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="flex-shrink-0">
                                <Star className="h-8 w-8 text-teal" />
                            </div>
                            <p className="text-lg text-lightest-slate font-medium">{highlight}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyHighlights;
