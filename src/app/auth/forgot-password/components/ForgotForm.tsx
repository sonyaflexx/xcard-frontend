'use client'

import { useForm } from "react-hook-form";

import AuthInput from "@/components/ui/inputs/AuthInput"
import GreenButton from "@/components/ui/inputs/buttons/GreenButton"
import EmailVerificationModal from "@/components/ui/modals/EmailVerificationModal";

import {useDisclosure} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function ForgotForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { email } = watch()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const router = useRouter()

    const onSubmit = (data: any) => { 
        try {
            // await login(data);
            onOpen();
        } catch (error) {
            // console.error('Authentication error:', error.message);
        }
    };

    const handleVerification = (data: any) => {
        try {
            console.log(data)
            router.push('/auth/forgot-password/new-password')
        } catch (error) {
            // console.error('Authentication error:', error.message);
        }
    }

    return (
        <>
            <div className="flex flex-col gap-12" style={{maxWidth: "90vw", width: "400px"}}>
                <h1 className="f text-3xl font-semibold">Восстановление пароля</h1>
                <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
                    <AuthInput 
                    type="email" 
                    placeholder="Email" 
                    error={errors.email && errors.email.message} 
                    register={register('email', { 
                        required: "Поле обязательно для заполнения."
                    })} 
                />
                    <GreenButton disabled={ !email } type="submit" text="Продолжить" />
                </form>
            </div>
            <EmailVerificationModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                handleVerification={handleVerification}
            />
        </>
    )
}