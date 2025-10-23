import { MapPin, Download } from "lucide-react";
import shahdagMap from "@/assets/shahdag-map.png";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <section id="location" className="pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 bg-icon-gold">
            <MapPin className="w-5 h-5 text-white bg-icon-gold" />
            <span className="text-sm font-semibold text-white">VENUE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary my-4">
            Shahdag Mountain Resort
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Experience world-class ski mountaineering at Azerbaijan's premier
            mountain destination
          </p>

          <div className="flex max-w-5xl mx-auto justify-center">
            <img
              src={shahdagMap}
              alt="Shahdag Mountain Resort Map"
              className="w-[700px] h-auto py-8 rounded-xl"
            />
          </div>

          <div className="flex justify-center mt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href={shahdagMap} download="shahdag-map.png">
                <Download className="w-5 h-5 mr-2" />
                Download Map
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
