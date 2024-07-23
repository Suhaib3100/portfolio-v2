"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

const StarBackground = dynamic(
  () => import("./stars-background").then((m) => m.StarBackground),
  {
    ssr: false,
  },
);

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
