'use client'

import { useState } from 'react';
import GrayButton from '@/components/ui/inputs/buttons/GrayButton';
import GreenButton from '@/components/ui/inputs/buttons/GreenButton';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import TokenTable from '@/components/ui/TokenTable';

const WalletTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tokens = useAppSelector((state: RootState) => state.tokens.items)

  return (
    <div>
      <ul className='max-md:sticky top-12 max-md:-ml-4 max-md:!w-screen flex border-b-2 dark:border-gray-500 gap-6 font-medium text-sm'>
        <li className={`py-3 px-1 max-md:px-12 max-sm:px-8 text-gray-300 ${activeTab === 0 && 'border-green-50 border-b-3 dark:text-white text-gray-600'}`}>
          <button onClick={() => handleTabClick(0)}>TOKENS</button>
        </li>
        <li className={`py-3 px-1 max-md:px-12 max-sm:px-8 text-gray-300 ${activeTab === 1 && 'border-green-50 border-b-3 dark:text-white text-gray-600'}`}>
          <button onClick={() => handleTabClick(1)}>HISTORY</button>
        </li>
      </ul>
      {activeTab === 0 && 
        <div className='py-8 flex flex-col gap-5'>
            <div className='flex justify-between'>
                <h2 className='text-lg font-semibold'>Assets</h2>
            </div>
            <TokenTable tokens={tokens} />
        </div>}
        {activeTab === 1 && 
          <div className='py-8 flex flex-col gap-5'>
              <div className='flex justify-between'>
                  <h2 className='text-lg font-semibold'>History</h2>
              </div>
              <div className="flex flex-col self-center items-center gap-4 max-md:mb-48">
                  <div className="text-6xl p-2">🕐</div>
                  <h2 className="text-base leading-none font-medium">No Histories</h2>
                  <p className="text-gray-300 text-sm leading-none">Transaction histories can be viewed here.</p>
                  <GreenButton size="sm">Refresh</GreenButton>
              </div>
          </div>
        }
    </div>
  );
};

export default WalletTabs;