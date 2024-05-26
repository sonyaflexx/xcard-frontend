"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { login } from '@/store/reducers/authSlice';
import { RootState } from '@/store/store';
import AuthInput from '@/components/ui/inputs/AuthInput';
import GreenButton from '@/components/ui/inputs/buttons/GreenButton';

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<LoginFormValues>();
  const dispatch = useDispatch();
  const { email, password } = watch();
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const authError = useSelector((state: RootState) => state.auth.error);
  // const router = useRouter();
  
  const handleLogin = async (data: LoginFormValues) => {
    const result = await dispatch(login(data));
    if (login.fulfilled.match(result)) {
      // router.replace("/");
      console.log('nice')
    }
  };

  return (
    <div className="flex flex-col gap-12 md:w-96">
      <h1 className="text-3xl font-semibold">Авторизация</h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(handleLogin)}>
        <AuthInput
          type="email"
          placeholder="Введите электронную почту"
          error={errors.email?.message}
          register={register("email", { required: "Поле обязательно для заполнения." })}
        />
        <AuthInput
          type="password"
          placeholder="Введите пароль"
          error={errors.password?.message}
          register={register('password', {
            required: "Поле обязательно для заполнения.",
            minLength: { value: 8, message: "Пароль должен содержать не менее 8 символов" },
            maxLength: { value: 128, message: "Пароль должен содержать не более 128 символов" },
          })}
        />
        {authStatus === 'failed' && <div className="text-red-500">{authError}</div>}
        <GreenButton type="submit" text="Продолжить" disabled={!email || !password || authStatus === 'loading'} />
      </form>
    </div>
  );
}