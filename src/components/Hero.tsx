import heroImage from "@/assets/hero-bg.gif";
import ministryLogo from "@/assets/ministry-of-youth-logo.png";
import azerbaijanLogo from "@/assets/azerbaijan-logo.png";
import shahdagLogo from "@/assets/shahdag-logo.png";
import ismfLogo from "@/assets/ismf-logo.png";
import azSportsLogo from "@/assets/az-sports-logo.png";
import pgiLogo from "@/assets/pgi-logo.png";
import { ChevronDown } from "lucide-react";

const sponsors = [
  {
    name: "ISMF",
    logo: ismfLogo,
  },
  {
    name: "Shahdag",
    logo: shahdagLogo,
  },
  {
    name: "PGI",
    logo: pgiLogo,
  },
  {
    name: "Azerbaijan Winter Sports",
    logo: azSportsLogo,
  },
  {
    name: "Ministry",
    logo: ministryLogo,
  },
  {
    name: "Azerbaijan Olympic",
    logo: azerbaijanLogo,
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-0"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white dark:from-[hsl(0,0%,12%)]/95 dark:via-[hsl(0,0%,12%)]/90 dark:to-[hsl(0,0%,12%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-20 md:py-30 text-center flex flex-col justify-start min-h-screen">
        {/* Sponsor Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="p-1 md:p-2">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-10 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="mt-32 md:mt-32 text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-6">
          ISMF European Championship <br /> World Cup Shahdag
        </h1>

        {/* Dates */}
        <p className="mt-24 md:mt-12 text-xl md:text-2xl font-medium text-foreground mb-3">
          March 3 - 8, 2026
        </p>

        <p className="text-lg md:text-xl text-foreground">
          Shahdag Mountain Resort, Azerbaijan
        </p>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#welcome"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20 hover:opacity-70 transition-opacity"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </a>
    </section>
  );
};

export default Hero;
