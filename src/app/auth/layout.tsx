'use client'

import React from "react";

import Head from "next/head";
import Link from "next/link";
import GrayButton from "@/components/ui/inputs/buttons/GrayButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppSelector } from "@/hooks/redux";
import { RootState } from "@/store/store";

const AuthLayout = ({ children }: { children: any }) => {
  const token = useAppSelector((state: RootState) => state.auth.token);

  const router = useRouter();
  useEffect(() => {
    if (token) {
      router.push('/');
    }
  }, []);

  return (
    <>
      <div className="h-auto md:mt-16 mx-auto flex flex-col items-start gap-8 px-6 pt-4 pb-24 w-full max-w-[788px]">
        <div className='-ml-3'>
          <GrayButton>
            <Link href={"/"}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24"  role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path></svg>
            </Link>
          </GrayButton>
        </div>
        <div className='flex gap-20 max-md:flex-col w-full'>
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
