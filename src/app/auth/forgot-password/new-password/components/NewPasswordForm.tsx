'use client'

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import AuthInput from "@/components/ui/inputs/AuthInput"
import GreenButton from "@/components/ui/inputs/buttons/GreenButton"

export default function NewPasswordForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { password, confirmPassword } = watch()
    const router = useRouter()

    const onSubmit = (data: any) => { 
        try {
            // await login(data);
            console.log(data)
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
                    type="password" 
                    placeholder="Придумайте новый пароль" 
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
                        placeholder="Повторите пароль" 
                        error={errors.confirmPassword && errors.confirmPassword.message} 
                        register={register('confirmPassword', { 
                            required: "Поле обязательно для заполнения.",
                            validate: value => value === password || "Пароли должны совпадать"
                        })} 
                    />
                    <GreenButton disabled={!password || !confirmPassword} type="submit" text="Продолжить" />
                </form>
            </div>
        </>
    )
}