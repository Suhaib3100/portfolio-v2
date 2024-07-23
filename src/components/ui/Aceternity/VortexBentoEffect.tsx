import dynamic from "next/dynamic";
import React from "react";

const Vortex = dynamic(() => import("./Vortex").then((m) => m.Vortex), {
  ssr: false,
});

const VortexBentoEffect = () => {
  return (
    <Vortex
      className="flex items-center justify-center absolute left-0 top-0 w-full h-full"
      asChild
    />
  );
};
export default VortexBentoEffect;
