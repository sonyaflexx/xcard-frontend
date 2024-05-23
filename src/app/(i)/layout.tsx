'use client'

import Header from "./_components/Header";
import Navbar from "@/components/ui/navbar";
import { usePathname } from "next/navigation";

export default function CabinetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const activePage = usePathname()

  return (
    <>
      <Navbar activePage={activePage} />
      <div className="flex flex-col w-full">
        <Header activePage={activePage} />
        <main className="flex flex-1 justify-center">
          {children}
        </main>
      </div>
    </>
  );
}