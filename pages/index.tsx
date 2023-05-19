import Image from "next/image";

import Nav from "@/components/Nav";
import FirstSectionHero from "@/components/FirstSectionHero";
import Chat from "@/components/Chat";
import FirstSectionCarousel from "@/components/FirstSectionCarousel";
import FirstSectionSecondCarousel from "@/components/FirstSectionSecondCarousel";
import SecondSectionAccordion from "@/components/SecondSectionAccordion"

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

      <section className="relative bg-[#000] px-10 mt-12 flex">
        <SecondSectionAccordion />
      </section>
    </>
  )
}
