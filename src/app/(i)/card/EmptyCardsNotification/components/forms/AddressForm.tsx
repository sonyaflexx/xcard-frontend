'use client'

import React from 'react';
import Input from "@/components/ui/inputs/Input";
import GreenButton from "@/components/ui/inputs/buttons/GreenButton";
import { useForm } from 'react-hook-form';
import { AddressFormData } from '@/types';

interface AddressFormProps {
    setAddressData: React.Dispatch<React.SetStateAction<AddressFormData>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    finishSubmit: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ setAddressData, setCurrentStep, finishSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<AddressFormData>();

    const onSubmit = (data: AddressFormData) => {
        setAddressData(data);
        finishSubmit();
    }

    const onBack = () => {
        setCurrentStep(prev => prev - 1)
    }

    return (
        <form className="flex flex-col gap-6 p-2" onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="text"
                placeholder="Enter country code (ISO 3166-1 alpha-2)..."
                label="Country Code"
                error={errors.country && errors.country.message}
                register={register("country", {
                    required: "Country code is required.",
                    pattern: {
                        value: /^[A-Z]{2}$/,
                        message: "Country code must be in ISO 3166-1 alpha-2 format.",
                    },
                })}
            />
            <Input
                type="text"
                placeholder="Enter city..."
                label="City"
                error={errors.city && errors.city.message}
                register={register("city", {
                    required: "City is required.",
                })}
            />
            <Input
                type="text"
                placeholder="Enter postal code..."
                label="Postal Code"
                error={errors.postCode && errors.postCode.message}
                register={register("postCode", {
                    required: "Postal code is required.",
                })}
            />
            <Input
                type="text"
                placeholder="Enter address details..."
                label="Address Details"
                error={errors.details && errors.details.message}
                register={register("details", {
                    required: "Address details are required.",
                })}
            />
            <div className="flex justify-between gap-4">
                <button type="button" onClick={onBack} className="bg-gray dark:border-gray-400 border-2 px-4 py-2 rounded-lg w-full">Back</button>
                <GreenButton type="submit" text="Complete" size="sm w-full" />
            </div>
        </form>
    );
}

export default AddressForm;