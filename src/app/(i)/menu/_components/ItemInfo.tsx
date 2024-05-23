import { ReactNode } from "react"

interface ItemInfoProps {
    children: ReactNode;
}

const ItemInfo: React.FC<ItemInfoProps> = ({ children }) => {
    return (
        <div className="flex items-center leading-none text-sm gap-3">
            {children}
        </div>
    )
}

export default ItemInfo;