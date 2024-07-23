"use client";
import { useSheets } from "@/providers/sheet-provider";
import MagicButton from "@/components/ui/Aceternity/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { AiOutlineQuestion } from "react-icons/ai";

type Props = {
  data: typeof import("@/locale/english").data.footer;
};

const FooterButtons = ({ data }: Props) => {
  const { setData } = useSheets();
  return (
    <div
      className={
        "flex flex-col md:flex-row mx-auto w-4/5 md:w-full items-center justify-center gap-2"
      }
    >
      <MagicButton
        title={data.button}
        icon={<FaLocationArrow />}
        position="left"
        handleClick={() => {
          setData({
            isOpen: true,
            currentSheet: "Contact",
          });
        }}
      />
      <MagicButton
        title={data.faq}
        icon={<AiOutlineQuestion />}
        position="right"
        handleClick={() => {
          setData({
            isOpen: true,
            currentSheet: "FAQ",
          });
        }}
      />
    </div>
  );
};
export default FooterButtons;
