"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

export type SheetContextProps = {
  data: {
    isOpen: boolean;
    currentSheet: "Contact" | "FAQ";
  };
  setData: Dispatch<
    SetStateAction<{
      isOpen: boolean;
      currentSheet: "Contact" | "FAQ";
    }>
  >;
};
export const SheetContext = createContext<SheetContextProps>({
  data: {
    isOpen: false,
    currentSheet: "Contact",
  },
  setData: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function SheetProvider({ children }: Readonly<Props>) {
  const [data, setData] = useState<{
    isOpen: boolean;
    currentSheet: "Contact" | "FAQ";
  }>({
    isOpen: false,
    currentSheet: "Contact",
  });
  const contextValue = useMemo<SheetContextProps>(
    () => ({
      data,
      setData,
    }),
    [data, setData],
  );
  return (
    <SheetContext.Provider value={contextValue}>
      {children}
    </SheetContext.Provider>
  );
}

export function useSheets() {
  return useContext(SheetContext);
}
