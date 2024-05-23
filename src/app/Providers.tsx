import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { StoreProvider } from "@/store/StoreProvider";

export function Providers({ children }: { children: any }) {
  return (
    <StoreProvider>
      <NextUIProvider className="w-full flex">
        { children }
      </NextUIProvider>
    </StoreProvider>
  );
}