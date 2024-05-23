'use client'

import { useForm } from "react-hook-form";

import AuthInput from "@/components/ui/inputs/AuthInput"
import GreenButton from "@/components/ui/inputs/buttons/GreenButton"
import { register as registerRequest, verificateCode as verificateCodeRequest, login as loginRequest } from "@/api/auth"
import { useRouter } from "next/navigation";
import EmailVerificationModal from "@/components/ui/modals/EmailVerificationModal";
import { useDisclosure } from "@nextui-org/modal";

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { email, password, confirmPassword } = watch()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const router = useRouter()

    const onSubmit = async(data: any) => {
        const result = await registerRequest({
            email,
            password
        })

        // if (result) onOpen()

        if (result) router.replace("/")

        console.log(data);
    };

    const handleVerification = async(verificationCode: string) => {
        // Проверка кода с почты и дополнительные действия при успешной верификации
        const verifResult = await verificateCodeRequest({
            email,
            confirmation_code: Number(verificationCode)
        })

        if (!verifResult) return
        
        const loginResult = await loginRequest({
            email,
            password
        })

        if (loginResult) router.replace("/")
    };
  

    return (
        <div className="flex flex-col gap-12" style={{maxWidth: "90vw", width: "400px"}}>
            <h1 className="f text-3xl font-semibold">Регистрация</h1>
            <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
                <AuthInput 
                type="email" 
                placeholder="Email" 
                error={errors.email && errors.email.message} 
                register={register('email', { 
                    required: "Поле обязательно для заполнения.",
                    minLength: { value: 6, message: "Почта должна содержать не менее 6 символов" },
                    maxLength: { value: 40, message: "Почта должна содержать не более 40 символов" },
                })} 
            />

            <AuthInput 
                type="password" 
                placeholder="Придумайте пароль" 
                error={errors.password && errors.password.message} 
                register={register('password', { 
                    required: "Поле обязательно для заполнения.",
                    minLength: { value: 6, message: "Пароль должен содержать не менее 6 символов" },
                    maxLength: { value: 40, message: "Пароль должен содержать не более 40 символов" },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,40}$/,
                        message: "Пароль должен содержать хотя бы одну маленькую букву, одну большую букву и одну цифру",
                    }
                })} 
            />

            <AuthInput 
                type="password" 
                placeholder="Подтвердите пароль" 
                error={errors.confirmPassword && errors.confirmPassword.message} 
                register={register('confirmPassword', { 
                    required: "Поле обязательно для заполнения.",
                    validate: value => value === password || "Пароли должны совпадать"
                })} 
            />
                <GreenButton disabled={!email || !password || !confirmPassword} type="submit" text="Продолжить" />
            </form>

            <EmailVerificationModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                handleVerification={handleVerification}
            />
        </div>
    )
}