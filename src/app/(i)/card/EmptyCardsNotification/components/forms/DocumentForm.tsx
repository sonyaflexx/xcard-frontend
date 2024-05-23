'use client'

import React from 'react';
import Input from "@/components/ui/inputs/Input";
import GreenButton from "@/components/ui/inputs/buttons/GreenButton";
import { useForm } from 'react-hook-form';
import { DocumentFormData } from '@/types';

interface DocumentFormProps {
    setDocumentData: React.Dispatch<React.SetStateAction<DocumentFormData>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const DocumentForm: React.FC<DocumentFormProps> = ({ setDocumentData, setCurrentStep }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<DocumentFormData>();

    const validateExpiryDate = (value: string) => {
        const selectedDate = new Date(value);
        const today = new Date();
        if (selectedDate <= today) {
            return "Expiry date must be in the future.";
        }
        return true;
    };

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            setValue("front", URL.createObjectURL(file));
        }
    };

    const onSubmit = (data: DocumentFormData) => {
        setDocumentData(data);
        setCurrentStep(prev => prev + 1);
    }

    const onBack = () => {
        setCurrentStep(prev => prev - 1)
    }

    return (
        <form className="flex flex-col gap-6 p-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Document Type</label>
                <select 
                    {...register("type", { required: "Document type is required." })}
                    className="w-full rounded-xl p-2 border-2 border-gray-400 outline-none focus:ring focus:ring-green-50 dark:bg-gray-430"
                >
                    <option value="1">ID Card</option>
                    <option value="2">Passport</option>
                </select>
                { errors.type &&
                    <div className="flex items-center gap-2">
                        <div>
                            <svg className="mt-0.5" viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#E5484D" role="img"><path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625l6.28-10.875zM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clipRule="evenodd"></path></svg>
                        </div>
                        <span className="text-red-soft text-sm leading-none">{errors.type?.message}</span>
                    </div>
                }
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Front Image</label>
                <div className={`text-sm pl-2 w-full rounded-xl p-1 border-2 ${errors.front ? 'border-red-regular' : 'border-gray-400'} outline-none focus:ring focus:ring-green-50 dark:bg-gray-430`}>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        {...register("front", {
                            required: "Front image is required.",
                        })}
                    />
                </div>
                {errors.front && (
                    <div className="flex items-center gap-2">
                        <div>
                            <svg className="mt-0.5" viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#E5484D" role="img"><path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625l6.28-10.875zM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clipRule="evenodd"></path></svg>
                        </div>
                        <span className="text-red-soft text-sm leading-none">{errors.front.message}</span>
                    </div>
                )}
            </div>
            <Input
                type="text"
                placeholder="Enter document number..."
                label="Document Number"
                error={errors.number && errors.number.message}
                register={register("number", {
                    required: "Document number is required.",
                })}
            />
            <Input
                type="text"
                placeholder="Enter country code (ISO 3166-1 alpha-2)..."
                label="Country Code"
                error={errors.country && errors.country.message}
                register={register("country", {
                    required: "Country code is required.",
                    pattern: {
                        value: /^[A-Z]{2}$/,
                        message: "Country code must be in ISO 3166-1 alpha-2 format",
                    }})}
                />
                <Input
                    type="date"
                    placeholder="Enter expiry date..."
                    label="Expiry Date"
                    error={errors.expiryDate && errors.expiryDate.message}
                    register={register("expiryDate", {
                        required: "Expiry date is required.",
                        validate: validateExpiryDate,
                    })}
                />
                <div className="flex justify-between gap-4">
                    <button type="button" onClick={onBack} className="bg-gray dark:border-gray-400 border-2 px-4 py-2 rounded-lg w-full">Back</button>
                    <GreenButton type="submit" text="Next" size="sm w-full" />
                </div>
            </form>
        );
    }
    
    export default DocumentForm;