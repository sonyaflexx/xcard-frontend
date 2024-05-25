'use client';

import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { RootState } from '@/store/store';
import { fetchNetworks } from '@/store/reducers/NetworksSlice';
import GrayButton from '@/components/ui/inputs/buttons/GrayButton';
import NetworksModal from '@/components/ui/modals/NetworksModal';
import CreateNetworkModal from '@/components/ui/modals/CreateNetworkModal';

export default function NetworkButton() {
    const dispatch = useAppDispatch();
    const networks = useAppSelector((state: RootState) => state.networks.items);
    const activeNetworkId = useAppSelector((state: RootState) => state.networks.activeNetworkId);
    const activeNetwork = networks.find(network => network.id === activeNetworkId);

    const [isNetworkModalOpen, setIsNetworkModalOpen] = useState(false);
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);

    useEffect(() => {
        if (networks.length === 0) {
            dispatch(fetchNetworks());
        }
    }, [dispatch, networks.length]);

    const openNewModal = () => {
        setIsNetworkModalOpen(false);
        setIsNewModalOpen(true);
    };

    const openNetworkModal = () => {
        setIsNewModalOpen(false);
        setIsNetworkModalOpen(true);
    };

    return (
        <>
            <GrayButton className='max-md:hover:dark:bg-gray-600' onClick={() => setIsNetworkModalOpen(true)}>
                <div className='flex items-center gap-2 max-md:p-1 max-md:border border-gray-200 bg-gray-50 dark:border-gray-400 max-md:rounded-full max-md:dark:bg-gray-475'>
                    {activeNetwork ? (
                            <>
                                <img src={activeNetwork.logo} alt="" width={24} height={24} className='pl-[1.1px] rounded-full'/>
                                <span className='max-md:hidden text-sm dark:text-gray-50 font-medium leading-none'>{activeNetwork.name}</span>
                            </>
                        ) : (
                            <div className='animate-pulse flex items-center gap-1'>
                                <div className='w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-300'></div>
                                <div className='max-md:hidden w-16 h-4 rounded bg-gray-200 dark:bg-gray-300'></div>
                            </div>
                        )}
                    <svg className='max-md:hidden' viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z" clipRule="evenodd"></path></svg>
                </div>
            </GrayButton>
            <NetworksModal
                isOpen={isNetworkModalOpen}
                onClose={() => setIsNetworkModalOpen(false)}
                onOpenNewModal={openNewModal}
            />
            <CreateNetworkModal
                isOpen={isNewModalOpen}
                onClose={() => setIsNewModalOpen(false)}
                onOpenPreviousModal={openNetworkModal}
            />
        </>
    );
}
