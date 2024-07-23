import SheetSelector from "@/components/sheets/sheet-selector";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  sheetsData: typeof import("@/locale/english").data.sheets;
};
const FAQSheetContent = ({ sheetsData }: Props) => {
  return (
    <SheetContent>
      <SheetSelector sheetsData={sheetsData} />
      <SheetHeader className={"mb-2"}>
        <SheetTitle>{sheetsData.faqSheet.title}</SheetTitle>
        <SheetDescription>{sheetsData.faqSheet.subTitle}</SheetDescription>
        <Separator />
      </SheetHeader>
      <SheetDescription>
        <Accordion type="multiple" className="w-full ">
          {sheetsData.faqSheet.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.title}</AccordionTrigger>
              <AccordionContent>{faq.message}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SheetDescription>
    </SheetContent>
  );
};
export default FAQSheetContent;
