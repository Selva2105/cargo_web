import React from 'react';

interface RadioProps {
    id?: string;
    name?: string;
    label: string;
    checked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
}

const RadioButton: React.FC<RadioProps> = ({ id, name, label, checked, setIsChecked, className }) => {

    const onCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    }

    return (
        <div className="flex items-center gap-x-3 px-2 md:px-4 lg:px-6 mt-6">
            <input
                id={id}
                name={name}
                type="radio"
                checked={checked}
                onChange={onCheck}
                className={`h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer ${className}`}
            />
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
        </div>
    );
};

export default RadioButton;
