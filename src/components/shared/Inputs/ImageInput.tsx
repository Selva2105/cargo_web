import React, { useRef } from 'react';

interface ImageInputProps {
    onFileChange: (file: File | null) => void;
    label?: string;
    labelClass?: string;
    selectedFile: File | null;
}

const ImageInput: React.FC<ImageInputProps> = ({ onFileChange, label, labelClass, selectedFile }) => {
    
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            onFileChange(fileList[0]);
        } else {
            onFileChange(null);
        }
    };

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        const fileList = event.dataTransfer.files;
        if (fileList && fileList.length > 0) {
            onFileChange(fileList[0]);
        }
    };

    return (
        <div className="relative">
            <div className="col-span-full px-2 md:px-4 lg:px-6 mt-6">
                {label && <label className={`block text-sm sm:text-base font-medium leading-6 text-black ${labelClass}`}>{label}</label>}
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                        </svg>
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                                onClick={handleClick}
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange}
                                />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        {selectedFile &&
                            <span className="relative cursor-pointer rounded-md bg-white font-medium text-sm leading-6 text-indigo-600 hover:text-indigo-500">
                                <span>{`File : ${selectedFile.name}`}</span>
                            </span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageInput;