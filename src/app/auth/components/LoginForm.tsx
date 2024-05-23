"use client";

import { login as loginRequest } from "@/api/auth";
import AuthInput from "@/components/ui/inputs/AuthInput";
import GreenButton from "@/components/ui/inputs/buttons/GreenButton";
import EmailVerificationModal from "@/components/ui/modals/EmailVerificationModal";

import {useDisclosure} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { email, password } = watch();
    const router = useRouter()

    const handleLogin = async (data: any ) => {
      try {
        const result = await loginRequest({
          email,
          password
        });
        
        if (result) router.replace("/")
      } catch (error) {
        // console.error('Authentication error:', error.message);
      }
    };
    
  return (
    <div className="flex flex-col gap-12 md:w-96">
      <h1 className="f text-3xl font-semibold">Авторизация</h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(handleLogin)}>
        <AuthInput
          type="email"
          placeholder="Введите электронную почту"
          error={errors.email && errors.email.message}
          register={register("email", {
            required: "Поле обязательно для заполнения.",
          })}
        />
        <AuthInput 
            type="password" 
            placeholder="Введите пароль" 
            error={errors.password && errors.password.message} 
            register={register('password', { 
                required: "Поле обязательно для заполнения.",
                minLength: { value: 8, message: "Пароль должен содержать не менее 8 символов" },
                maxLength: { value: 128, message: "Пароль должен содержать не более 128 символов" },
            })} 
                />
        <GreenButton type="submit" text="Продолжить" disabled={!email || !password} />
      </form>
    </div>
    )
}
