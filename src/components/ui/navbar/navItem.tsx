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
    <Link
      href={href}
      className={`flex w-full p-2 items-center gap-3 leading-none text-gray-300 active:text-gray-500 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-300 hover:dark:bg-gray-420  ${active && ' bg-gray-200 text-gray-500 dark:text-gray-20 dark:bg-gray-400 hover:dark:bg-gray-400'} active:dark:text-gray-20 active:dark:bg-gray-400 rounded-xl ${className}`}
    >
      {children}
    </Link>
  );
}
