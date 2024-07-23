import * as React from "react";
import { cn } from "@/lib/utils";
import { PL as Pl } from "country-flag-icons/react/3x2";

type Props = React.ComponentProps<"div">;

export default function PolishLanguageIcon(props: Props) {
  return (
    <div {...props} className={cn(props.className, "relative")}>
      <span className="mr-4 h-4 w-4 font-mono">PL</span>
      <Pl
        className={"absolute bottom-0 right-2 z-10 h-2 w-2"}
        style={{
          strokeWidth: "3",
        }}
      />
    </div>
  );
}
