import Image from "next/image";

import Nav from "@/components/Nav";
import FirstSectionHero from "@/components/FirstSectionHero";
import Chat from "@/components/Chat";
import FirstSectionCarousel from "@/components/FirstSectionCarousel";
import FirstSectionSecondCarousel from "@/components/FirstSectionSecondCarousel";
import SecondSectionAccordion from "@/components/SecondSectionAccordion"
import ThirdSectionSlider from "@/components/ThirdSectionSlider";
import FifthSection from "@/components/FifthSection";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section className="relative">
        <Nav />
        <FirstSectionHero />
        <Chat />
        <div className="relative pt-16">
          <FirstSectionCarousel />
        </div>
        <div className="relative">
          <FirstSectionSecondCarousel />
        </div>
      </section>

      <section className="relative bg-[#000] px-10 mt-12">
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          transition={{ type: 'spring', delay: 0.6, duration: 2 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <SecondSectionAccordion />
        </motion.div>
      </section>

      <section className="relative bg-[#EBEBEB] px-10 py-24 md:py-36">
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          transition={{ type: 'spring', delay: 0.6, duration: 2 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <ThirdSectionSlider />
        </motion.div>
      </section>

      <section>
        <Image src="/Pixelplus_Pic.png" alt="Pixelplus pic" width={3000} height={3000} />
      </section>

      <section className="px-10 py-24 md:py-36">
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          transition={{ type: 'spring', delay: 0.6, duration: 2 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <FifthSection />
        </motion.div>
      </section>

      <footer className="bg-[#000] text-[#fff] relative px-10 pt-24 pb-14 md:pt-32 md:pb-12 z-50">
        <Footer />
      </footer>
    </>
  )
}
