import GrayButton from "../../../../components/ui/inputs/buttons/GrayButton"
import NetworkButton from "./NetworkButton"
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu } from "@nextui-org/react";

export default function Header({ activePage }: { activePage: string }) {
    let title = '';

    if (activePage === '/') {
        title = 'Wallet';
    } else if (activePage === '/card') {
        title = 'Card';
    } else if (activePage === '/menu') {
        title = 'Menu';
    }
    
    return (
        <header className="z-30 h-16 mx-8 flex items-center justify-between sticky top-0 dark:bg-gray-600 bg-white">
            <h1 className="text-lg font-semibold">{ title }</h1>
            <div className="flex gap-2">
                <NetworkButton />
                <Dropdown className="dark:bg-gray-475">
                    <DropdownTrigger className="outline-none" aria-label="More">
                        <button type="button" className={`dark:text-gray-300 text-gray-400 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-420`}>
                            <svg className="dark:text-gray-100" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"></path></svg>
                        </button>
                    </DropdownTrigger>
                    <DropdownMenu variant="flat">
                        <DropdownItem key="buy" className="hover:border-none dark:text-white hover:dark:text-white dark:hover:bg-gray-400 focus:outline-none" aria-label="Buy Crypto">
                            <div className="flex justify-between items-center outline-none">
                                <span>Scan</span>
                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h2a.75.75 0 0 0 0-1.5h-2zm9.5 0a.75.75 0 0 0 0 1.5h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 0 1.5 0v-2A2.25 2.25 0 0 0 15.75 2h-2zM3.5 13.75a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 4.25 18h2a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 1-.75-.75v-2zm14.5 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 1-.75.75h-2a.75.75 0 0 0 0 1.5h2A2.25 2.25 0 0 0 18 15.75v-2zM7 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"></path></svg>
                            </div>
                        </DropdownItem>
                        <DropdownItem key="sell" className="dark:hover:bg-gray-400" aria-label="Sell Crypto">
                            <div className="flex justify-between items-center outline-none">
                                <span>Lock Now</span>
                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1zm3 8V5.5a3 3 0 1 0-6 0V9h6z" clipRule="evenodd"></path></svg>
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </header>
    )
}