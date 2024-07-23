import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import MagicButton from "@/components/ui/Aceternity/MagicButton";
import TechStackMovingLists from "@/components/ui/Aceternity/TechStackMovingLists";
import { Meteors } from "@/components/ui/Aceternity/Meteors";
import { useSheets } from "@/providers/sheet-provider";
import VortexBentoEffect from "@/components/ui/Aceternity/VortexBentoEffect";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  contactButtonName,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  contactButtonName?: string;
}) => {
  const { setData } = useSheets();

  const handleCopy = () => {
    setData({
      isOpen: true,
      currentSheet: "Contact",
    });
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-50`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 1 && <GridGlobe />}
          {/* for transforming ideas */}
          {id === 2 && <VortexBentoEffect />}
          {/* Tech stack list div */}
          {id === 3 && <TechStackMovingLists />}
          {id === 4 && <Meteors number={20} />}
          {/* Copy email button */}
          {id === 6 && (
            <div className="mt-5 relative mx-auto w-4/5">
              <MagicButton
                title={contactButtonName}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
                size={"small"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
