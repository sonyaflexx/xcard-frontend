"use client";

import { useState } from "react";

const SearchInput = ({ className, value, onChange }: { className: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div
        className={`relative border-2 dark:border-gray-400 dark:bg-gray-500 rounded-xl flex items-center outline-2 outline-green-50 ${
          isFocused && "outline border-green-50"
        } ${className}`}
      >
        <div className="flex items-center justify-center px-2">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" color="#8C8CA1" role="img"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path></svg>
        </div>
        <input
          type="search"
          className={`
            pr-8 py-2
            text-sm
            w-full 
            rounded-xl 
            dark:bg-gray-500
            placeholder:text-gray-300
            outline-none
            s 
          `}
          placeholder="Search..."
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {value && (
          <button className="mr-3" onClick={() => onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)}>
            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#8C8CA1" role="img"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd"></path></svg>
          </button>
        )}
      </div>
    );
};

export default SearchInput;
