import React from 'react';
import { Header, HeroSection, RoadmapSection, FAQSection, Footer } from '../components/ui';

const Landing = () => {
    return (
        <div className="relative min-h-screen w-full bg-slate-800 justify-between font-sans overflow-x-hidden">
            <div className="px-4 md:px-8 lg:px-12">
                <div className="container mx-auto max-w-7xl">
                    <Header />
                    <HeroSection />
                    <div className="py-8 lg:py-16 xl:py-24">
                        <RoadmapSection />
                    </div>
                    <div className="py-8 lg:py-16 xl:py-24">
                        <FAQSection />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Landing;
