'use client';

import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import InfoRow from "@/components/InfoRow";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import useFadeIn from "@/hooks/useFadeIn";

export default function Home() {
  useFadeIn();

  return (
    <>
      <Hero />
      <Marquee />
      <InfoRow />
      <Stats />
      <Features />
      <Menu />
      <Gallery />
      <About />
      <Contact />
    </>
  );
}
