import { useSheets } from "@/providers/sheet-provider";
import { Sheet } from "@/components/ui/sheet";
import EmailSheetContent from "@/components/sheets/email-sheet-content";
import FAQSheetContent from "@/components/sheets/faq-sheet-content";

type Props = {
  sheetsData: typeof import("@/locale/english").data.sheets;
};
const SheetMounted = ({ sheetsData }: Props) => {
  const { data, setData } = useSheets();
  return (
    <Sheet
      open={data.isOpen}
      onOpenChange={() => {
        setData({ isOpen: false, currentSheet: "Contact" });
      }}
    >
      {data.currentSheet === "Contact" && (
        <EmailSheetContent sheetsData={sheetsData} />
      )}
      {data.currentSheet === "FAQ" && (
        <FAQSheetContent sheetsData={sheetsData} />
      )}
    </Sheet>
  );
};
export default SheetMounted;
