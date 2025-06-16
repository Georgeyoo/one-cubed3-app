import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const RoadmapItem = ({ icon, phase, description, index, total }) => {
    const isFirst = index === 0;
    const isLast = index === total - 1;

    return (
        <>
            {/* Icon and connecting line column */}
            <div className="flex flex-col items-center justify-center relative">
                {/* Continuous vertical line (background) */}
                {!isFirst && (
                    <div className="absolute top-0 w-[1.5px] lg:w-[2px] bg-white/60 h-6 lg:h-8 -translate-y-full"></div>
                )}
                {!isLast && (
                    <div className="absolute bottom-1 w-[1.5px] lg:w-[2px] bg-white/60 h-5 lg:h-8 translate-y-full"></div>
                )}

                {/* Icon container with background circle */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-dark-bg border-2 border-light-accent rounded-full mb-2 lg:mb-3">
                    <div className="text-light-accent" data-icon={icon} data-size="24px" data-weight="regular">
                        {icon === "CircleNotch" && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="lg:w-6 lg:h-6 xl:w-7 xl:h-7">
                                <path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z" />
                            </svg>
                        )}
                        {icon === "Users" && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="lg:w-6 lg:h-6 xl:w-7 xl:h-7">
                                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
                            </svg>
                        )}
                        {icon === "PuzzlePiece" && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="lg:w-6 lg:h-6 xl:w-7 xl:h-7">
                                <path d="M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>

            {/* Content column */}
            <div className="flex flex-1 flex-col py-4 lg:py-6 xl:py-8">
                <p className="text-white text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-normal mb-1">{phase}</p>
                <p className="text-light-accent/80 text-base lg:text-lg xl:text-xl 2xl:text-xl font-normal leading-normal">{description}</p>
            </div>
        </>
    );
};

const RoadmapSection = () => {
    const roadmapItems = [
        {
            icon: "CircleNotch",
            phase: "Phase 1",
            description: "Launch of the ABC collection"
        },
        {
            icon: "Users",
            phase: "Phase 2",
            description: "Community building and partnerships"
        },
        {
            icon: "PuzzlePiece",
            phase: "Phase 3",
            description: "Expansion of the ABC ecosystem"
        }
    ]; return (
        <div>
            <h2 className="text-white text-xl sm:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight tracking-[-0.015em] pb-6 lg:pb-12 xl:pb-16 text-center">
                Roadmap
            </h2>            <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
                <div className="grid grid-cols-[60px_1fr] lg:grid-cols-[80px_1fr] xl:grid-cols-[100px_1fr] gap-x-4 lg:gap-x-6 xl:gap-x-8 px-4 lg:px-6 xl:px-8">
                    {roadmapItems.map((item, index) => (
                        <RoadmapItem
                            key={index}
                            icon={item.icon}
                            phase={item.phase}
                            description={item.description}
                            index={index}
                            total={roadmapItems.length}
                        />
                    ))}
                </div>
            </div>


            {/* Call to Action */}
            <div className="flex justify-center pt-8 lg:pt-16 xl:pt-20">
                <Link to="/mint">
                    <Button size="large" variant="primary" className="min-w-[140px] lg:min-w-[220px] xl:min-w-[260px] lg:h-16 xl:h-20 lg:text-xl xl:text-2xl">
                        Mint Your NFT
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default RoadmapSection;
