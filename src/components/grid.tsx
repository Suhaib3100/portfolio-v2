"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/Aceternity/BentoGrid";
import React from "react";

type Props = {
  data: typeof import("@/locale/english").data.bentoGrid;
};

const Grid = ({ data }: Props) => {
  return (
    <section id="about">
      <BentoGrid className="w-4/5 lg:w-full mx-auto px-0 sm:px-8 md:px-12 3xl:px-0">
        {data.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            contactButtonName={item?.contactButtonName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
