import { ReactNode } from "react"

interface MenuItemProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => {
    return (
        <div onClick={onClick} className="cursor-pointer flex items-center justify-between py-4 px-6 border-gray-200 border-t border-l dark:border-l-0 dark:border-r-0 border-r last:border-b dark:last:border-b-0 first:rounded-t-xl last:rounded-b-xl dark:first:border-none dark:border-t dark:border-gray-400 dark:bg-gray-475 w-full">
            {children}
        </div>
    )
}

export default MenuItem;