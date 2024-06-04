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
                <li className="w-full flex items-center">
                    <NavItem href="/market" active={activePage === '/market'}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" role="img"><path d="M6.97 13.667a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm3.53-2.47.53-.53a.75.75 0 0 0-1.06 0l.53.53Zm2.148 2.148-.53.53a.75.75 0 0 0 1.145-.101l-.615-.43Zm4.227-2.893a.75.75 0 1 0-.75-1.299l.75 1.299ZM8.03 14.728l3-3-1.06-1.061-3 3 1.06 1.06Zm1.94-3 2.147 2.147 1.06-1.06-2.147-2.148-1.06 1.06Zm3.293 2.046a11.312 11.312 0 0 1 3.612-3.322l-.75-1.299a12.811 12.811 0 0 0-4.093 3.763l1.23.858ZM6 4.5h12V3H6v1.5ZM19.5 6v12H21V6h-1.5ZM18 19.5H6V21h12v-1.5ZM4.5 18V6H3v12h1.5ZM6 19.5A1.5 1.5 0 0 1 4.5 18H3a3 3 0 0 0 3 3v-1.5ZM19.5 18a1.5 1.5 0 0 1-1.5 1.5V21a3 3 0 0 0 3-3h-1.5ZM18 4.5A1.5 1.5 0 0 1 19.5 6H21a3 3 0 0 0-3-3v1.5ZM6 3a3 3 0 0 0-3 3h1.5A1.5 1.5 0 0 1 6 4.5V3Z"></path></svg>
                        <span className="max-md:hidden truncate">Market</span>
                    </NavItem>
                </li>
                <li className="w-full flex items-center">
                    <NavItem href="/explore" active={activePage === '/explore'}>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" strokeLinecap="round" strokeLinejoin="round"></path><path d="m15.24 8.76-1.62 4.86-4.86 1.62 1.62-4.86 4.86-1.62Z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <span className="max-md:hidden truncate">Explore</span>
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