'use client'

import { useState, useEffect } from 'react';
import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu } from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useSettings } from '@/hooks/useSettings';
import { RootState } from '@/store/store';
import { AppDispatch } from '@/store/store';

const ThemeSwitcher: React.FC = () => {
    const { settings, handleThemeChange } = useSettings();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [settings.theme]);

    if (!mounted) {
        return (
            <div className='animate-pulse flex items-center gap-1'>
                <div className='w-10 h-5 rounded-md bg-gray-200 dark:bg-gray-300'></div>
            </div>
        )
    }

    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <div className='flex items-center gap-1'>
                        <span>{settings.theme}</span>
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z" clipRule="evenodd"></path></svg>
                    </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Theme Selector">
                    <DropdownItem key="auto" onClick={() => handleThemeChange('Auto')}>
                        <div className='flex justify-between'>
                            <span>Auto</span>
                            {settings.theme === 'Auto' &&  <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#33C641" role="img"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"></path></svg>}
                        </div>
                    </DropdownItem>
                    <DropdownItem key="light" onClick={() => handleThemeChange('Light')}>
                    <div className='flex justify-between'>
                            <span>Light</span>
                            {settings.theme === 'Light' &&  <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#33C641" role="img"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"></path></svg>}
                        </div>
                    </DropdownItem>
                    <DropdownItem key="dark" onClick={() => handleThemeChange('Dark')}>
                    <div className='flex justify-between'>
                            <span>Dark</span>
                            {settings.theme === 'Dark' &&  <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#33C641" role="img"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"></path></svg>}
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    )};
  
  export default ThemeSwitcher;