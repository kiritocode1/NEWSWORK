"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Image from "next/image";
import Logo from "./icon.svg";
import Lenis from 'lenis'; 
import buildspace from "./Logobuildspace.svg"
import Description from "@/components/Description";
import Section from "@/components/Section";
const Scene = dynamic(() => import("@/components/animation/Scene"), {
  ssr: false,
});


import { FlipWords } from "@/components/ui/Definition";
import localFont from "next/font/local";
const myFont = localFont({
  src: "./n27.ttf",
  display: "swap",
});

export default function Home() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container.current,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis()
//@ts-ignore
lenis.on('scroll', (e) => {
  console.log(e)
})
//@ts-ignore
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
    return () => {
      
    };
  }, []);


  const words = ["AI-POWWWWWERED", "EFFICIENT", "ANTI-Violent  "];

  return (
    <main className="bg-black" >
      <div ref={container.current} className="h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <Scene scrollProgress={scrollYProgress} className={"z-0"} />
          <div
            className="absolute z-10 flex min-h-screen w-full justify-center items-center text-4xl text-white md:text-9xl"
            style={myFont.style}
          >
            <h1 className="w-full text-center font-extrabold tracking-widest">Sh*T , I MADE it . <br/> NOW WHAT </h1>
            
          </div>
        </div>
      </div>
      <div className="h-screen text-white  flex flex-col gap-2" style={myFont.style}>
        <div className="w-full h-10 flex justify-center my-20">
          <Image src={Logo} alt="Logo" className="w-40 h-40 " />
        </div>
        <div className="w-full p-4 text-center text-5xl  font-extrabold   md:text-[12rem]">
          NewsW0RK.
        </div>
        <div className="p-8 text-center text-4xl ">
          An
          <br />
          <FlipWords words={words} />
          <br />
          Way to apply for jobs.
          <br />
          
        </div>

      </div>
      <div className="">
        
        <Description />
        <Section />
        <div className='h-screen flex items-center justify-center md:text-7xl p-20 flex-col text-4xl ' style={myFont.style}>
          <div>Excited???</div>  <div className=" flex w-full justify-center gap-2 flex-col md:flex-row items-center "><p className="text-center">Tweet @ the nearest</p>  <Image src={buildspace} alt="buildspace" /> member.</div>
          <div className="text-4xl text-center"> Lets speedrun the building process </div>
        </div>
      </div>
    </main>
  );
}
