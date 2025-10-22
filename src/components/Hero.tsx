import heroImage from "@/assets/hero-bg.jpg";

const sponsors = [
  { name: "ISMF", logo: "https://hsjfj.my.canva.site/_assets/media/658e50a9e490b2402c77f98de1bace56.png" },
  { name: "Azerbaijan Winter Sports", logo: "https://hsjfj.my.canva.site/_assets/media/4ceef982077943679d17871d85df4c3c.png" },
  { name: "Ministry", logo: "https://hsjfj.my.canva.site/_assets/media/8fa78a7cd050e089e0f57e1b5f12da02.png" },
  { name: "Azerbaijan Olympic", logo: "https://hsjfj.my.canva.site/_assets/media/4eda573e6320b9e91e4aa055749cf9a4.png" },
  { name: "Shahdag", logo: "https://hsjfj.my.canva.site/_assets/media/c6af4a5574e20620cd25147b42804b83.png" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* Sponsor Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-12">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="p-2">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-primary mb-6">
          Shahdag World Cup 2025
        </h1>
        
        {/* Dates */}
        <p className="text-xl md:text-2xl font-inter font-medium text-foreground mb-3">
          January 10 - January 13, 2025
        </p>
        
        <p className="text-lg md:text-xl font-inter text-muted-foreground">
          ISMF World Cup
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
