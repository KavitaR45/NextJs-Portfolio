"use client";
import TerminalComponent from "@/components/terminalComponent";
import TechStack from "@/components/techStack"
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { useState } from "react";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  mobno: z.string().regex(/^\d+$/),
  message: z.string().min(2).max(1000),
})
export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      mobno: "",
      message: ""
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    const formData = { ...values };
    await fetch("https://formspree.io/f/mnnajogb", {
      method: "POST",
      body: formData,
    });
    setLoading(false);
  }

  return (
    <>
      <div className="py-8 w-full dark:bg-neutral-950 bg-white   relative flex items-center justify-center">
      {/* <div className="py-24 w-full dark:bg-neutral-950 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center"> */}
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
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
        <h2 className="text-4xl sm:text-5xl font-bold">Tech Stack</h2>
        <p className="text-xl w-full lg:w-3/5 text-center">Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</p>
        <TechStack />
      </div>
      <div className="flex flex-col justify-center gap-8 h-full relative items-center p-10 flex-wrap">
        <h2 className="text-4xl sm:text-5xl font-bold">My Projects</h2>
        <p className="text-xl w-full lg:w-3/5 text-center">Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</p>
        <div className="w-full">
          <Timeline data={data} />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 h-full relative items-center p-10 flex-wrap">
        <h2 className="text-4xl sm:text-5xl font-bold">Get In Touch</h2>
        <p className="text-xl w-full lg:w-3/5 text-center">Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</p>
        <div className="w-full flex justify-center">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full md:w-1/2 mt-10 text-center">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobno"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Mobile No." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button disabled={loading} type="submit" className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 w-max">
                Submit
              </button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    title: "Sync Media",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal">
          A website designed for an advertising agency, featuring captivating animations that respond to user interaction. Parallax and reveal effects are incorporated to enhance the visual experience, while Three.js is utilized to create a wave animation in the banner.
        </p>
        <p className="text-md md:text-lg ">Tech Stack : React, Three.js</p>
        <a className="text-md md:text-lg " href="#">Link</a>
        <div className="grid grid-cols-2 gap-4  mt-8">
          <Image src="/image/project/sync-1.png" height={635} width={1365} alt='sync-image' />
          <Image src="/image/project/sync-2.png" height={635} width={1365} alt='sync-image' />
        </div>
      </div>
    ),
  },

  {
    title: "WVStor",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
          A website designed for an advertising agency, featuring captivating animations that respond to user interaction. Parallax and reveal effects are incorporated to enhance the visual experience, while Three.js is utilized to create a wave animation in the banner.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image src="/image/project/wvstor-1.png" height={635} width={1365} alt='wvstor-image' />
          <Image src="/image/project/wvstor-2.png" height={635} width={1365} alt='wvstor-image' />
        </div>
      </div>
    ),
  },
  {
    title: "Glastone",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
          A website designed for an advertising agency, featuring captivating animations that respond to user interaction. Parallax and reveal effects are incorporated to enhance the visual experience, while Three.js is utilized to create a wave animation in the banner.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image src="/image/project/glastone-1.png" height={635} width={1365} alt='glastone-image' />
          <Image src="/image/project/glastone-2.png" height={635} width={1365} alt='glastone-image' />
        </div>
      </div>
    ),
  },
  {
    title: "Technovature",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
          A website designed for an advertising agency, featuring captivating animations that respond to user interaction. Parallax and reveal effects are incorporated to enhance the visual experience, while Three.js is utilized to create a wave animation in the banner.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image src="/image/project/technovature-1.png" height={635} width={1365} alt='technovature-image' />
          <Image src="/image/project/technovature-2.png" height={635} width={1365} alt='technovature-image' />
        </div>
      </div>
    ),
  },
];
