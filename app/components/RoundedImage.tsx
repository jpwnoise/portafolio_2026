import { div } from 'framer-motion/client'
import Image from 'next/image'

export default function RoundedImage (){

    return (<div className='flex flex-col items-center hover:scale-105 transition'>
        <div className='border  border-gray-100/50 rounded-full shadow-2xl backdrop-blur-xs bg-black/10'>
            <Image src='/pablo_no_bg_square.png' alt='foto' width={200} height={200} className='rounded-full'/>
        </div>
    </div>)
}