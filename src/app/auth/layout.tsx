import React from "react";
import Head from "next/head";
import Link from "next/link";
import GrayButton from "@/components/ui/inputs/buttons/GrayButton";

const AuthLayout = ({ children }: { children: any }) => {
  return (
    <>
      <div className="h-auto mt-16 mx-auto flex flex-col items-start gap-8">
        <div className='-ml-3'>
          <GrayButton>
            <Link href={"/"}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24"  role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path></svg>
            </Link>
          </GrayButton>
        </div>
        <div className='flex gap-20'>
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
