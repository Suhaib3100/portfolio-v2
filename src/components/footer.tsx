"use client";
import { socialMedia } from "@/data";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterButtons from "@/components/footer-buttons";

type Props = {
  data: typeof import("@/locale/english").data.footer;
};

const Footer = ({ data }: Props) => {
  return (
    <footer
      className="w-4/5 lg:w-full py-20 pb-10 mx-auto lg:px-6"
      id="contact"
    >
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl md:text-3xl xl:text-5xl text-center lg:max-w-[45vw]">
          {data.title_part1}{" "}
          <span className="text-[#CBACF9]">{data.title_part2}</span>{" "}
          {data.title_part3}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-xs md:text-lg">
          {data.description}
        </p>
        <FooterButtons data={data} />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-4">
        <p className="md:text-base text-sm md:font-normal font-light underline underline-offset-1">
          {data.autograph}
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-1">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              target={"_blank"}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
