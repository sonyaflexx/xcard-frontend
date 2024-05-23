import CreateWalletButton from "./CreateWalletButton"

export default function EmptyWalletNotification() {
    return (
        <div className="flex flex-col self-center items-center gap-4">
            <div className="text-6xl p-2">🤑</div>
            <h2 className="text-base leading-none">No wallet</h2>
            <p className="text-gray-300 text-sm leading-none">Get started by creating a new wallet.</p>
            <CreateWalletButton />
        </div>
    )
}