'use client'

import React from 'react';
import Input from "@/components/ui/inputs/Input";
import SelectPhoneArea from "../SelectPhoneArea";
import GreenButton from "@/components/ui/inputs/buttons/GreenButton";
import { useForm } from 'react-hook-form';
import { UserFormData } from '@/types';

interface UserFormProps {
    setUserData: React.Dispatch<React.SetStateAction<UserFormData>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    handleSelectCode: (code: string) => void;
    filteredCodes: { code: string; country: string }[];
}

const UserForm: React.FC<UserFormProps> = ({ handleSelectCode, filteredCodes, setUserData, setCurrentStep }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<UserFormData>();

    const onSubmit = (data: UserFormData) => {
        setUserData(data);
        setCurrentStep(prev => prev + 1);
    }

    return (
        <form className="flex flex-col gap-6 p-2" onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="text"
                placeholder="Enter your username..."
                label="Username"
                error={errors.username && errors.username.message}
                register={register("username", {
                    required: "Поле обязательно для заполнения.",
                })}
            />
            <Input
                type="email"
                placeholder="Enter your email..."
                label="Email"
                error={errors.email && errors.email.message}
                register={register("email", {
                    required: "Поле обязательно для заполнения.",
                })}
            />
            <SelectPhoneArea phoneCodes={filteredCodes} onSelectCode={handleSelectCode} />
            <Input
                type="text"
                placeholder="Enter your phone..."
                label="Phone"
                error={errors.phoneNumber && errors.phoneNumber.message}
                register={register("phoneNumber", {
                    required: "Phone number is required.",
                    pattern: {
                        value: /^\d+$/,
                        message: "Invalid phone number."
                    }
                })}
            />
            <GreenButton type="submit" text="Next" size="sm" />
        </form>
    );
}

export default UserForm;