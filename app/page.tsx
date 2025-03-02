"use client";

import React from "react";
import { HoverEffect, HoverEffect2 } from "@/components/ui/card-hover";
import ComputersCanvas from "@/components/canvas/Computers";
import AboutSection from "@/components/about/article";
import Hero from "@/components/Hero/Hero";
import Timeline from "@/components/Timeline/timeline";
import Footer from "./footer";
import { projects, respond } from "@/utils/data";

export default function Home() {
  return (
    <div className=" w-full  scroll-smooth overflow-hidden  ">
      {/* HERO SECTION */}
      <section id="Home">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 w-[40%] pl-60  items-center flex justify-center absolute left-[70vh] -z-10"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        <Hero />
      </section>

      {/* ABOUT SECTION */}
      <section id="About" className="bg-black h-[100vh] -z-10">
        <div>
          <div className="absolute left-0 w-[30vw] flex justify-center ">
            <AboutSection />
          </div>
          <div className="w-[30vw]">
            <ComputersCanvas />
          </div>
        </div>
        {/* <AboutPage /> */}
      </section>

      <section className="bg-black">
        <h1 className="text-white text-5xl font-bold font text-center ">
          History Of AI
        </h1>
        <Timeline />
      </section>

      {/* Card Section */}
      <section id="Card" className="bg-black -z-10">
        <div className="max-w-5xl mx-auto px-8 pt-10">
          <h1 className="text-white text-5xl font-bold" data-aos="fade-up">
            addressing AI
          </h1>

          <HoverEffect2 items={respond} className="z-10" />
        </div>
      </section>

      <section id="Card" className="bg-black -z-10">
        <div className="max-w-5xl mx-auto px-8 pt-10">
          <h1 className="text-white text-5xl font-bold" data-aos="fade-up">
            Why Use AI?
          </h1>

          <HoverEffect items={projects} className="z-10" />
        </div>

        <section className="mt-28 ">
          <Footer />
        </section>
      </section>
    </div>
  );
}