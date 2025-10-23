import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Agenda from "@/components/Agenda";
// import Prizes from "@/components/Prizes";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { useState } from "react";
import FAQ from "./FAQ";
import Accommodation from "./Accommodation";
import Gear from "./Gear";
import Transportation from "./Transportation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Welcome />
      <Location />
      <Agenda />
      <Gear />
      <Accommodation />
      <Transportation />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
