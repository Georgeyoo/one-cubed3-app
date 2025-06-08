import React from 'react';

const Icon = ({
    name,
    size = "24px",
    className = "",
    viewBox = "0 0 256 256",
    path,
    ...props
}) => {
    return (
        <div className={`text-current ${className}`} data-icon={name} data-size={size} data-weight="regular" {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="currentColor"
                viewBox={viewBox}
            >
                <path d={path} />
            </svg>
        </div>
    );
};

export default Icon;