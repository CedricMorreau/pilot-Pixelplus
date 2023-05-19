import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import Image from 'next/image';

export default function ThirdSectionSlider() {
    return (
        <div className="max-w-xl m-auto">
            <Swiper
                slidesPerView={1}
                pagination={true}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <div>
                        <div className="w-full flex items-start mb-4">
                            <div className="flex">
                                <svg className="w-6 mr-4 md:mr-4" viewBox="0 0 28 28"><path d="M17.706,26.028l9.956-9.956-.933-.894-9.022,9.061-4.55-4.55-.894.894ZM20,34a13.97,13.97,0,0,1-5.464-1.069,13.765,13.765,0,0,1-4.453-2.975A14.28,14.28,0,0,1,7.069,14.536a13.765,13.765,0,0,1,2.975-4.453A14.016,14.016,0,0,1,20,6a13.753,13.753,0,0,1,5.464,1.089,13.961,13.961,0,0,1,7.447,7.447,14.253,14.253,0,0,1,0,10.928,13.961,13.961,0,0,1-7.447,7.447A13.753,13.753,0,0,1,20,34Zm0-14Zm0,12.794A12.682,12.682,0,0,0,32.794,20,12.682,12.682,0,0,0,20,7.206,12.682,12.682,0,0,0,7.206,20,12.682,12.682,0,0,0,20,32.794Z" transform="translate(-6 -6)" fill="#9d72ff" /></svg>
                            </div>
                            <span className="flex text-sm md:text-base">Efficiëntere inzet van containers</span>
                        </div>
                        <div>
                            <span className="text-lg font-medium md:text-3xl md:font-normal">De container-webshop van L’Ortye hebben we gekoppeld we aan hun planningsysteem: de Clear-applicatie van GMT.</span>
                        </div>
                        <div className="mt-5">
                            <Image src="/Lortye_logo.png" alt="placeholer l'ortye" width={50} height={50} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="w-full flex items-start mb-4">
                            <div className="flex">
                                <svg className="w-6 mr-4 md:mr-4" viewBox="0 0 28 28"><path d="M17.706,26.028l9.956-9.956-.933-.894-9.022,9.061-4.55-4.55-.894.894ZM20,34a13.97,13.97,0,0,1-5.464-1.069,13.765,13.765,0,0,1-4.453-2.975A14.28,14.28,0,0,1,7.069,14.536a13.765,13.765,0,0,1,2.975-4.453A14.016,14.016,0,0,1,20,6a13.753,13.753,0,0,1,5.464,1.089,13.961,13.961,0,0,1,7.447,7.447,14.253,14.253,0,0,1,0,10.928,13.961,13.961,0,0,1-7.447,7.447A13.753,13.753,0,0,1,20,34Zm0-14Zm0,12.794A12.682,12.682,0,0,0,32.794,20,12.682,12.682,0,0,0,20,7.206,12.682,12.682,0,0,0,7.206,20,12.682,12.682,0,0,0,20,32.794Z" transform="translate(-6 -6)" fill="#9d72ff" /></svg>
                            </div>
                            <span className="flex text-sm md:text-base">Efficiëntere inzet van containers</span>
                        </div>
                        <div>
                            <span className="text-lg font-medium md:text-3xl md:font-normal">De container-webshop van L’Ortye hebben we gekoppeld we aan hun planningsysteem: de Clear-applicatie van GMT.</span>
                        </div>
                        <div className="mt-5">
                            <Image src="/Lortye_logo.png" alt="placeholer l'ortye" width={50} height={50} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="w-full flex items-start mb-4">
                            <div className="flex">
                                <svg className="w-6 mr-4 md:mr-4" viewBox="0 0 28 28"><path d="M17.706,26.028l9.956-9.956-.933-.894-9.022,9.061-4.55-4.55-.894.894ZM20,34a13.97,13.97,0,0,1-5.464-1.069,13.765,13.765,0,0,1-4.453-2.975A14.28,14.28,0,0,1,7.069,14.536a13.765,13.765,0,0,1,2.975-4.453A14.016,14.016,0,0,1,20,6a13.753,13.753,0,0,1,5.464,1.089,13.961,13.961,0,0,1,7.447,7.447,14.253,14.253,0,0,1,0,10.928,13.961,13.961,0,0,1-7.447,7.447A13.753,13.753,0,0,1,20,34Zm0-14Zm0,12.794A12.682,12.682,0,0,0,32.794,20,12.682,12.682,0,0,0,20,7.206,12.682,12.682,0,0,0,7.206,20,12.682,12.682,0,0,0,20,32.794Z" transform="translate(-6 -6)" fill="#9d72ff" /></svg>
                            </div>
                            <span className="flex text-sm md:text-base">Efficiëntere inzet van containers</span>
                        </div>
                        <div>
                            <span className="text-lg font-medium md:text-3xl md:font-normal">De container-webshop van L’Ortye hebben we gekoppeld we aan hun planningsysteem: de Clear-applicatie van GMT.</span>
                        </div>
                        <div className="mt-5">
                            <Image src="/Lortye_logo.png" alt="placeholer l'ortye" width={50} height={50} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="w-full flex items-start mb-4">
                            <div className="flex">
                                <svg className="w-6 mr-4 md:mr-4" viewBox="0 0 28 28"><path d="M17.706,26.028l9.956-9.956-.933-.894-9.022,9.061-4.55-4.55-.894.894ZM20,34a13.97,13.97,0,0,1-5.464-1.069,13.765,13.765,0,0,1-4.453-2.975A14.28,14.28,0,0,1,7.069,14.536a13.765,13.765,0,0,1,2.975-4.453A14.016,14.016,0,0,1,20,6a13.753,13.753,0,0,1,5.464,1.089,13.961,13.961,0,0,1,7.447,7.447,14.253,14.253,0,0,1,0,10.928,13.961,13.961,0,0,1-7.447,7.447A13.753,13.753,0,0,1,20,34Zm0-14Zm0,12.794A12.682,12.682,0,0,0,32.794,20,12.682,12.682,0,0,0,20,7.206,12.682,12.682,0,0,0,7.206,20,12.682,12.682,0,0,0,20,32.794Z" transform="translate(-6 -6)" fill="#9d72ff" /></svg>
                            </div>
                            <span className="flex text-sm md:text-base">Efficiëntere inzet van containers</span>
                        </div>
                        <div>
                            <span className="text-lg font-medium md:text-3xl md:font-normal">De container-webshop van L’Ortye hebben we gekoppeld we aan hun planningsysteem: de Clear-applicatie van GMT.</span>
                        </div>
                        <div className="mt-5">
                            <Image src="/Lortye_logo.png" alt="placeholer l'ortye" width={50} height={50} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

