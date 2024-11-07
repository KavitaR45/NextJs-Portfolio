"use client"
import { useTheme } from "next-themes"
import Image from "next/image";
import { MagicCard } from "@/components/ui/magic-card";

export default function TechStack() {
  const { theme } = useTheme();
  return (
    <div
      className={
        "flex h-full w-full flex-col gap-6 lg: md:flex-row flex-wrap justify-center"
      }
    >
      <MagicCard
        className="cursor-pointer h-[80px] lg:w-1/5 md:w-2/5 w-full flex-col items-center justify-center whitespace-nowrap text-4xl"
        gradientColor={theme == "dark" ? "#262626" : "#ECDFCC"}
      >
        <Image alt='nextjs-tech' src={`/image/tech/${theme == "dark" ? "nextjs-light":"nextjs"}.png`} width='80' height='80' />
      </MagicCard>
      <MagicCard
        className="cursor-pointer h-[80px] lg:w-1/5 md:w-2/5 w-full flex-col items-center justify-center whitespace-nowrap text-4xl"
        gradientColor={theme == "dark" ? "#262626" : "#ECDFCC"}
      >
        <Image alt='javascript-tech' src="/image/tech/javascript.png" width='48' height='48' />
      </MagicCard>
      <MagicCard
        className="cursor-pointer h-[80px] lg:w-1/5 md:w-2/5 w-full flex-col items-center justify-center whitespace-nowrap text-4xl"
        gradientColor={theme == "dark" ? "#262626" : "#ECDFCC"}
      >
        <Image alt='react-tech' src="/image/tech/react.png" width='48' height='48' />
      </MagicCard>
      <MagicCard
        className="cursor-pointer h-[80px] lg:w-1/5 md:w-2/5 w-full flex-col items-center justify-center whitespace-nowrap text-4xl"
        gradientColor={theme == "dark" ? "#262626" : "#ECDFCC"}
      >
        <Image alt='erp-tech' src="/image/tech/erpnext.png" width='100' height='100' />
      </MagicCard>
      <MagicCard
        className="cursor-pointer h-[80px] lg:w-1/5 md:w-2/5 w-full flex-col items-center justify-center whitespace-nowrap text-4xl"
        gradientColor={theme == "dark" ? "#262626" : "#ECDFCC"}
      >
        <Image alt='wordpress-tech' src="/image/tech/wordpress.png" width='48' height='48' />
      </MagicCard>
      <MagicCard
        className="cursor-pointer h-[80px] lg:w-1/5 md:w-2/5 w-full flex-col items-center justify-center whitespace-nowrap text-4xl"
        gradientColor={theme == "dark" ? "#262626" : "#ECDFCC"}
      >
        <Image alt='html-tech' src="/image/tech/html.png" width='48' height='48' />
      </MagicCard>
      <MagicCard
        className="cursor-pointer h-[80px] lg:w-1/5 md:w-2/5 w-full flex-col items-center justify-center whitespace-nowrap text-4xl"
        gradientColor={theme == "dark" ? "#262626" : "#ECDFCC"}
      >
        <Image alt='woocommerce-tech' src="/image/tech/woocommerce.png" width='48' height='48' />
      </MagicCard>
      <MagicCard
        className="cursor-pointer h-[80px] lg:w-1/5 md:w-2/5 w-full flex-col items-center justify-center whitespace-nowrap text-4xl"
        gradientColor={theme == "dark" ? "#262626" : "#ECDFCC"}
      >
        <Image alt='strapi-tech' src={`/image/tech/${theme == "dark" ? "strapi-light":"strapi"}.png`} width='80' height='80' />
      </MagicCard>
    </div>
  );
}
