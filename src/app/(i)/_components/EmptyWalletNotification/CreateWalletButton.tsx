import GreenButton from "@/components/ui/inputs/buttons/GreenButton"
import CreateWalletModal from "@/components/ui/modals/CreateWalletModal";
import { useAppSelector } from "@/hooks/redux";
import { RootState } from "@/store/store";
import { useDisclosure } from "@nextui-org/modal";

export default function CreateWalletButton() {
    const account = useAppSelector((state: RootState) => state.account)
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
         account.status.fetchAccountData === 'succeeded' ? (
            <>
                <GreenButton type="button" onClick={onOpen}>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20" height="20" color="#FFFFFF" role="img">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                    </svg>
                    <span className="leading-none text-white">Create Wallet</span>
                </GreenButton>
                <CreateWalletModal isOpen={isOpen} onClose={onClose} />
            </>
        ) : (
            <>
                <GreenButton type="link" href={'/auth'}>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20" height="20" color="#FFFFFF" role="img">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                    </svg>
                    <span className="leading-none text-white">Create Wallet</span>
                </GreenButton>
            </>
        )
    );
}