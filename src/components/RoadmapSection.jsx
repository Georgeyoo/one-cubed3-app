export default function RoadmapSection() {
    const roadmapItems = [
        {
            phase: "Phase 1",
            title: "Launch of the OneCubed³ collection",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"></path>
                </svg>
            )
        },
        {
            phase: "Phase 2",
            title: "Community building and partnerships",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                </svg>
            )
        },
        {
            phase: "Phase 3",
            title: "Expansion of the OneCubed³ ecosystem",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z"></path>
                </svg>
            )
        }
    ];

    return (
        <>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Roadmap
            </h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                {roadmapItems.map((item, index) => (
                    <div key={index} className="contents">
                        <div className={`flex flex-col items-center gap-1 ${index === 0 ? 'pt-3' : ''} ${index === roadmapItems.length - 1 ? 'pb-3' : ''}`}>
                            {index > 0 && <div className="w-[1.5px] bg-[#504b3f] h-2"></div>}
                            <div className="text-white">
                                {item.icon}
                            </div>
                            {index < roadmapItems.length - 1 && <div className="w-[1.5px] bg-[#504b3f] h-2 grow"></div>}
                        </div>
                        <div className="flex flex-1 flex-col py-3">
                            <p className="text-white text-base font-medium leading-normal">{item.phase}</p>
                            <p className="text-[#b5afa1] text-base font-normal leading-normal">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
