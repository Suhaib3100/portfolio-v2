"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/ui/Aceternity/MagicButton";
import React from "react";
import { useSheets } from "@/providers/sheet-provider";

type Props = {
  data: typeof import("@/locale/english").data.hero;
};
const Hero = ({ data }: Props) => {
  const { setData } = useSheets();

  return (
    <div className={"pb-20 pt-36 z-40"}>
      <div
        className="h-screen w-full dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] -z-20
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            {data.subTitle}
          </p>

          <div
            className={
              "text-center text-[40px] md:text-5xl lg:text-6xl font-bold"
            }
          >
            <div className="my-4">
              <div className=" dark:text-white text-black leading-snug tracking-wide">
                {data.mainTitle}
              </div>
            </div>
          </div>

          <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-xl mb-10 lg:mb-0">
            {data.description}
          </p>

          <MagicButton
            title={data.button}
            icon={<FaLocationArrow />}
            position="right"
            handleClick={() => {
              setData({
                isOpen: true,
                currentSheet: "Contact",
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
