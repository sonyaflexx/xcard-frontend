import { ReactNode } from "react";

export default function AuthDesc({children} : {children: ReactNode}) {
    return (
        <div className="flex-1 flex flex-col gap-8 pl-8 border-l-2 dark:border-gray-400">
            <div className="w-12 h-12 rounded-full bg-green-20 dark:bg-green-300 text-green-50 bg-opacity-30 dark:bg-opacity-30 flex items-center justify-center">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z"></path></svg>
            </div>
            <div className="flex flex-col gap-4 w-full max-w-72 text-wrap text-sm">
                {children}
            </div>
        </div>
    )
}
