import Link from "next/link";

export default function NavItem({
  children,
  href,
  className,
  active
}: Readonly<{
  children: React.ReactNode;
  href: string;
  className?: string;
  active?: boolean
}>) {
  return (
    active ? (
      <button
        className={`cursor-pointer flex w-full md:p-2 items-center max-md:justify-center gap-3 leading-none text-gray-300 md:active:text-gray-500 md:active:bg-gray-200 dark:text-gray-300 md:hover:dark:bg-gray-420  ${active && 'md:bg-gray-200 text-gray-500 dark:!text-gray-20 md:dark:bg-gray-400 md:hover:dark:!bg-gray-400'} md:active:dark:text-gray-20 md:active:!dark:bg-gray-400 rounded-xl ${className}`}
      >
        {children}
      </button>
    ) : (
        <Link
          href={href}
          className={`flex w-full md:p-2 items-center max-md:justify-center gap-3 leading-none text-gray-300 md:hover:bg-gray-100 dark:text-gray-300 md:hover:dark:bg-gray-420  ${active && 'md:bg-gray-200 text-gray-500 dark:!text-gray-20 md:dark:bg-gray-400 md:hover:dark:!bg-gray-400'} md:active:dark:!text-gray-300 rounded-xl ${className}`}
        >
          {children}
        </Link>
    )
  );
}
