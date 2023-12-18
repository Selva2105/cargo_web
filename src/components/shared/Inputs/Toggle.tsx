import React, { ReactNode } from 'react';

interface ToggleProps {
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    error?: any;
    labelClass?: string;
    placeholder?: ReactNode
}

const ToggleButton: React.FC<ToggleProps> = ({ isChecked, setIsChecked, error, labelClass, placeholder }) => {

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex flex-col items-start px-2 md:px-4 lg:px-6 mt-2">
            {error && (
                <label className={`block text-sm font-medium leading-6 text-red-500 ${labelClass}`}>
                    {error}
                </label>
            )}
            <div className="flex items-center gap-4">
                <button
                    type="button"
                    className={`bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isChecked ? 'bg-indigo-600' : ''}`}
                    role="switch"
                    aria-checked={isChecked}
                    onClick={handleToggle}
                    aria-labelledby="switch-1-label"
                >
                    <span className="sr-only">Agree to policies</span>
                    <span
                        aria-hidden="true"
                        className={`h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out ${isChecked ? 'translate-x-[87%]' : 'translate-x-0'}`}
                    ></span>
                </button>
                {placeholder}
            </div>

        </div>
    );
};

export default ToggleButton;
