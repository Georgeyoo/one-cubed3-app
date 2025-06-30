import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const HeroSection = () => {
    return (
        <div className="flex items-center flex-col w-full bg-opacity-50 gap-6 justify-center">

            <div className="flex items-center flex-col gap-2 text-center p-4 rounded-lg @[480px]:p-6 @[480px]:gap-3">
                <img
                    src="/ABC-NFT.png"
                    alt="ABC NFT Logo"
                    className="h-60 lg:h-80 xl:h-80 w-auto hover:opacity-80 transition-opacity mb-6"
                />
                <h2 className="text-[#E9EDDE] text-2xl leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Three unique NFT options, each secured on the Binance Smart Chain.
                </h2>
            </div>
            <Link to="/mint">
                <Button size="large" variant="primary" className="min-w-[140px] lg:min-w-[220px] xl:min-w-[260px] lg:h-16 xl:h-20 lg:text-xl xl:text-2xl">
                    Mint Your NFT
                </Button>
            </Link>
        </div>
    );
};

export default HeroSection;
