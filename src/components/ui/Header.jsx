import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex items-center bg-dark-bg py-4 lg:py-6 justify-center">
            <Link to="/" className="text-center">
                <h2 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight tracking-[-0.015em] hover:text-light-accent transition-colors">
                    ABC
                </h2>
            </Link>
        </div>
    );
};

export default Header;
