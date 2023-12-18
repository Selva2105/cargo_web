import React from 'react';
import { Themes } from '../../../constants/thems';
import { ButtonTypes, iconPlaceTypes } from '../../../types';

interface ButtonProps {
    type?: ButtonTypes;
    placeholder?: string;
    icon?: any;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    iconPlace?: iconPlaceTypes;
    className?: string;
    theme?: keyof typeof Themes;
    disabled?: boolean
}

const Buttons: React.FC<ButtonProps> = ({ onClick, type, placeholder, icon, iconPlace = 'left', className, theme = 'primary', disabled = false }) => {
    const selectedTheme = Themes[theme];

    return (
        <div className='w-full px-2 md:px-4 lg:px-6 mt-2'>
            <button
                type={type}
                onClick={onClick}
                className={`w-full flex ${iconPlace === 'left' ? 'flex-row' : 'flex-row-reverse'} justify-center items-center p-2 border-2 mt-2 rounded-lg ${selectedTheme.color} ${selectedTheme.hoverColor} disabled:opacity-80 disabled:cursor-not-allowed ${className}`}
                disabled={disabled}
            >
                <span className={`${iconPlace === 'left' ? 'pr-3' : 'pl-3'}`}>{icon}</span>
                {placeholder}
            </button>
        </div>
    );
};

export default Buttons;