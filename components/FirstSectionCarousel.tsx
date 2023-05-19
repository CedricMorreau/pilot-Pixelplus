import React from 'react'
import Image from "next/image"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import "swiper/css";

export default function FirstSectionCarousel() {

    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={3}
                breakpoints={{
                    768: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 10,
                    }
                }}
                speed={2000}
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: -1,
                    disableOnInteraction: false,
                    reverseDirection: true
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Exact_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Whatsapp_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Mollie_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Mailchimp_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Realworks_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Mollie_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Whatsapp_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Mollie_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Exact_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Mailchimp_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Realworks_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Mollie_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Exact_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Whatsapp_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Mailchimp_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Realworks_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Exact_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Whatsapp_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Realworks_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                    <Image className="aspect-square object-contain" src="/Mailchimp_logo.png" alt={""} width={200} height={200} />
                </SwiperSlide>
                
            </Swiper>
        </>
    )
}
