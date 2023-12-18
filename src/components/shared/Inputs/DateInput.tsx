import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

interface DateInputProps {
    dateValue: {
        startDate: Date;
        endDate: Date;
    };
    setDateValue: React.Dispatch<React.SetStateAction<{
        startDate: Date;
        endDate: Date;
    }>>;
}

const DateInput: React.FC<DateInputProps> = ({ dateValue, setDateValue }) => {

    const handleValueChange = (newValue: any) => {
        setDateValue(newValue);
    };

    return (
        <div className='px-2 md:px-4 lg:px-6 mt-6'>
            <Datepicker
                value={dateValue}
                onChange={handleValueChange}
                asSingle={true}
                placeholder='Enter your date of birth'
                startFrom={new Date()}
                showShortcuts={true}
                showFooter={true}
                containerClassName="relative mt-8 border-2 border-black rounded-lg"
                primaryColor={"indigo"}
            />
        </div>
    )
}

export default DateInput;
