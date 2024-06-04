'use client';

import { useState } from "react";

export default function SearchWeb() {
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const searchQuery = event.target.elements.search.value;
        const url = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="flex flex-col items-center justify-center h-56 w-full bg-cover bg-center bg-no-repeat rounded-xl bg-[url('https://asset.onekey-asset.com/app-monorepo/e9b0a1d624bf2603c063f775fa9937876b5f361c/static/media/header_bg.be6c66b54924886ea725.png')]">
            <h1 className="text-4xl font-semibold">Discover Web3 Sites</h1>
            <form onSubmit={handleSubmit} className={`flex justify-between items-center bg-white w-4/5 rounded-xl border h-[50px] mt-6`} style={{ boxShadow: isFocused ? 'rgb(51, 198, 65) 0px 0px 0px 1px' : 'none', borderColor: isFocused ? 'rgb(51, 198, 65)' : 'rgb(51 51 77)' }}>
                <div className="ml-3 flex text-base items-center flex-1">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" color="#8C8CA1" role="img">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
                    </svg>
                    <input
                        type="search"
                        id="search"
                        name="search"
                        className="w-full bg-white p-2 outline-none text-black placeholder:text-[#8C8CA1]"
                        placeholder="Search or type URL"
                        autoComplete='none'
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </div>
                <div className="w-[72px] p-2 h-full">
                    <button type="submit" className="bg-black w-full h-full text-sm rounded-xl font-medium hover:bg-blackHover">Go</button>
                </div>
            </form>
            <p className="mt-4 text-sm text-gray-300">
                Explore Web3 world with XCARD, a safer and simpler way.
            </p>
        </div>
    );
}