'use client'

import { useForm } from "react-hook-form";

import AuthInput from "@/components/ui/inputs/AuthInput"
import GreenButton from "@/components/ui/inputs/buttons/GreenButton"
import { register } from '@/store/reducers/authSlice';
import { useRouter } from "next/navigation";
import EmailVerificationModal from "@/components/ui/modals/EmailVerificationModal";
import { useDisclosure } from "@nextui-org/modal";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { RootState } from "@/store/store";

interface RegisterFormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

export default function RegisterForm() {
    const { register: registerForm, handleSubmit, formState: { errors }, watch } = useForm();
    const { email, password, confirmPassword } = watch()
    const dispatch = useAppDispatch();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const authStatus = useAppSelector((state: RootState) => state.auth.registerStatus);
    const authError = useAppSelector((state: RootState) => state.auth.registerError);
    const router = useRouter()
  
  const handleRegister = async (data: any) => {
    const result = await dispatch(register(data));
    if (register.fulfilled.match(result)) {
      router.replace("/");
    }
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
            <form className='flex flex-col gap-6' onSubmit={handleSubmit(handleRegister)}>
                <AuthInput 
                type="email" 
                placeholder="Email" 
                error={errors.email && errors.email.message}
                authError={authStatus === 'failed' ? authError || 'This email is busy.' : undefined} 
                register={registerForm('email', { 
                    required: "Поле обязательно для заполнения.",
                    minLength: { value: 6, message: "Почта должна содержать не менее 6 символов" },
                    maxLength: { value: 40, message: "Почта должна содержать не более 40 символов" },
                })} 
            />

            <AuthInput 
                type="password" 
                placeholder="Придумайте пароль" 
                error={errors.password && errors.password.message} 
                register={registerForm('password', { 
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
                register={registerForm('confirmPassword', { 
                    required: "Поле обязательно для заполнения.",
                    validate: value => value === password || "Пароли должны совпадать"
                })} 
            />
                <GreenButton disabled={!email || !password || !confirmPassword} isLoading={authStatus === 'loading'} type="submit" text="Продолжить" />
            </form>

            <EmailVerificationModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                handleVerification={handleVerification}
            />
        </div>
    )
}