import React from 'react';
import Typography from '../../shared/Typography/Typography';

interface formHeaderProps {
    heading: string;
    subHeading: string;
}

const FormHeader: React.FC<formHeaderProps> = ({ heading, subHeading }) => {
    return (
        <div>
            <div id="header" className='flex flex-col items-center justify-center mt-4 gap-4'>
                <Typography variant='h3'>{heading}</Typography>
                <Typography variant='caption'>{subHeading}</Typography>
            </div>
        </div>
    )
}

export default FormHeader