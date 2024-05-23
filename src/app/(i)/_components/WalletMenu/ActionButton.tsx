import Link from "next/link"

export default function ActionButton({ children, type, href, label, onClick }: { children?: any, type?: string, href?: string, label?: string, onClick?: any }) {
    return (
        type && type === 'link' ? (
            <Link href={href || ''} className="flex flex-col gap-2 justify-center items-center">
                <div className="p-2 dark:bg-gray-475 bg-gray-50 hover:bg-gray-20 hover:bg-opacity-50 rounded-full dark:hover:bg-gray-420 dark:border-gray-400 text-gray-350 dark:text-gray-20" style={{borderWidth: '1px'}}>
                    { children }
                </div>
                <span className="text-xs font-medium">{ label }</span>
            </Link> 
        ) : (
            <button className="flex flex-col gap-2 justify-center items-center" onClick={onClick}>
                <div className="p-2 dark:bg-gray-475 bg-gray-50 hover:bg-gray-20 hover:bg-opacity-50 rounded-full dark:hover:bg-gray-420 dark:border-gray-400 text-gray-350 dark:text-gray-20" style={{borderWidth: '1px'}}>
                    { children }
                </div>
                <span className="text-xs font-medium">{ label }</span>
            </button>
        )
    )
}