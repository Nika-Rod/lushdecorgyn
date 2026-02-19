"use client";

// import { AccordionProducts } from "./components/AccordionProducts/Accordion";
// import { Footer } from "./components/Footer/Footer";
// import { SocialMediaForm } from "./components/SocialMedia/SocialMediaForm";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { useScrollObserver } from "./hooks/useScrollObserver.hook";
import { RollingStripe } from "./components/Stripe/RollingStripe";
import { CloudProducts } from "./components/CloudProducts/CloudProducts";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import ScrollCards from "./components/ScrollCards/ScrollCards";
import { CustomerOpinion } from "./components/CustomerOpinion/CustomerOpinion";
import { Footer } from "./components/Footer/Footer";
import { SocialMedia } from "./components/SocialMedia/SocialMedia";

export default function Home() {
  const { navbarRef } = useScrollObserver();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Navbar ref={navbarRef} />
      <Hero />
      <CloudProducts />
      <RollingStripe />
      <AboutUs />
      <ScrollCards />
      <CustomerOpinion />
      <SocialMedia />
      <Footer />
    </>
  );
}
