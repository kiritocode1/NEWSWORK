import React from 'react'
import localFont from "next/font/local";
const Display = localFont({
  src: "./P.ttf",
  display: "swap",
});

const Myfont = localFont({
    src: '../app/n27.ttf', 
    display:"swap",
})

const Resume = localFont({
        src: './Resume.woff', 
    display:"swap",
})
export default function Description() {
    return (
        <div className='flex justify-center my-40'>
            <p className={'text-[6vw] uppercase text-center max-w-[70vw] leading-none ' + Myfont.className}>The Plan is simple. Give Us Your Resume  <br /> We apply for jobs using <strong className={Display.className}>
                AI .</strong>
                
            </p>
        </div>
    )
}