"use client";

import { forwardRef, ForwardedRef, useState } from "react";

const Input = forwardRef<
  HTMLInputElement,
  { className?: string, classNameInput?: string, type?: string; placeholder?: string; error?: any; register?: any, label?: string, children?: any, optional?: boolean}
>(
  (
  { className, classNameInput, type, placeholder, error, register, label, children, optional },
  ref: ForwardedRef<HTMLInputElement>,
) => {

    const [isFocused, setIsFocused] = useState(false);
    return (
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col gap-2">
          <div className="w-full flex">
              { label && <span className="text-sm leading-none font-medium">{label}</span> }
              { optional && <span className="text-sm leading-none ml-auto text-gray-300">Optional</span> }
          </div>
          <div
            className={`relative border dark:border-gray-400 dark:bg-gray-500 rounded-xl flex items-center flex-col outline-2 outline-green-50 ${
              isFocused && "outline border-green-50"
            } ${!isFocused && error && 'dark:border-red-regular border-red-regular'} ${className}`}
          >
            <input
              type={type}
              className={`
                pr-8 py-2.5 pl-3
                text-sm
                w-full 
                rounded-xl 
                dark:bg-gray-500
                placeholder:text-gray-300
                outline-none
                leading-none
                ${classNameInput}
              `}
              placeholder={placeholder}
              {...register}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {children}
          </div>
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
    );
});

export default Input;
