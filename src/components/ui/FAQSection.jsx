import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <details className="flex flex-col rounded-xl lg:rounded-2xl xl:rounded-3xl bg-dark-card px-4 lg:px-8 xl:px-10 py-3 lg:py-6 xl:py-8 group transition-all duration-200 hover:bg-dark-card/80" open={isOpen}>
            <summary
                className="flex cursor-pointer items-center justify-between gap-6 py-2 lg:py-3 list-none"
                onClick={(e) => {
                    e.preventDefault();
                    onToggle();
                }}
            >
                <p className="text-white text-sm sm:text-base lg:text-xl xl:text-2xl font-medium leading-normal">{question}</p>
                <div
                    className={`text-white transition-transform duration-200 lg:scale-110 ${isOpen ? 'rotate-180' : ''}`}
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="lg:w-6 lg:h-6">
                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                </div>
            </summary>
            {isOpen && (
                <p className="text-text-secondary text-sm sm:text-base lg:text-lg xl:text-xl font-normal leading-relaxed pb-2 lg:pb-4 xl:pb-6">
                    {answer}
                </p>
            )}
        </details>
    );
};

const FAQSection = () => {
    const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

    const faqItems = [
        {
            question: "What is ABC?",
            answer: "ABC is a collection of 10,000 unique digital collectibles living on the Ethereum blockchain. Each ABC is a work of art, with a variety of traits and rarities."
        },
        {
            question: "How do I get an ABC?",
            answer: "You can purchase ABC NFTs through our official dApp or on secondary marketplaces like OpenSea. Connect your wallet and follow the minting process."
        },
        {
            question: "What are the benefits of owning an ABC?",
            answer: "ABC holders get access to exclusive community events, early access to future drops, voting rights on community decisions, and potential future utility within the ABC ecosystem."
        }
    ];

    const toggleItem = (index) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(index)) {
            newOpenItems.delete(index);
        } else {
            newOpenItems.add(index);
        }
        setOpenItems(newOpenItems);
    }; return (
        <div>
            <h2 className="text-white text-xl sm:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight tracking-[-0.015em] pb-6 lg:pb-12 xl:pb-16 text-center">
                Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
                {faqItems.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openItems.has(index)}
                        onToggle={() => toggleItem(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
