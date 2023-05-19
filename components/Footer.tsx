import Image from 'next/image';
import dayjs from 'dayjs';
import isBetween from "dayjs/plugin/isBetween"

import { motion } from 'framer-motion'

const callCircle = {
    inTime: {
        backgroundColor: '#00FFB9',
    },
    offTime: {
        backgroundColor: '#FF2E2E',
    },
}

export default function Footer() {
    dayjs.extend(isBetween)
    var time = dayjs().format("HHmm")
    var between = dayjs(time).isBetween('0829', dayjs('1731'), 'hour')

    return (
        <>
            <div className="grid justify-items-center w-full max-w-2xl m-auto">
                <h4 className="text-3xl pb-5 font-bold md:text-6xl md:pb-10">
                    Vrijblijvend gesprek?
                </h4>

                <h5 className="text-center pb-5 md:w-4/6 md:pb-16">
                    Voorbeelden van integraties Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </h5>

                <div className="md:flex mt-10 md:mt-0">
                    <div className="text-sm md:flex text-center md:text-left pb-10 md:pb-0">
                        <motion.div
                            animate={between === true ? 'inTime' : 'offTime'}
                            variants={callCircle}
                            className="w-5 h-5 md:w-4 md:h-4 rounded-full border-2 border-[#fff] inline-block md:mt-1 md:mr-3"></motion.div>
                        <div>
                            <span className="block py-2 md:py-0">
                                Telefoon
                            </span>
                            <a href="tel:+310-45-20-518-56">
                                +31 (0)45 20 518 56
                            </a>
                        </div>
                    </div>
                    <div className="text-sm  md:flex text-center md:text-left pb-10 md:pb-0 md:px-12">
                        <div className="w-5 h-5 md:w-4 md:h-4 rounded-full border-2 border-[#fff] inline-block bg-[#00FFB9] md:mt-1 md:mr-3"></div>
                        <div>
                            <span className="block py-2 md:py-0">
                                E-mail
                            </span>
                            <a href="mailto:info@pixelplus.nl">
                                info@pixelplus.nl
                            </a>
                        </div>
                    </div>
                    <div className="text-sm md:flex text-center md:text-left">
                        <div className="w-5 h-5 md:w-4 md:h-4 rounded-full border-2 border-[#fff] inline-block bg-[#00FFB9] md:mt-1 md:mr-3"></div>
                        <div>
                            <span className="block py-2 md:py-0">
                                WhatsApp
                            </span>
                            <span>
                                stuur een bericht
                            </span>
                        </div>
                    </div>
                </div>
                <Image className="pt-16 md:pt-28" src="/Pixelplus_Icon.png" alt="placeholder icon" width={35} height={35} />
            </div>
        </>
    )
}