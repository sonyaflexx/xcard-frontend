'use client'

import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/modal';
import GreenButton from '../inputs/buttons/GreenButton';
import { smileys } from '@/components/smileys'; 

const colors = ['rgb(61, 61, 77)', 'rgb(228, 144, 144)', 'rgb(227, 177, 103)', 'rgb(145, 188, 118)', 'rgb(103, 190, 169)', 'rgb(85, 169, 217)', 'rgb(171, 125, 207)', 'rgb(223, 155, 208)'];

const AvatarModal = ({ isOpen, onClose, onSelect, wallet }) => {
    const [selectedSmiley, setSelectedSmiley] = useState(wallet.avatar);
    const [selectedColor, setSelectedColor] = useState(wallet.avatarBgColor);

    const onSubmit = () => {
        onSelect(selectedSmiley, selectedColor);
        onClose();
    };

    return (
        <Modal hideCloseButton isOpen={isOpen} onClose={onClose}>
            <ModalContent className="dark:bg-gray-600 rounded-3xl max-w-[420px]">
                <ModalHeader>
                    <div className='flex items-center justify-between w-full'>
                        <button type="button" className="flex items-center justify-center border-2 dark:border-gray-400 dark:bg-gray-420 p-1 rounded-full">
                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#8C8CA1" role="img"><path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10z" clipRule="evenodd"></path></svg>
                        </button>
                        <button type="button" onClick={onClose} className="flex items-center justify-center border-2 dark:border-gray-400 bg-gray-50 dark:bg-gray-420 p-1 rounded-full">
                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#8C8CA1" role="img"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
                        </button>
                    </div>
                </ModalHeader>
                <ModalBody className=" flex flex-col gap-4 w-full px-0 pb-0">
                    <div className='flex flex-col items-center gap-6 p-2'>
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl relative" style={{backgroundColor: selectedColor}}> 
                            <div className="text-3xl text-center leading-none">
                                {selectedSmiley}
                            </div>
                        </div>
                        <ul className="flex flex-wrap justify-around w-full px-8">
                            {colors.map((color, index) => (
                                <li key={index}>
                                    <div className={`rounded-full p-0.5 border border-white dark:border-gray-600`} style={{ backgroundColor: selectedColor === color ? color : 'transparent' }}>
                                        <div 
                                            className={`cursor-pointer size-9 border-4 border-white dark:border-gray-600 rounded-full flex}`} 
                                            style={{ backgroundColor: color }} 
                                            onClick={() => setSelectedColor(color)} 
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul className="p-6 dark:bg-gray-500 rounded-t-3xl flex flex-wrap overflow-y-auto flex-shrink max-h-[282px] w-full justify-center">
                        {smileys.map((smiley, index) => (
                            <li 
                                key={index} 
                                className={`cursor-pointer p-2`}
                                onClick={() => setSelectedSmiley(smiley)}
                            >
                                <div className="text-3xl size-9">{smiley}</div>
                            </li>
                        ))}
                    </ul>
                </ModalBody>
                <ModalFooter className="p-6 py-4">
                    <GreenButton type="button" onClick={onSubmit} size="sm px-5 leading-none">Done</GreenButton>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AvatarModal;