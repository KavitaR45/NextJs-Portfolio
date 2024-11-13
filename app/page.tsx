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
import { Toaster, toast } from 'sonner'


const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  mobno: z.string().regex(/^\d+$/),
  message: z.string().min(2).max(1000),
})
export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const { reset, ...form } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      mobno: "",
      message: ""
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
  
    // Prepare the data in JSON format
    const formData = JSON.stringify(values);
  
    try {
      const response = await fetch("https://formspree.io/f/mnnajogb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });
  
      if (response.ok) {
        // Optionally, you could add a success message here
        toast.success("Form submitted successfully")
        console.log("Form submitted successfully");
        reset();
      } else {
        toast.error("Form submission error")
        console.error("Form submission error:", response.statusText);
      }
    } catch (error) {
      toast.error("Form submission error")
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  }
  

  return (
    <>
    <Toaster  position="top-center" richColors   />
      <div className="py-6 w-full dark:bg-neutral-950 bg-white   relative flex items-center justify-center">
      {/* <div className="py-24 w-full dark:bg-neutral-950 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center"> */}
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
        <div className="flex justify-between h-full relative items-center p-10 flex-wrap">
          <div className="flex gap-6 flex-col md:w-2/4 w-full md:px-8 py-4 dark:text-white" >
            <h1 className="text-4xl sm:text-5xl font-bold">Hi, I’m Kavita, a Front-End Developer</h1>
            <p className="text-xl">Driven by clean code and user-centered design, I aim to build seamless experiences that make an impact.</p>
            <a target="_blank" href="/image/Kavita_Resume.pdf" className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 w-max">
              Download CV
            </a>
          </div>
          <div className="flex gap-6 flex-col md:w-2/4 w-full md:px-8 py-4">
            <TerminalComponent />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 h-full relative items-center p-10 flex-wrap">
        <h2 className="text-4xl sm:text-5xl font-bold">Tech Stack</h2>
        <p className="text-xl w-full lg:w-3/5 text-center">Tools and technologies that power my projects.</p>
        <TechStack />
      </div>
      <div className="flex flex-col justify-center gap-8 h-full relative items-center p-10 flex-wrap">
        <h2 className="text-4xl sm:text-5xl font-bold">My Projects</h2>
        <p className="text-xl w-full lg:w-3/5 text-center">A showcase of my recent work and creations.</p>
        <div className="w-full">
          <Timeline data={data} />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 h-full relative items-center p-10 flex-wrap">
        <h2 className="text-4xl sm:text-5xl font-bold">Get In Touch</h2>
        <p className="text-xl w-full lg:w-3/5 text-center">Feel free to reach out—I’d love to collaborate!</p>
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
        <p className="text-md md:text-lg mt-3"><span className="font-bold">Tech Stack: </span>NextJs , React , ThreeJs , Parallax , ThemeUI</p>
        <a className="text-md md:text-lg " target="_blank" href="https://www.syncmedia.io/"><span className="font-bold">Link:</span> https://www.syncmedia.io/</a>
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
        WVStor is a stylish e-commerce store for wedding shopping, offering jewelry, clothing, and t-shirts. Built with WordPress and WooCommerce, the site features seamless payment and shipping integrations, along with a WhatsApp notification system to alert customers about order status updates.
        </p>
        <p className="text-md md:text-lg mt-3"><span className="font-bold">Tech Stack: </span>WordPress, Woocommerce, WhatsApp Integration, Payment & Shipping</p>
        <a className="text-md md:text-lg " target="_blank" href="https://www.wvstor.com/"><span className="font-bold">Link:</span> https://www.wvstor.com/</a>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image src="/image/project/wvstor-1.png" height={635} width={1365} alt='wvstor-image' />
          <Image src="/image/project/wvstor-2.png" height={635} width={1365} alt='wvstor-image' />
        </div>
      </div>
    ),
  },
  {
    title: "Film Review",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
        A movie review website using NEXT Js, which is styled using AntDesign and styled components. To retrieve movie data, I have used The Movie Database API. This website has an extensive search feature, and also provides a detailed page where one can read the movie overview.
        </p>
        <p className="text-md md:text-lg mt-3"><span className="font-bold">Tech Stack: </span>React , NextJs , AntDesign , API</p>
        <a className="text-md md:text-lg " target="_blank" href="https://blockbuster-review.netlify.app/"><span className="font-bold">Link:</span> https://blockbuster-review.netlify.app/</a>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image src="/image/project/movie-1.png" height={635} width={1365} alt='movie-image' />
          <Image src="/image/project/movie-2.png" height={635} width={1365} alt='movie-image' />
        </div>
      </div>
    ),
  },
  {
    title: "Glastone",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
        Glastone Mosaic is a professional company website built with Gatsby, featuring dynamic product information pages that are powered by a headless CMS. This allows for easy content updates and flexibility, showcasing the company range of glass and mosaic products in an engaging and responsive layout.
        </p>
        <p className="text-md md:text-lg mt-3"><span className="font-bold">Tech Stack: </span>Gatsby, Headless CMS, React, GraphQL</p>
        <a className="text-md md:text-lg " target="_blank" href="https://glastonemosaic.com/"><span className="font-bold">Link:</span> https://glastonemosaic.com/</a>
        <div className="grid grid-cols-2 gap-4 mt-8">
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
        Technovature is a professional corporate website built with NextJs, featuring a dynamic blog section powered by FireCMS as the headless CMS. The site ensures smooth content management and real-time updates, providing a seamless browsing experience while highlighting the company’s innovative solutions and industry insights.
        </p>
        <p className="text-md md:text-lg mt-3"><span className="font-bold">Tech Stack: </span>NextJs, FireCMS, React, API</p>
        <a className="text-md md:text-lg " target="_blank" href="https://www.technovature.com/"><span className="font-bold">Link:</span> https://www.technovature.com/</a>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image src="/image/project/technovature-1.png" height={635} width={1365} alt='technovature-image' />
          <Image src="/image/project/technovature-2.png" height={635} width={1365} alt='technovature-image' />
        </div>
      </div>
    ),
  },
  {
    title: "Portfolio",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
        A simple and clean personal portfolio built using NextJs, showcasing projects and skills. The site is deployed on Netlify and takes design inspiration from Brittany Chiang, providing a sleek, modern, and responsive layout for an engaging user experience.
        </p>
        <p className="text-md md:text-lg mt-3"><span className="font-bold">Tech Stack: </span>NextJs, React</p>
        <a className="text-md md:text-lg " target="_blank" href="https://webwizardry.netlify.app/"><span className="font-bold">Link:</span> https://webwizardry.netlify.app/</a>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image src="/image/project/portfolio-1.png" height={635} width={1365} alt='portfolio-image' />
          <Image src="/image/project/portfolio-2.png" height={635} width={1365} alt='portfolio-image' />
        </div>
      </div>
    ),
  },
];
