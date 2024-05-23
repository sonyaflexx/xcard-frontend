"use client";

import Link from "next/link";

export default function GreenButton({
    children, href, type, text, disabled, size, onClick
  }: Readonly<{
    children?: React.ReactNode,
    href?: string,
    type?: string,
    text?:string;
    disabled?: boolean,
    size?: string;
    onClick?: any;
  }>) {
    return (
      type && type === 'submit' ? (
        <input type="submit" value={text} disabled={disabled} className={`flex items-center text-white justify-center text-center font-semibold bg-green-50 hover:bg-green-20 active:bg-green-300 px-4 py-3 gap-3 rounded-xl disabled:bg-disabled-bg-light disabled:text-disabled-text-light dark:disabled:bg-disabled-bg-dark dark:disabled:text-disabled-text-dark ${size && 'text-' + size}`} /> ) : (
      type && type === 'button') ?  (
        <button type="button" onClick={onClick} disabled={disabled} className={`flex items-center text-white justify-center text-center font-semibold bg-green-50 hover:bg-green-20 active:bg-green-300 px-4 py-3 gap-3 rounded-xl disabled:bg-disabled-bg-light disabled:text-disabled-text-light dark:disabled:bg-disabled-bg-dark dark:disabled:text-disabled-text-dark ${size && 'text-' + size}`}>{children}</button> ) : (
        <Link href={href || ""} className={`flex items-center text-white text-center justify-center font-semibold bg-green-50 hover:bg-green-20 active:bg-green-300 px-4 py-3 gap-3 rounded-xl disabled:bg-disabled-bg-light disabled:text-disabled-text-light dark:disabled:bg-disabled-bg-dark dark:disabled:text-disabled-text-dark ${size && 'text-' + size}`} >
          {children}
        </Link>
    ))
}
