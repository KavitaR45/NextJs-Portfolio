"use client"
import { useTheme } from "next-themes"
import Image from "next/image";
import { MagicCard } from "@/components/ui/magic-card";

export default function TechStack() {
  const { theme } = useTheme();
  return (
    <div
      className={
        "flex h-[100px] w-full flex-col gap-6 lg:h-[100px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <Image alt='erp-tech' src="/image/tech/erpnext.png" width='100' height='100'/>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
         <Image alt='wordpress-tech' src="/image/tech/wordpress.png" width='48' height='48'/>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
          <Image alt='html-tech' src="/image/tech/html.png" width='48' height='48'/>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
          <Image alt='javascript-tech' src="/image/tech/javascript.png" width='48' height='48'/>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
          <Image alt='react-tech' src="/image/tech/react.png" width='48' height='48'/>
      </MagicCard>
    </div>
  );
}
