import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import ActionButton from "@/app/(i)/_components/WalletMenu/ActionButton";
import { useForm } from "react-hook-form";
import AddressInput from "../../inputs/AddressInput";
import GreenButton from "../../inputs/buttons/GreenButton";

const TokenDetailsModal = ({ isOpen, onClose, onBack, token }: { isOpen: any, onClose: any, onBack: any, token: any }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    return (
        <Modal hideCloseButton isOpen={isOpen} onOpenChange={onClose}>
        <form>
            <ModalContent className="sm:mx-0 sm:max-w-full max-md:rounded-none max-md:m-0 max-md:size-full dark:bg-gray-600 rounded-3xl md:max-h-[90vh] md:max-w-[420px]">
                <>
                    <ModalHeader className="flex justify-between items-center border-b-2 dark:border-gray-400">
                        <div className="flex gap-3 items-center">
                            <button onClick={onBack} type="button" className="flex items-center justify-center border-2 dark:border-gray-400 dark:bg-gray-420 bg-gray-50 p-1 rounded-full">
                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10z" clipRule="evenodd"></path></svg>
                            </button>
                            <div>
                                <h1>Send to</h1>
                                <div className="flex items-center gap-1">
                                    <img src={token.logo} width={16} height={16} className="size-4" />
                                    <div className="flex flex-col">
                                        <span className="text-xs font-medium text-gray-300">{token.name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={onClose} className="flex items-center justify-center border-2 dark:border-gray-400 dark:bg-gray-420 bg-gray-50 p-1 rounded-full">
                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#8C8CA1" role="img"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
                            </button>
                        </div>
                    </ModalHeader>
                    <ModalBody className="py-7">
                            <div className="flex flex-col gap-7">
                                <div className="flex items-center gap-3">
                                    <img src={token.logo} width={32} height={32} className="size-8" />
                                    <div className="flex flex-col">
                                        <span className="font-medium dark:text-gray-20">{token.symbol}</span>
                                    </div>
                                </div>
                                <div>
                                    <AddressInput
                                        error={errors.address && errors.address.message}
                                        register={register("email", {
                                        required: "Поле обязательно для заполнения.",
                                        })}
                                    />
                                </div>
                            </div>
                    </ModalBody>
                    <ModalFooter className="border-t-2 dark:border-gray-400">
                        <GreenButton type="submit" text="Next" size="sm" />
                    </ModalFooter>
                </>
            </ModalContent>
            </form>
        </Modal>
    );
};

export default TokenDetailsModal;