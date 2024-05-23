'use client'

import Link from "next/link"

export default function GrayButton({
    children, href, onClick, className, disabled
  }: Readonly<{
    children?: React.ReactNode,
    href?: string,
    onClick?: any,
    className?: string,
    disabled?: boolean
  }>) {
    return (
        href ? (
            <Link href={href} className={`dark:text-gray-300 text-gray-400 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-420 ${className}`}>
                {children}
            </Link>
        ) : (
            <button type="button" onClick={onClick} disabled={disabled} className={`dark:text-gray-300 text-gray-400 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-420 ${className}`}>
                {children}
            </button>
        )
    )
}