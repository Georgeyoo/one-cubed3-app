import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const HeroSection = () => {
    return (<div
        className="flex min-h-[600px]  bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl "
        style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/NFT-A.jpeg")'
        }}
    >
        <div className="flex items-center flex-col bg-black/50 w-full bg-opacity-50 gap-6 justify-center">

            <div className="flex items-center flex-col gap-2 text-center p-4 rounded-lg @[480px]:p-6 @[480px]:gap-3">
                <img
                    src="/ABC-NFT.png"
                    alt="ABC NFT Logo"
                    className="h-60 lg:h-80 xl:h-80 w-auto hover:opacity-80 transition-opacity mb-6"
                />
                <h2 className="text-white text-2xl leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Three unique NFT options, each secured on the Binance Smart Chain
                </h2>
            </div>
            <Link to="/mint">
                <Button size="large" variant="primary" className="min-w-[140px] lg:min-w-[220px] xl:min-w-[260px] lg:h-16 xl:h-20 lg:text-xl xl:text-2xl">
                    Mint Your NFT
                </Button>
            </Link>
        </div>

    </div>
    );
};

export default HeroSection;
