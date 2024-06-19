import RandomNoiseBlend from '@/components/animation/ExperimentalVercel'
import { FC } from 'react'
import localFont from 'next/font/local'; 
import Link from 'next/link';


const Fonty = localFont({
    src: "./n27.ttf",
    display:"swap"
})


interface pageProps {
  
}

const NotFound: FC<pageProps> = ({}) => {
    return <div className='h-screen flex items-center justify-center relative' style={Fonty.style}>
        
        <div className='z-max absolute h-screen w-full'>
            <RandomNoiseBlend className='' />
        </div>
        
        <div className='z-min absolute text-4xl  text-black text-pretty flex flex-col justify-center text-center '>4O4
            
            <Link href="/" className='hover:underline' >{" RETURN >"}</Link>
        </div>
    
    </div>
}

export default NotFound