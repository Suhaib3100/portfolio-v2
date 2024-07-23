"use client";

import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CustomTextarea } from "@/components/ui/Aceternity/CustomTextArea";

// Extend the InputProps type to include placeholders
interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows: number;
  maxLength: number;
  placeholders: string[];
}

const PlaceholdersAndVanishTextArea = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(({ className, placeholders = [], rows, maxLength, ...props }, ref) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let interval: any;
    const startAnimation = () => {
      interval = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      }, 1500);
    };
    startAnimation();
    return () => clearInterval(interval);
  }, [placeholders.length]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<any[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2.8}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#FFF";

    // split after 31 characters
    const lines = value.match(/.{1,31}/g) || [];
    lines.forEach((line, index) => {
      ctx.fillText(line, 16, 40 + index * fontSize * 2.5, 800 - 32);
    });

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: any[] = [];

    for (let t = 0; t < 800; t++) {
      let i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        let e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          });
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length / 4; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();

    const value = inputRef.current?.value || "";
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0,
      );
      animate(maxX);
    }
  };

  useEffect(() => {
    if (props.value === "" && !isMounted) {
      setIsMounted(true);
    }
    if (props.value === "" && isMounted && props.value !== value) {
      vanishAndSubmit();
    }
  }, [props]);

  return (
    <div className={"relative w-full overflow-hidden p-[1px]"}>
      <canvas
        className={cn(
          "absolute pointer-events-none text-base transform top-3 left-3 right-0 bottom-0 origin-top-left filter invert dark:invert-0 w-full h-full whitespace-break-spaces z-40",
          !animating ? "opacity-0" : "opacity-100",
        )}
        ref={canvasRef}
      />
      <div className={"relative"}>
        <CustomTextarea
          rows={rows}
          maxLength={maxLength}
          {...props}
          onChange={(e) => {
            if (!animating) {
              if (e.target.value.length > maxLength) {
                return;
              } else {
                setValue(e.target.value);
                props.onChange && props.onChange(e);
              }
            }
          }}
          ref={inputRef}
          value={value}
          className={cn(
            "w-full z-10 relative text-black dark:text-white",
            animating && "text-transparent dark:text-transparent",
            value.length === maxLength &&
              "focus-visible:ring-red-500 border-red-500",
          )}
          autoCorrect={"off"}
          spellCheck={"false"}
        />
        <div className="absolute right-2 bottom-2 text-gray-500 text-sm z-[99]">
          <span className={cn(value.length === maxLength && "text-red-500")}>
            {value.length}
          </span>
          /{maxLength}
        </div>
      </div>

      <div className="absolute top-3 left-3 w-full flex items-center rounded-full pointer-events-none">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              initial={{
                y: 5,
                opacity: 0,
              }}
              key={`current-placeholder-${currentPlaceholder}`}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -15,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
              className="dark:text-neutral-600 text-sm font-normal text-neutral-500 text-left w-[calc(100%-2rem)] truncate z-50"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

PlaceholdersAndVanishTextArea.displayName = "PlaceholdersAndVanishTextArea";

export { PlaceholdersAndVanishTextArea };
