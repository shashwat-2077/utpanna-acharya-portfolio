
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyHighlights from './components/KeyHighlights';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Volunteering from './components/Volunteering';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import AdditionalInfo from './components/AdditionalInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Hero />
                <KeyHighlights />
                <About />
                <Experience />
                <Education />
                <Certifications />
                <Volunteering />
                <Achievements />
                <Skills />
                <AdditionalInfo />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
