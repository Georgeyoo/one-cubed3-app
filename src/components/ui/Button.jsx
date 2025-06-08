import React from 'react';

const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    className = '',
    ...props
}) => {
    const baseClasses = 'flex cursor-pointer items-center justify-center overflow-hidden rounded-full font-bold leading-normal tracking-[0.015em] transition-colors';

    const variantClasses = {
        primary: 'bg-light-accent text-dark-bg hover:bg-light-accent/90',
        secondary: 'bg-transparent text-white hover:bg-white/10',
        outline: 'border border-white text-white hover:bg-white hover:text-dark-bg'
    };
    const sizeClasses = {
        small: 'h-8 lg:h-9 xl:h-10 px-3 lg:px-4 xl:px-5 text-sm',
        medium: 'h-10 lg:h-11 xl:h-12 px-4 lg:px-5 xl:px-6 text-sm lg:text-base',
        large: 'h-12 lg:h-14 xl:h-16 px-6 lg:px-7 xl:px-8 text-base lg:text-lg xl:text-xl'
    };

    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

    return (
        <button
            className={combinedClasses}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            <span className="truncate">{children}</span>
        </button>
    );
};

export default Button;
