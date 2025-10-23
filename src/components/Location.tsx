import { MapPin, Mountain, Phone, Mail } from "lucide-react";
import shahdagMap from "@/assets/shahdag-map.png";

const Location = () => {
  return (
    <section id="location" className="pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 bg-icon-gold">
            <MapPin className="w-5 h-5 text-white bg-icon-gold" />
            <span className="text-sm font-urbanist font-semibold text-white">
              VENUE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-urbanist font-bold text-primary my-4">
            Shahdag Mountain Resort
          </h2>
          <p className="text-lg font-urbanist text-foreground max-w-2xl mx-auto">
            Experience world-class ski mountaineering at Azerbaijan's premier
            mountain destination
          </p>

          <div className="rounded-xl">
            <img
              src={shahdagMap}
              alt="Shahdag Mountain Resort Map"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* <div className="max-w-7xl mx-auto space-y-8"> */}
        {/* <div className="bg-card rounded-xl p-8 max-w-3xl mx-auto"> */}
        {/* <div className="flex items-start gap-4 mb-6"> */}
        {/* <div className="bg-primary/10 rounded-lg p-3">
                <Mountain className="w-6 h-6 text-primary" />
              </div> */}
        {/* <div>
                <h3 className="text-xl font-urbanist font-bold text-card-foreground mb-2">
                  About the Resort
                </h3>
                <p className="text-muted-foreground font-urbanist">
                  Shahdag Mountain Resort is Azerbaijan's premier ski
                  destination, offering world-class facilities and breathtaking
                  mountain landscapes perfect for international competitions.
                </p>
              </div>
            </div> */}

        {/* <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-sm font-urbanist text-muted-foreground">
                  Shahdag National Park, Qusar District, Azerbaijan
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-sm font-urbanist text-muted-foreground">
                  +994 (0) 12 404 88 88
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-sm font-urbanist text-muted-foreground">
                  info@shahdagresort.com
                </p>
              </div>
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Location;
