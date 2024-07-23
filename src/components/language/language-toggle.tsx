import * as React from "react";
import { Button } from "@/components/ui/button";
import EnglishLanguageIcon from "@/components/language/custom-icons/english-icon";
import PolishLanguageIcon from "@/components/language/custom-icons/polish-icon";

type Props = {
  language: "EN" | "PL";
  setLanguage: (location: "EN" | "PL") => void;
};

export function LanguageToggle({ language, setLanguage }: Props) {
  return (
    <>
      {language === "EN" ? (
        <Button
          variant="ghost"
          size="icon"
          className={"size-8 pl-2"}
          onClick={() => setLanguage("PL")}
        >
          <EnglishLanguageIcon />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          className={"size-8 pl-2"}
          onClick={() => setLanguage("EN")}
        >
          <PolishLanguageIcon />
        </Button>
      )}
    </>
  );
}
