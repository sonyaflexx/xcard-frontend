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
import { createWallet, updateWallet } from '@/store/reducers/accountSlice';
import { smileys, colors } from '@/components/smileysAndColors';


const CreateWalletModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const getRandomIndex = (array: Array<any>) => Math.floor(Math.random() * array.length);

    const [selectedSmiley, setSelectedSmiley] = useState(smileys[getRandomIndex(smileys)]);
    const [selectedColor, setSelectedColor] = useState(colors[getRandomIndex(colors)]);
    const dispatch = useAppDispatch();

    const onSubmit = async (data: any) => {
        try {
            const walletData: Wallet = {
                ...data,
                name: data.name || 'Wallet',
                avatar: selectedSmiley,
                avatarBgColor: selectedColor
            };
            console.log(walletData)
            await dispatch(createWallet(walletData));
            onClose();
        } catch (error) {
            console.error('Error creating wallet:', error);
        }
    };

    const handleAvatarSelect = (smiley: string, color: string) => {
        setSelectedSmiley(smiley);
        setSelectedColor(color);
    };

    const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

    return (
        <>
            <Modal hideCloseButton isOpen={isOpen} onClose={onClose}>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                    <ModalContent className="sm:mx-0 sm:max-w-full max-md:rounded-none max-md:m-0 dark:bg-gray-600 rounded-3xl md:max-h-[90vh] md:max-w-[420px] max-md:size-full">
                        <>
                            <ModalHeader className="flex justify-between items-center border-b-2 dark:border-gray-400">
                                <div className="flex gap-3 items-center">
                                    <h1>Create Wallet</h1>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button type="button" onClick={onClose} className="flex items-center justify-center border-2 dark:border-gray-400 bg-gray-50 dark:bg-gray-420 p-1 rounded-full">
                                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#8C8CA1" role="img"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
                                    </button>
                                </div>
                            </ModalHeader>
                            <ModalBody className="p p-6">
                                <div className="flex flex-col items-center gap-7">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-xl relative" style={{backgroundColor: selectedColor}} onClick={() => setIsAvatarModalOpen(true)}> 
                                        <div className="text-3xl text-center leading-none">
                                            {selectedSmiley}
                                        </div>
                                        <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 p-0.5 dark:bg-gray-350 border-2 dark:border-gray-600 rounded-full">
                                            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" role="img"><path d="m2.695 14.763-1.262 3.154a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.885L17.5 5.5a2.121 2.121 0 0 0-3-3L3.58 13.42a4 4 0 0 0-.885 1.343z"></path></svg>
                                        </div>
                                    </div>
                                    <Input
                                        type="text"
                                        error={errors.name && errors.name.message}
                                        placeholder='Wallet'
                                        register={register("name")}
                                        className="px-0"
                                        classNameInput="py-3 px-3 text-lg leading-6"
                                    />
                                </div>
                                <GreenButton type="submit" text="Done" size="sm py-1 w-full mt-2" />
                                </ModalBody>
                        </>
                    </ModalContent>
                </form>
            </Modal>

            <AvatarModal isOpen={isAvatarModalOpen} onClose={onClose} onBack={() => setIsAvatarModalOpen(false)} onSelect={handleAvatarSelect} wallet={{avatar: selectedSmiley, avatarBgColor: selectedColor}} />
        </>
    );
};

export default CreateWalletModal;