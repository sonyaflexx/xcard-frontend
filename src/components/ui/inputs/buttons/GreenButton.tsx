"use client";

import Link from "next/link";
import { Spinner } from "@nextui-org/react";

export default function GreenButton({
  children, href, type, text, disabled, size, onClick, isLoading
}: Readonly<{
  children?: React.ReactNode,
  href?: string,
  type?: string,
  text?:string;
  disabled?: boolean,
  size?: string;
  onClick?: any;
  isLoading?: boolean;
}>) {
  const content = isLoading ? <Spinner /> : (text || children);

  return (
    type && type === 'submit' ? (
      <div className="relative">
        <input
          type="submit"
          value={text}
          disabled={disabled || isLoading}
          className={`w-full flex items-center text-white justify-center text-center font-semibold bg-green-50 hover:bg-green-20 active:bg-green-300 px-4 py-3 gap-3 rounded-xl disabled:bg-disabled-bg-light disabled:text-disabled-text-light dark:disabled:bg-disabled-bg-dark dark:disabled:text-disabled-text-dark ${size && 'text-' + size}`}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center w-full h-full dark:bg-gray-420 rounded-xl">
            <Spinner color="default" size="sm" />
          </div>
        )}
      </div>
    ) : type && type === 'button' ? (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled || isLoading}
        className={`flex items-center text-white justify-center text-center font-semibold bg-green-50 hover:bg-green-20 active:bg-green-300 px-4 py-3 gap-3 rounded-xl disabled:bg-disabled-bg-light disabled:text-disabled-text-light dark:disabled:bg-disabled-bg-dark dark:disabled:text-disabled-text-dark ${size && 'text-' + size}`}
      >
        {content}
      </button>
    ) : (
      <Link
        href={href || ""}
        className={`flex items-center text-white text-center justify-center font-semibold bg-green-50 hover:bg-green-20 active:bg-green-300 px-4 py-3 gap-3 rounded-xl disabled:bg-disabled-bg-light disabled:text-disabled-text-light dark:disabled:bg-disabled-bg-dark dark:disabled:text-disabled-text-dark ${size && 'text-' + size}`}
      >
        {content}
      </Link>
    )
  );
}