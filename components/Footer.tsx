
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-off-white py-6 text-center">
            <div className="container mx-auto max-w-4xl px-4">
                <p className="text-lg text-gray-600">
                    &copy; {currentYear} {PERSONAL_INFO.name}. All Rights Reserved.
                </p>
                 <p className="text-base text-gray-500 mt-2">
                    Designed & Built with care.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
