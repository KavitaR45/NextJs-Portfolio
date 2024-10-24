import TerminalComponent from "@/components/terminalComponent";
import TechStack from "@/components/techStack"
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
export default function Home() {
  return (
    <>
      <div className="py-24 w-full dark:bg-neutral-950 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex justify-between h-full relative items-center p-10 flex-wrap">
          <div className="flex gap-6 flex-col md:w-2/4 w-full md:px-8 py-4 dark:text-white" >
            <h1 className="text-4xl sm:text-5xl font-bold">Make your websites look 10x modern</h1>
            <p className="text-xl">Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</p>
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 w-max">
              Download CV
            </button>
          </div>
          <div className="flex gap-6 flex-col md:w-2/4 w-full md:px-8 py-4">
            <TerminalComponent />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 h-full relative items-center p-10 flex-wrap">
        <h1 className="text-4xl sm:text-5xl font-bold">Tech Stack</h1>
        <p className="text-xl w-full lg:w-3/5 text-center">Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</p>
        <TechStack />
      </div>
      <div className="flex flex-col justify-center gap-8 h-full relative items-center p-10 flex-wrap">
        <h1 className="text-4xl sm:text-5xl font-bold">My Projects</h1>
        <p className="text-xl w-full lg:w-3/5 text-center">Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</p>
        <div className="w-full">
          <Timeline data={data} />
        </div>
      </div>
    </>
  );
}

const data = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <div className="grid grid-cols-2 gap-4">
          
        </div>
      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I usually run out of copy, but when I see content this big, I try to
          integrate lorem ipsum.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Lorem ipsum is for people who are too lazy to write copy. But we are
          not. Here are some more example of beautiful designs I built.
        </p>
        <div className="grid grid-cols-2 gap-4">
         
        </div>
      </div>
    ),
  },
  {
    title: "Changelog",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Deployed 5 new components on Aceternity today
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Card grid component
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Startup template Aceternity
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Random file upload lol
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Himesh Reshammiya Music CD
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Salman Bhai Fan Club registrations open
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
         
        </div>
      </div>
    ),
  },
];
