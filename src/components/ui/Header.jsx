import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (<div className="flex items-center bg-dark-bg py-4 lg:py-6 justify-center">
        <Link to="/" className="text-center">
            <img
                src="/ABC-NFT.png"
                alt="ABC NFT Logo"
                className="h-32 sm:h-10 lg:h-12 xl:h-16 w-auto hover:opacity-80 transition-opacity"
            />
        </Link>
    </div>
    );
};

export default Header;
