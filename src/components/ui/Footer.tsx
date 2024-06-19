import { FC } from 'react'

interface FooterProps {
  
}
import localFont from 'next/font/local';
import Link from 'next/link';


const Myfont = localFont({
    src: './n27.ttf',
    display:"swap"

})

const Footer: FC<FooterProps> = ({}) => {
    return <div className='w-full  h-[70vh] '>
    <div className='flex flex-col items-center'>
            <h1 className={"md:text-[14rem] text-[4rem] text-center w-[90vw] font-extrabold tracking-tighter text-[#555555] border-b border-[#555555]    " + Myfont.className}> 
                NewsW0RK.
            </h1>
            <div className="w-[90vw] flex items-center  justify-around flex-wrap pt-2 text-[#555555] font-bold">
                <div className={"text-start w-full " + Myfont.className}>Made & Maintained By
                    <Link href={"https://kathawalearyan.in.net/"} className='text-[#6f6e6e] p-1 '>{"Aryan Kathawale"}</Link>
                    in collaboration with 
                    <Link href={"https://buildspace.so/"} className='text-[#6f6e6e] p-1 '>{"buildspace."}</Link>

                </div>
        <div className={"text-start  w-full flex flex-col"}> 
                    Built in India 
            </div>
            </div>
    </div>
  </div>
}

export default Footer