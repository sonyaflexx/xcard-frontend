'use client'

import React from 'react';
import Input from "@/components/ui/inputs/Input";
import GreenButton from "@/components/ui/inputs/buttons/GreenButton";
import { useForm } from 'react-hook-form';
import { IndividualFormData } from '@/types';

interface IndividualFormProps {
    setIndividualData: React.Dispatch<React.SetStateAction<IndividualFormData>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const IndividualForm: React.FC<IndividualFormProps> = ({ setIndividualData, setCurrentStep }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<IndividualFormData>();
    const birthDate = watch("birthDate");

    const validateBirthDate = (value: string) => {
        const selectedDate = new Date(value);
        const today = new Date();
        if (selectedDate >= today) {
            return "Дата рождения должна быть в прошлом.";
        }
        return true;
    };

    const onSubmit = (data: IndividualFormData) => {
        setIndividualData(data);
        setCurrentStep(prev => prev + 1);
    }

    const onBack = () => {
        setCurrentStep(prev => prev - 1)
    }

    return (
        <form className="flex flex-col gap-6 p-2" onSubmit={handleSubmit(onSubmit)}>
            <Input type="text"
                placeholder="Enter your first name..."
                label="First Name"
                error={errors.firstName && errors.firstName.message}
                register={register("firstName", {
                    required: "Поле обязательно для заполнения.",
                })}
            />
            <Input
                type="text"
                placeholder="Enter your last name..."
                label="Last Name"
                error={errors.lastName && errors.lastName.message}
                register={register("lastName", {
                    required: "Поле обязательно для заполнения.",
                })}
            />
            <Input
                type="date"
                placeholder="Enter your birth date..."
                label="Birth Date"
                error={errors.birthDate && errors.birthDate.message}
                register={register("birthDate", {
                    required: "Поле обязательно для заполнения.",
                    validate: validateBirthDate,
                })}
            />
            <Input
                type="text"
                placeholder="Enter your profession..."
                label="Profession"
                error={errors.profession && errors.profession.message}
                register={register("profession", {
                    required: "Поле обязательно для заполнения.",
                })}
            />
            <div className="flex justify-between gap-4">
                <button type="button" onClick={onBack} className="bg-gray dark:border-gray-400 border-2 px-4 py-2 rounded-lg w-full">Back</button>
                <GreenButton type="submit" text="Next" size="sm w-full" />
            </div>
        </form>
    );
}

export default IndividualForm;