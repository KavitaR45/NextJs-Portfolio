import TerminalComponent from "@/components/terminalComponent";
import TechStack from "@/components/techStack"
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
      <div>
        {/* <TechStack /> */}
      </div>
    </>
  );
}
