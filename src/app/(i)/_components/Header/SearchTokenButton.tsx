'use client';

import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { RootState } from '@/store/store';
import { fetchNetworks } from '@/store/reducers/networksSlice';
import GrayButton from '@/components/ui/inputs/buttons/GrayButton';
import NetworksModal from '@/components/ui/modals/NetworksModal';
import CreateNetworkModal from '@/components/ui/modals/CreateNetworkModal';

export default function SearchTokenButton() {
    const dispatch = useAppDispatch();
    const networks = useAppSelector((state: RootState) => state.networks.items);
    const activeNetworkId = useAppSelector((state: RootState) => state.networks.activeNetworkId);
    const activeNetwork = networks.find(network => network.chainId === activeNetworkId);

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
            <GrayButton className='max-md:hover:dark:bg-gray-600 flex gap-2 rounded-xl' onClick={() => setIsNetworkModalOpen(true)}>
                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9z" clipRule="evenodd"></path></svg>
                <span className='text-sm'>Search Tokens</span>
            </GrayButton>
            {/* <NetworksModal
                isOpen={isNetworkModalOpen}
                onClose={() => setIsNetworkModalOpen(false)}
                onOpenNewModal={openNewModal}
            /> */}
        </>
    );
}
