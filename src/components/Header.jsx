import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex items-center bg-[#171512] p-4 pb-2 justify-between">
            <Link to="/" className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
                OneCubed³
            </Link>
            <div className="flex w-12 items-center justify-end">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0 hover:bg-[#36332b] transition-colors"
                >
                    <div className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                        </svg>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 right-4 bg-[#36332b] rounded-xl p-4 z-50 min-w-[200px]">
                    <div className="flex flex-col gap-3">
                        <Link
                            to="/"
                            className="text-white hover:text-[#f3e8cc] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/mint"
                            className="text-white hover:text-[#f3e8cc] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Mint NFT
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
