import { ReactNode } from "react"

interface ItemActionProps {
    children: ReactNode;
}

const ItemAction: React.FC<ItemActionProps> = ({ children }) => {
    return (
        <div className="flex items-center leading-none text-sm gap-3">
            {children}
        </div>
    )
}

export default ItemAction;