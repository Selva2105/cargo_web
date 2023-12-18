import React from 'react'

interface CheckBoxProps {
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
    name?: string;
    id?: string;
    placeholder: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, setIsChecked, className, id, name, placeholder }) => {

    const onCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    }
    
    return (
        <div className="flex gap-2 h-6 items-center px-2 md:px-4 lg:px-6 mt-6">
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={isChecked}
                onChange={onCheck}
                className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer ${className}`}
            />
            <p>{placeholder}</p>
        </div>
    );
};


export default CheckBox