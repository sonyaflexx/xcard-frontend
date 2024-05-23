import { ReactNode } from "react";
import MenuItem from "./MenuItem";

interface MenuListProps {
    children: ReactNode;
    label?: string;
}

const MenuList: React.FC<MenuListProps> = ({ children, label }) => {
    return (
        <div className="w-full max-w-[768px] md:px-1 flex flex-col gap-2">
            <span className="text-xs font-medium text-gray-300">{label}</span>
            <div className="w-full font-medium">
                {children}
            </div>
        </div>
    )
}

export default MenuList;