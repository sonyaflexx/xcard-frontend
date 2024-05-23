'use client'

import { useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import GreenButton from "../inputs/buttons/GreenButton";
import { useForm } from 'react-hook-form';
import AuthInput from "../inputs/AuthInput";
import Input from "../inputs/Input";
import { Wallet } from "@/types";
import AvatarModal from './AvatarModal';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { RootState } from '@/store/store';
import { updateWallet } from '@/store/reducers/AccountSlice';


const EditWalletModal = ({ isOpen, onOpenChange, walletInfo, onClose }: { isOpen: boolean, onOpenChange: any, walletInfo: Wallet, onClose: () => void }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

    const dispatch = useAppDispatch();
    const walletId = walletInfo.id;
    const wallet = useAppSelector((state: RootState) =>
    state.account.wallets.find((wallet) => wallet.id === walletId)
    );

    const [selectedSmiley, setSelectedSmiley] = useState(wallet?.avatar);
    const [selectedColor, setSelectedColor] = useState(wallet?.avatarBgColor);

    const onSubmit = (data: any) => {
        const updatedWallet: Wallet = {
            name: data.name || wallet?.name,
            avatarBgColor: selectedColor || '',
            avatar: selectedSmiley || '',
            id: wallet?.id || 0,
            address: wallet?.address || '',
            tokens: wallet?.tokens,
            transactions: wallet?.transactions
        };
          
        dispatch(updateWallet(updatedWallet));
        onClose();
    };

    const handleAvatarSelect = (smiley: string, color: string) => {
        setSelectedSmiley(smiley);
        setSelectedColor(color);
        setIsAvatarModalOpen(false);
    };

    return (
        <>
            <Modal hideCloseButton isOpen={isOpen} onClose={onClose}>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                    <ModalContent className="dark:bg-gray-600 rounded-3xl max-h-[90vh] max-w-[420px]">
                        <>
                            <ModalHeader className="flex justify-between items-center border-b-2 dark:border-gray-400">
                                <div className="flex gap-3 items-center">
                                    <h1>Edit Wallet</h1>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button type="button" onClick={onClose} className="flex items-center justify-center border-2 dark:border-gray-400 bg-gray-50 dark:bg-gray-420 p-1 rounded-full">
                                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#8C8CA1" role="img"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
                                    </button>
                                </div>
                            </ModalHeader>
                            <ModalBody className="p p-6">
                                <div className="flex flex-col items-center gap-7">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-xl relative" style={{backgroundColor: selectedColor || wallet?.avatarBgColor}} onClick={() => setIsAvatarModalOpen(true)}> 
                                        <div className="text-3xl text-center leading-none">
                                            {selectedSmiley || wallet?.avatar}
                                        </div>
                                        <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 p-0.5 dark:bg-gray-350 border-2 dark:border-gray-600 rounded-full">
                                            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" role="img"><path d="m2.695 14.763-1.262 3.154a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.885L17.5 5.5a2.121 2.121 0 0 0-3-3L3.58 13.42a4 4 0 0 0-.885 1.343z"></path></svg>
                                        </div>
                                    </div>
                                    <Input
                                        type="text"
                                        error={errors.name && errors.name.message}
                                        placeholder={wallet?.name}
                                        register={register("name")}
                                        className="px-0"
                                        classNameInput="py-2 px-3 text-base leading-6"
                                    />
                                </div>
                                </ModalBody>
                            <ModalFooter className="p-6 pt-0">
                                <GreenButton type="submit" text="Done" size="sm py-1 w-full" />
                            </ModalFooter>
                        </>
                    </ModalContent>
                </form>
            </Modal>

            <AvatarModal isOpen={isAvatarModalOpen} onClose={() => setIsAvatarModalOpen(false)} onSelect={handleAvatarSelect} wallet={wallet} />
        </>
    );
};

export default EditWalletModal