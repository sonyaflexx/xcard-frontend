import Input from "./Input";

export default function AddressInput({className, placeholder, error, register, label }: {className?: string, placeholder?: string; error?: any; register: any, label?: string}) {
    return (
        <Input 
            type="text"
            placeholder="Address or domain name" 
            error={error}
            {...register}
            className="text-xs h-40"
        >
            <div className="text-sm h-11 absolute bottom-0 flex w-full border-t-2 dark:border-gray-400">
                <button className="flex gap-3 w-full items-center justify-center">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path d="M10.75 16.82A7.462 7.462 0 0 1 15 15.5a7.5 7.5 0 0 1 2.046.282.75.75 0 0 0 .954-.722v-11a.75.75 0 0 0-.546-.721A9.006 9.006 0 0 0 15 3a8.963 8.963 0 0 0-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 0 0 5 3a9 9 0 0 0-2.454.339A.75.75 0 0 0 2 4.06v11a.75.75 0 0 0 .954.721A7.506 7.506 0 0 1 5 15.5c1.579 0 3.042.487 4.25 1.32V4.065z"></path></svg>
                    <span>Contact</span>
                </button>
                <button className="flex gap-3 w-full items-center justify-center">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h2a.75.75 0 0 0 0-1.5h-2zm9.5 0a.75.75 0 0 0 0 1.5h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 0 1.5 0v-2A2.25 2.25 0 0 0 15.75 2h-2zM3.5 13.75a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 4.25 18h2a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 1-.75-.75v-2zm14.5 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 1-.75.75h-2a.75.75 0 0 0 0 1.5h2A2.25 2.25 0 0 0 18 15.75v-2zM7 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"></path></svg>
                    <span>Scan</span>
                </button>
            </div>
        </Input>
    )
}