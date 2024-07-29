"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import('@/components/Anim/Scene'), {
  ssr: false
})

export default function Home() {
  return (
    <div className="h-[300vh] w-full  scroll-smooth  ">

      {/* HERO SECTION */}
      <section id="Home" className="h-[100vh]" >
        <video 
        autoPlay 
        muted 
        loop 
        className="rotate-180 absolute top-[-30px] -z-10"><source src="/blackhole.webm" type="video/webm" /></video>
        <div  className="text-white py-52 px-24 text-[4vh] text-center font-semibold z-10 ">AI Implementation in <br/> Software <br/> Development</div>
      </section>


      {/* ABOUT SECTION */}
      <section id="About" className="h-[100vh]">

        <Scene />
      </section>

      {/* Card Section */}
      <section id="Card" className="">
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </section>
    </div>
  );
}

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
