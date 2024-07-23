"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { data as EnglishData } from "@/locale/english";
import { data as PolistData } from "@/locale/polish";

export type LocationContextProps = {
  language: "EN" | "PL";
  setLanguage: Dispatch<SetStateAction<"EN" | "PL">>;
  pageData: typeof EnglishData;
  setPageData: Dispatch<SetStateAction<typeof EnglishData>>;
};
export const LocationContext = createContext<LocationContextProps>({
  language: "EN",
  setLanguage: () => {},
  pageData: EnglishData,
  setPageData: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function LocationProvider({ children }: Readonly<Props>) {
  const [pageData, setPageData] = useState<typeof EnglishData>(EnglishData);
  const [language, setLanguage] = useState<"EN" | "PL">("EN");
  const contextValue = useMemo<LocationContextProps>(
    () => ({
      language,
      setLanguage,
      pageData,
      setPageData,
    }),
    [language, setLanguage, pageData, setPageData],
  );

  useMemo(() => {
    if (language === "EN") {
      setPageData(EnglishData);
    } else {
      setPageData(PolistData);
    }
  }, [language]);

  return (
    <LocationContext.Provider value={contextValue}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}
