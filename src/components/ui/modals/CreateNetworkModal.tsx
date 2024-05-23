'use client';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { ethers } from 'ethers'; 
import { useState, useEffect } from "react";

import Input from "../inputs/Input";
import GreenButton from "../inputs/buttons/GreenButton";

const CreateNetworkModal = ({ isOpen, onClose, onOpenPreviousModal }: { isOpen: boolean, onClose: () => void, onOpenPreviousModal: () => void }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { name, urlRpc} = watch();
    const [rpcError, setRpcError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateNetwork = async (data: any) => {
        console.log(data)
    }

    const validateUrlRpc = (value: string) => {
        const urlRegex = /^(https?|wss):\/\/.+$/;
        if (!urlRegex.test(value)) {
            return "URL должен начинаться с http, https или wss.";
        }
        return true;
    };

    useEffect(() => {
        let timeoutId;
        
        const validateRpc = async () => {
            setIsLoading(true);
            try {
                const provider = new ethers.JsonRpcProvider(watch("urlRpc"));
                await provider.getBlockNumber();
                setRpcError(null);
            } catch (error) {
                setRpcError('Не удалось получить RPC.');
            } finally {
                setIsLoading(false);
            }
        };
    
        if (watch("urlRpc")) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(validateRpc, 500);
        } else {
            setRpcError(null);
        }
    
        return () => clearTimeout(timeoutId);
    }, [urlRpc]);

    return (
        <Modal hideCloseButton isOpen={isOpen} onOpenChange={onClose}>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(handleCreateNetwork)}>
            <ModalContent className="dark:bg-gray-600 rounded-3xl max-h-[90vh] h-[560px] max-w-[400px]">
                <>
                    <ModalHeader className="flex justify-between items-center border-b dark:border-gray-400">
                        <div className="flex gap-3 items-center">
                            <button type="button" onClick={onOpenPreviousModal} className="flex items-center justify-center border dark:border-gray-400 dark:bg-gray-420 p-1 rounded-full">
                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#8C8CA1" role="img"><path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10z" clipRule="evenodd"></path></svg>
                            </button>
                            <h1>Add Chain</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <button type="button" onClick={onClose} className="flex items-center justify-center border dark:border-gray-400 bg-gray-50 dark:bg-gray-420 p-1 rounded-full">
                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#8C8CA1" role="img"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
                            </button>
                        </div>
                    </ModalHeader>
                    <ModalBody className="py-7 overflow-y-auto">
                            <div className="flex flex-col gap-7">
                                <Input
                                    type="text"
                                    label="Chain Name"
                                    error={errors.name && errors.name.message}
                                    register={register("name", {
                                        required: "Поле обязательно для заполнения.",
                                    })}
                                />
                                <Input
                                    type="text"
                                    label="URL RPC"
                                    error={errors.urlRpc && errors.urlRpc.message || rpcError}
                                    register={register("urlRpc", {
                                        required: "Поле обязательно для заполнения.",
                                        validate: validateUrlRpc,
                                    })}
                                />
                                <Input
                                    type="text"
                                    label="Chain ID"
                                    error={errors.chainId && errors.chainId.message}
                                    register={register("chainId", {
                                        required: "Поле обязательно для заполнения.",
                                    })}
                                />
                                <Input
                                    type="text"
                                    label="Symbol"
                                    placeholder="ETH"
                                    error={errors.symbol && errors.symbol.message}
                                    register={register("symbol")}
                                    optional={true}
                                />
                                <Input
                                    type="text"
                                    label="Blockchain Explorer URL"
                                    error={errors.explorerUrl && errors.explorerUrl.message}
                                    register={register("explorerUrl")}
                                    optional={true}
                                />
                            </div>
                    </ModalBody>
                    <ModalFooter className="border-t dark:border-gray-400">
                        <GreenButton type="submit" text="Save" size="sm leading-none" disabled={isLoading} />
                    </ModalFooter>
                </>
            </ModalContent>
            </form>
        </Modal>
    );
};

export default CreateNetworkModal;
