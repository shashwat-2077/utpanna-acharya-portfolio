
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#education', label: 'Education' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    const NavItems = () => (
        <>
            {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="block lg:inline-block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-teal transition-colors">
                    {link.label}
                </a>
            ))}
            <a href={PERSONAL_INFO.resumeLink} target="_blank" rel="noopener noreferrer" className="block lg:inline-block ml-0 lg:ml-4 mt-2 lg:mt-0 px-4 py-2 border border-teal rounded-md text-teal hover:bg-teal/10 transition-colors text-lg">
                Download Resume
            </a>
        </>
    );

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto max-w-7xl px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="text-2xl font-bold text-navy hover:text-teal transition-colors">Utpanna Acharya</a>
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex items-baseline space-x-4">
                            <NavItems />
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:text-teal focus:outline-none">
                            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-sm">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavItems />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
