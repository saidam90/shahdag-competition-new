import winnersImage from "@/assets/winners.webp";
import winnersImageMedium from "@/assets/winners-medium.webp";
import winnersImageSmall from "@/assets/winners-small.webp";
import thrillImage from "@/assets/thrill.webp";
import thrillImageMedium from "@/assets/thrill-medium.webp";
import thrillImageSmall from "@/assets/thrill-small.webp";
import gloryImage from "@/assets/glory.webp";
import gloryImageMedium from "@/assets/glory-medium.webp";
import gloryImageSmall from "@/assets/glory-small.webp";
import awardsImage from "@/assets/awards.webp";
import awardsImageMedium from "@/assets/awards-medium.webp";
import awardsImageSmall from "@/assets/awards-small.webp";

const Welcome = () => {
  return (
    <section id="welcome" className="pt-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-center gap-12 items-center mb-20 md:mx-10">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Join the Championship
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              Join us for the ISMF European Championship - six days of
              excitement, competition, and camaraderie surrounded by the
              breathtaking beauty of Shahdag.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full md:w-auto animate-fade-in-right hover:scale-105 transition-transform duration-500">
            <img
              srcSet={`${winnersImageSmall} 800w, ${winnersImageMedium} 1200w, ${winnersImage} 3000w`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px"
              src={winnersImage}
              alt="Ski mountaineering competition"
              className="w-full md:w-[1500px] h-full object-contain"
            />
          </div>
        </div>

        {/* Competition Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card rounded-xl overflow-hidden text-center group hover:shadow-2xl transition-all duration-300 animate-fade-in-up animation-delay-100">
            <div className="overflow-hidden">
              <img
                srcSet={`${thrillImageSmall} 800w, ${thrillImageMedium} 1200w, ${thrillImage} 2343w`}
                sizes="(max-width: 768px) 100vw, 766px"
                src={thrillImage}
                alt="Join the thrill"
                className="w-full h-64 object-cover rounded-sm group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                Join the thrill
              </h3>
              <p className="text-foreground">
                Embrace the challenge and conquer the mountain at Shahdag
                Mountain Resort!
              </p>
            </div>
          </div>

          <div className="bg-card rounded-xl overflow-hidden text-center group hover:shadow-2xl transition-all duration-300 animate-fade-in-up animation-delay-200">
            <div className="overflow-hidden">
              <img
                srcSet={`${gloryImageSmall} 800w, ${gloryImageMedium} 1200w, ${gloryImage} 2342w`}
                sizes="(max-width: 768px) 100vw, 766px"
                src={gloryImage}
                alt="Compete for glory"
                className="w-full h-64 object-cover rounded-sm group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                Compete for glory
              </h3>
              <p className="text-foreground">
                Participate for glory and substantial money prizes for the
                winners!
              </p>
            </div>
          </div>

          <div className="bg-card rounded-xl overflow-hidden text-center group hover:shadow-2xl transition-all duration-300 animate-fade-in-up animation-delay-300">
            <div className="overflow-hidden">
              <img
                srcSet={`${awardsImageSmall} 800w, ${awardsImageMedium} 1200w, ${awardsImage} 2343w`}
                sizes="(max-width: 768px) 100vw, 766px"
                src={awardsImage}
                alt="Reap the rewards"
                className="w-full h-64 object-cover rounded-sm group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                Reap the rewards
              </h3>
              <p className="text-foreground">
                Showcase your skill and determination in this prestigious
                competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
