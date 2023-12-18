import React from 'react';
import { InputType } from '../../../types';

interface CustomInputProps {
    setValue: (value: string) => void;
    value: string | number;
    labelText?: string;
    labelFor?: string;
    id?: string | number;
    name?: string;
    type: InputType;
    isRequired: boolean;
    placeholder: string;
    inputClass?: string;
    labelClass?: string;
    rows?: number;
    error?: any;
}

const CustomInput: React.FC<CustomInputProps> = ({
    setValue,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired,
    placeholder,
    inputClass,
    labelClass,
    rows,
    error,
}) => {

    return (
        <div className="w-full px-2 md:px-4 lg:px-6 mt-2">
            <div className="flex justify-between">
                {labelText && (
                    <label htmlFor={labelFor} className={`block text-sm sm:text-base font-medium leading-6 text-black ${labelClass}`}>
                        {labelText}
                        {isRequired && <span className="text-red-500">*</span>}
                    </label>
                )}
                {error && (
                    <label htmlFor={labelFor} className={`block text-sm font-medium leading-6 text-red-500 ${labelClass}`}>
                        {error}
                    </label>
                )}
            </div>
            <div className="mt-2">
                {type === 'textarea' ? (
                    <textarea
                        id={String(id)}
                        name={name}
                        value={value as string}
                        onChange={(e) => setValue(e.target.value)}
                        rows={rows}
                        placeholder={placeholder}
                        className={`block w-full p-0 py-1 sm:p-2 px-1 md:px-1 lg:px-2 rounded-lg border-2 border-gray-500 focus:outline-gray-950 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 placeholder:text-base ${inputClass}`}
                    />
                ) : (
                    <input
                        type={type}
                        id={String(id)}
                        name={name}
                        value={value as string}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={placeholder}
                        className={`w-full p-0 py-1 sm:p-2 px-1 md:px-1 lg:px-2 rounded-md sm:rounded-lg border-2 border-gray-500 focus:outline-gray-950 ${inputClass}`}
                    />
                )}
            </div>
        </div>
    );
};

export default CustomInput;
