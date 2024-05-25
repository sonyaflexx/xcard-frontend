import NavItem from "./navItem"

export default function NavList({ activePage }: { activePage: string }) {
    return (
        <div className="flex max-md:items-center md:flex-col h-full justify-between w-full">
            <ul className="flex h-full md:flex-col gap-1 max-md:justify-between w-full">
                <li className="w-full flex items-center">
                    <NavItem href="/" active={activePage === '/'}>
                        <svg className="fill-current size-6 max-md:size-7 max-md:mt-0.5" fill="currentColor" height="24px" width="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-60 0 583.20 583.20" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512" stroke="currentColor" strokeWidth="10.24"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m490.6,222.6h-12.5v-84.4c0-19.8-15.6-35.4-34.4-35.4h-9.4v-56.4c0-19.8-14.6-35.4-32.3-35.4 0,0-1,0-2.1,0l-356.6,91.7c-0.1,0-0.3,0.1-0.4,0.1-17.6,1.4-31.9,16.5-31.9,35.4v327.4c0,19.8 15.6,35.4 34.4,35.4h398.3c19.8,0 35.4-15.6 35.4-35.4v-86.6h11.5c6.3,0 10.4-4.2 10.4-10.4v-135.5c5.68434e-14-6.3-5.2-10.5-10.4-10.5zm-86.6-191.8c5.2,1 10.4,7.3 10.4,15.6v56.3h-287.7l277.3-71.9zm54.3,434.8c0,8.3-6.3,15.6-14.6,15.6h-398.3c-8.3,0-14.6-7.3-14.6-15.6v-327.4c0-8.3 6.3-15.6 14.6-15.6h397.2c8.3,0 14.6,7.3 14.6,15.6v84.4h-103.2c-43.8,0-78.2,34.4-78.2,78.2 0,43.8 35.4,78.2 78.2,78.2h104.3v86.6zm21.8-106.4h-126.1c-31.3,0-57.3-26.1-57.3-57.3s26.1-57.3 57.3-57.3h126.1v114.6z"></path> <path d="m342.5,302.9c0,6.3 5.2,10.4 10.4,10.4h9.4c5.2,0 10.4-4.2 10.4-10.4 0-6.3-5.2-10.4-10.4-10.4h-9.3c-6.3,0-10.5,4.2-10.5,10.4z"></path> </g> </g> </g></svg>
                        <span className="max-md:hidden truncate">Wallet</span>
                    </NavItem>
                </li>
                <li className="w-full flex items-center">
                    <NavItem href="/card" active={activePage === '/card'}>
                        <svg className="fill-current size-6 max-md:size-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5z"></path></svg>
                        <span className="max-md:hidden truncate">Card</span>
                    </NavItem>
                </li>
                <li className="w-full flex items-center md:mt-auto">
                    <NavItem href="/menu" className="md:mt-auto md:self-end max-md:items-center" active={activePage === '/menu'}>
                        <svg
                            className="fill-current size-6 max-md:size-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            width="24"
                            height="24"
                            role="img"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                            />
                        </svg>
                        <span className="max-md:hidden truncate">Menu</span>
                    </NavItem>
                </li>
            </ul>
        </div>
    )
}