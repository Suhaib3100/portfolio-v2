import React from "react";
import { cn } from "@/lib/utils";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  size,
}: {
  title: string | undefined;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  size?: string;
}) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-8 md:h-12 w-full md:w-60 md:mt-7 overflow-hidden rounded-lg p-[1px] focus:outline-none mb-1",
        size === "small" ? "w-40 sm:w-20 md:w-60 mx-auto" : "",
      )}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] z-40" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg z-50
             bg-slate-950 px-1 md:px-7 text-xs md:text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
