import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import GreenButton from "../inputs/buttons/GreenButton";
import { useForm } from 'react-hook-form';
import AuthInput from "../inputs/AuthInput";
import { Wallet } from "@/types";

const RemoveWalletModal = ({ isOpen, onOpenChange, walletInfo, onClose }: { isOpen: boolean, onOpenChange: any, walletInfo: Wallet, onClose: any }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { verificationCode } = watch();

    const onSubmit = () => {

    }

    return (
      <>
        <Modal hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <ModalContent className="dark:bg-gray-500 items-center flex gap-5 py-6 max-md:rounded-none">
                {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col items-center gap-4 py-0">
                        <div className="flex items-center justify-center p-3 rounded-full bg-yellow-softbg bg-opacity-20">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" color="#E5484D" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg>
                        </div>
                        <h1>Enter code from email</h1>
                    </ModalHeader>
                    <ModalBody className="py-0">
                    <p className="text-center text-gray-300 font-normal text-sm">
                        Please enter the verification code sent to your email to complete the login process.
                    </p>
                        <AuthInput
                            type="text"
                            placeholder="Code"
                            className="text-sm h-11"
                            error={errors.verificationCode && errors.verificationCode.message}
                            register={register("verificationCode", {
                                required: "Поле обязательно для заполнения.",
                            })}
                            />
                    </ModalBody>
                    <ModalFooter className="py-0 flex w-full">
                        <button onClick={onClose} className="font-medium dark:bg-gray-475 dark:hover:bg-gray-420 text-sm px-4 rounded-xl border-2 dark:border-gray-400 flex-1">Cancel</button>
                        <GreenButton type="submit" disabled={!verificationCode} text={'Send'} size="sm flex-1" />
                    </ModalFooter>
                </>
                )}
            </ModalContent>
            </form>
        </Modal>
      </>
    );
};

export default RemoveWalletModal;