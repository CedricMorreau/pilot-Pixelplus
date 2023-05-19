import Link from "next/link"
import Image from "next/image"
import { motion } from 'framer-motion'

import { BsArrowRightShort } from "react-icons/bs"

export default function Nav() {
    return (
        <nav className="flex justify-between items-center px-4 py-4 md:px-10 md:py-10">
            <Image src="/pixelplus_Logo.png" alt="Logo placeholder" width={150} height={100} />
            <Link className="w-[35%] max-w-[130px] flex justify-between items-center" href="https://www.pixelplus.nl/">
                <motion.span
                    initial={{ width: 0 }}
                    transition={{ type: 'spring', delay: 0.6, duration: 2 }}
                    whileInView={{ width: '100%' }}
                    className="border-b-2 border-[#C6C6C6] pb-2 pr-3 md:pr-0">pixelplus.nl</motion.span>
                <BsArrowRightShort className="flex justify-end right-0" size={35} />
            </Link>
        </nav>
    )
}