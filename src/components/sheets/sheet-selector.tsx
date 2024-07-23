import { Badge } from "@/components/ui/badge";
import { useSheets } from "@/providers/sheet-provider";
import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useLocation } from "@/providers/localization-provider";

type Props = {
  sheetsData: typeof import("@/locale/english").data.sheets;
};
const SheetSelector = ({ sheetsData }: Props) => {
  const { data, setData } = useSheets();
  const { language } = useLocation();

  const handleChangeSheet = (e: React.MouseEvent<HTMLDivElement>) => {
    if (language === "PL" && e.currentTarget.textContent === "Kontakt") {
      setData({ isOpen: true, currentSheet: "Contact" });
      return;
    }
    const sheet = e.currentTarget.textContent as "Contact" | "FAQ";
    setData({ isOpen: true, currentSheet: sheet });
  };

  const shouldHighlightSheet = (sheet: string): boolean => {
    return (
      data.currentSheet === sheet ||
      (language === "PL" &&
        sheet === "Kontakt" &&
        data.currentSheet === "Contact")
    );
  };

  return (
    <div className={"my-2"}>
      <p className={"w-full text-center text-xs"}>
        {sheetsData.sheetOptions.title}
      </p>
      <div className={"flex items-center justify-center gap-x-2"}>
        {sheetsData.sheetOptions.options.map((sheet, index) => (
          <Badge
            key={index}
            variant={"outline"}
            onClick={(e) => handleChangeSheet(e)}
            className={cn(
              "cursor-pointer",
              shouldHighlightSheet(sheet) && "bg-purple-500 text-white",
            )}
          >
            {sheet}
          </Badge>
        ))}
      </div>
      <Separator className={"mt-2"} />
    </div>
  );
};
export default SheetSelector;
