export default function FAQSection() {
    const faqItems = [
        {
            question: "What is OneCubed³?",
            answer: "OneCubed³ is a collection of 10,000 unique digital collectibles living on the Ethereum blockchain. Each NFT is a work of art, with a variety of traits and rarities."
        },
        {
            question: "How do I get an OneCubed³ NFT?",
            answer: "You can mint OneCubed³ NFTs directly from our dApp by connecting your wallet and selecting from our three unique collections. Each collection has different traits and minting prices."
        },
        {
            question: "What are the benefits of owning an OneCubed³ NFT?",
            answer: "OneCubed³ NFT holders get exclusive access to our community, early access to future drops, voting rights on project decisions, and potential airdrops from partner projects."
        }
    ];

    return (
        <>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                FAQ
            </h2>
            <div className="flex flex-col p-4 gap-3">
                {faqItems.map((item, index) => (
                    <details key={index} className="flex flex-col rounded-xl bg-[#36332b] px-4 py-2 group" {...(index === 0 ? { open: true } : {})}>
                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 hover:text-[#f3e8cc] transition-colors">
                            <p className="text-white text-sm font-medium leading-normal">{item.question}</p>
                            <div className="text-white group-open:rotate-180 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                </svg>
                            </div>
                        </summary>
                        <p className="text-[#b5afa1] text-sm font-normal leading-normal pb-2">
                            {item.answer}
                        </p>
                    </details>
                ))}
            </div>
        </>
    );
}
