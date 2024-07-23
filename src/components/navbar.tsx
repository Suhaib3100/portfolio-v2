"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { useSheets } from "@/providers/sheet-provider";
import SheetMounted from "@/components/sheets/sheet-main";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  data: typeof import("@/locale/english").data.navbar;
  sheetsData: typeof import("@/locale/english").data.sheets;
};

const Navbar = ({ data, sheetsData }: Props) => {
  const { setData } = useSheets();

  return (
    <>
      <SheetMounted sheetsData={sheetsData} />
      <nav
        className="sticky top-0 p-0 max-w-full z-[60] xl:items-center
      dark:shadow-lg dark:shadow-[#2a0e61] bg-[#03001417] backdrop-blur-md h-10"
      >
        <div className="max-w-7xl flex items-center justify-between mx-auto max-h-10">
          {/*Left*/}
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Link href={data.profile.link} target={"_blank"}>
                <Avatar className={"cursor-pointer"}>
                  <AvatarImage src={data.profile.image} alt={"avatar"} />
                  <AvatarFallback>
                    <Skeleton className="w-6 h-6 rounded-full" />
                  </AvatarFallback>
                </Avatar>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={data.profile.image} alt={"avatar"} />
                  <AvatarFallback>{data.profile.slug}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">
                    {data.profile.title}
                  </h4>
                  <p className="text-sm">{data.profile.description}</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      {data.profile.dateText}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          {/*Right*/}
          <div className="flex items-center justify-between text-white max-h-10">
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <Link href={data.github.link} target={"_blank"}>
                  <Button variant="link">{data.github.title}</Button>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={data.github.image}
                      alt={data.github.image}
                    />
                    <AvatarFallback>{data.github.slug}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">
                      {data.github.title}
                    </h4>
                    <p className="text-sm">{data.github.description}</p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        {data.github.dateText}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <Link href={data.linkedin.link} target={"_blank"}>
                  <Button variant="link">{data.linkedin.title}</Button>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={data.linkedin.image}
                      alt={data.linkedin.image}
                    />
                    <AvatarFallback>{data.linkedin.slug}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">
                      {data.linkedin.title}
                    </h4>
                    <p className="text-sm">{data.linkedin.description}</p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        {data.linkedin.dateText}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <Button
              variant={"link"}
              onClick={() => {
                setData({
                  isOpen: true,
                  currentSheet: "Contact",
                });
              }}
            >
              {data.contact.title}
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
