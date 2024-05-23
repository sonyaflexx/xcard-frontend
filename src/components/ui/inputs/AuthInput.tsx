"use client";

import { forwardRef, useState, ForwardedRef } from "react";

const AuthInput = forwardRef<
  HTMLInputElement,
  { type: string; placeholder: string; error?: any; register: any, className?: string }
>(
  (
    { register, type, placeholder, error, className },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="flex flex-col gap-1">
            <div className={`border-2 dark:border-gray-400 dark:bg-gray-500 rounded-xl flex outline-2 outline-green-50 ${isFocused && 'outline border-green-50'} ${error && !isFocused && 'border-red-regular'} ${className}`}>
                <input 
                    ref={ref}
                    type={isPasswordVisible ? 'text' : type} 
                    className= {`
                        pl-3 pr-2 py-3
                        text-base 
                        w-full 
                        rounded-xl 
                        dark:bg-gray-500
                        placeholder:text-gray-300
                        outline-none
                    `} 
                    placeholder={placeholder}        
                    {...register}
                    onFocus={() => setIsFocused(true)} 
                    onBlur={() => setIsFocused(false)}
                />
                {type === 'password' && (
                    <button type="button" className="px-3 dark:text-gray-300" onClick={togglePasswordVisibility}>
                        {isPasswordVisible ? (
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path></svg>
                        ) : (
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>
                        )}
                    </button>
                )}
            </div>
            {error && 
                <div className="flex items-center gap-2">
                    <div>
                        <svg className="mt-0.5" viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#E5484D" role="img"><path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625l6.28-10.875zM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clipRule="evenodd"></path></svg>
                    </div>
                    <span className="text-red-soft text-sm leading-none">{error}</span>
                </div>
            }
        </div>
    )
})

AuthInput.displayName = 'AuthInput';

export default AuthInput;
