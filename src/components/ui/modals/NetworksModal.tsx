'use client';

import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import GrayButton from "../inputs/buttons/GrayButton";
import SearchInput from "../inputs/SearchInput";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { fetchNetworks, selectNetwork } from "@/store/reducers/networksSlice";

const NetworksModal = ({ isOpen, onClose, onOpenNewModal }: { isOpen: boolean, onClose: () => void, onOpenNewModal: () => void }) => {
    const dispatch = useAppDispatch();
    const networks = useAppSelector((state: RootState) => state.networks.items);
    const activeNetworkId = useAppSelector((state: RootState) => state.networks.activeNetworkId);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (networks.length === 0) {
            dispatch(fetchNetworks());
        }
    }, [dispatch, networks.length]);

    const handleNetworkSelect = (networkId: number) => {
        dispatch(selectNetwork(networkId));
        onClose();
    };
    
    const handleCreateNetwork = () => {
        onClose();
        onOpenNewModal();
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredNetworks = networks.filter(network =>
        network.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Modal hideCloseButton isOpen={isOpen} onOpenChange={onClose}>
            <ModalContent className="sm:max-w-full max-md:rounded-none max-md:m-0 dark:bg-gray-600 rounded-3xl md:max-h-[90vh] h-[560px] md:max-w-[420px] max-md:size-full max-md:max-w-full sm:mx-0">
                <>
                    <ModalHeader className="flex justify-between items-center border-b-2 dark:border-gray-400">
                        <h1>Chains</h1>
                        <div className="flex items-center gap-2">
                            <GrayButton onClick={handleCreateNetwork}>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path></svg>
                            </GrayButton>
                            <button onClick={onClose} className="flex items-center justify-center border-2 dark:border-gray-400 bg-gray-50 dark:bg-gray-420 p-1 rounded-full">
                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#8C8CA1" role="img"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
                            </button>
                        </div>
                    </ModalHeader>
                    <ModalBody className="pt-7">
                        <SearchInput className="" value={searchQuery} onChange={handleSearchChange} />
                        <div className="max-h-[407px] overflow-y-auto">
                            <ul className="max-h-full">
                                {filteredNetworks.map((network) => (
                                    <li key={network.id}>
                                        <button onClick={() => handleNetworkSelect(network.id)} className="font-medium flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-420 rounded-xl w-full">
                                            <div className="flex gap-3 items-center">
                                                <img src={network.logo} alt={network.name} width={32} height={32} />
                                                <span>{network.name}</span>
                                            </div>
                                            {network.id === activeNetworkId && (
                                                <div className="rounded-full">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" color="#33C641" role="img"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clipRule="evenodd"></path></svg>
                                                </div>
                                            )}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ModalBody>
                </>
            </ModalContent>
        </Modal>
    );
};

export default NetworksModal;
