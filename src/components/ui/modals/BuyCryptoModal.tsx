'use client';

import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import GrayButton from "../inputs/buttons/GrayButton";
import SearchInput from "../inputs/SearchInput";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { fetchNetworks, selectNetwork } from "@/store/reducers/NetworksSlice";
import { fetchTokens } from "@/store/reducers/TokensSlice";

const BuyCryptoModal = ({ isOpen, onClose, onOpenChange }: { isOpen: boolean, onClose: () => void, onOpenChange: () => void }) => {
    const dispatch = useAppDispatch();
    const tokens = useAppSelector((state: RootState) => state.tokens.items);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (tokens.length === 0) {
            dispatch(fetchTokens);
        }
    }, [dispatch, tokens.length]);


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredTokens = tokens.filter(token =>
        token.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Modal hideCloseButton isOpen={isOpen} onOpenChange={onClose}>
            <ModalContent className="sm:max-w-full max-md:rounded-none max-md:m-0 dark:bg-gray-600 rounded-3xl md:max-h-[90vh] h-[560px] md:max-w-[420px] max-md:size-full max-md:max-w-full sm:mx-0">
                <>
                    <ModalHeader className="flex justify-between items-center border-b-2 dark:border-gray-400">
                        <h1>Buy</h1>
                        <div className="flex items-center gap-2">
                            <button onClick={onClose} className="flex items-center justify-center border-2 dark:border-gray-400 bg-gray-50 dark:bg-gray-420 p-1 rounded-full">
                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#8C8CA1" role="img"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
                            </button>
                        </div>
                    </ModalHeader>
                    <ModalBody className="pt-7">
                        <SearchInput className="" value={searchQuery} onChange={handleSearchChange} />
                        <div className="max-h-[407px] overflow-y-auto">
                            <ul className="max-h-full">
                                {filteredTokens.map((token) => (
                                    <li key={token.id}>
                                        <a href='' className="font-medium flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-420 rounded-xl w-full">
                                            <div className="flex gap-3 items-center">
                                                <img src={token.logo} alt={token.name} width={32} height={32} />
                                                <span>{token.name}</span>
                                            </div>
                                            <div className="rounded-full">
                                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02z" clipRule="evenodd"></path></svg>
                                            </div>
                                        </a>
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

export default BuyCryptoModal;
