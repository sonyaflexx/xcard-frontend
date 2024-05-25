import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import GreenButton from "../inputs/buttons/GreenButton";
import { useForm } from 'react-hook-form';
import AuthInput from "../inputs/AuthInput";

const EmailVerificationModal = ({ isOpen, onOpenChange, handleVerification }: { isOpen: boolean, onOpenChange: any, handleVerification: any }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { verificationCode } = watch();

    return (
      <>
        <Modal hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange}>
            <form onSubmit={handleSubmit(handleVerification)}>
            <ModalContent className="max-md:rounded-none sm:max-w-full max-md:m-0 dark:bg-gray-500 items-center flex gap-5 py-6 max-md:size-full sm:mx-0">
                {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col items-center gap-4 py-0">
                        <div className="flex items-center justify-center p-3 rounded-full bg-yellow-softbg bg-opacity-20">
                            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="email"> <path id="vector" d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#ffc800" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path id="vector_2" d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688" stroke="#ffc800" strokeWidth="1.5" strokeLinecap="round"></path> </g> </g> </g></svg>
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

export default EmailVerificationModal;