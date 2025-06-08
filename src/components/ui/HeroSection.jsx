import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const HeroSection = () => {
    return (
        <>
            <div className="w-full">
                <div className="py-3 lg:py-6">
                    <div
                        className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-dark-bg rounded-xl min-h-80 lg:min-h-[500px] xl:min-h-[700px] 2xl:min-h-[800px]"
                        style={{
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBF6LskCWrd92oleJL-6sOsn9Dc_IxuoMgb68Aeg02sb7ZD01tNScFD4eOtfFHEOBPa_C-jnai6MGw0fW0iL_Agno2DB87eHt-WXxSq159CWXz_Wa9HWpfWuEn4SuNTU5-ZB2WDVeJwORowOvu9YZlc4D_yIkwycLUg1TgLV926fvzVajiFFdP8_1KU9g5WtAPOoNBw6aceh-Ec1WeID8ti-FJ0oCg5NnWCeZdK8PfrrKJ72NJoahuQU38GW-mdJCCDU3q9DK7yDPw")'
                        }}
                    ></div>
                </div>
            </div>

            <div className="text-center py-8 lg:py-16 xl:py-24">
                <h1 className="text-white tracking-tight text-2xl sm:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight pb-4 lg:pb-8">
                    ABC
                </h1>
                <p className="text-white text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-normal leading-relaxed pb-6 lg:pb-12 pt-2 max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
                    A collection of 10,000 unique digital collectibles living on the Ethereum blockchain.
                </p>
                <div className="flex justify-center">
                    <Link to="/mint">
                        <Button size="large" className="min-w-[120px] lg:min-w-[200px] xl:min-w-[240px] lg:h-16 xl:h-20 lg:px-10 xl:px-12 lg:text-xl xl:text-2xl">
                            Start Minting
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
