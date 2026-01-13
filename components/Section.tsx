
import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
    return (
        <section id={id} className={`w-full py-16 md:py-24 ${className}`}>
            <div className="container mx-auto max-w-4xl px-4">
                <h2 className="text-4xl font-bold text-navy mb-2 relative inline-block">
                    {title}
                    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-teal"></span>
                </h2>
                <div className="mt-8">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
