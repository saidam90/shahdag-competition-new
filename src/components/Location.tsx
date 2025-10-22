import { MapPin, Mountain, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-inter font-semibold text-primary">VENUE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
            Shahdag Mountain Resort
          </h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
            Experience world-class ski mountaineering at Azerbaijan's premier mountain destination
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 rounded-lg p-3">
                <Mountain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold text-card-foreground mb-2">
                  About the Resort
                </h3>
                <p className="text-muted-foreground font-inter">
                  Shahdag Mountain Resort is Azerbaijan's premier ski destination, offering 
                  world-class facilities and breathtaking mountain landscapes perfect for 
                  international competitions.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-sm font-inter text-muted-foreground">
                  Shahdag National Park, Qusar District, Azerbaijan
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-sm font-inter text-muted-foreground">
                  +994 (0) 12 404 88 88
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-sm font-inter text-muted-foreground">
                  info@shahdagresort.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-xl font-montserrat font-bold text-card-foreground mb-6">
              Accommodation
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-inter font-semibold text-card-foreground mb-1">
                  Shahdag Hotel & Spa
                </h4>
                <p className="text-sm text-muted-foreground">
                  Luxury 5-star accommodation with full amenities
                </p>
              </div>
              <div className="border-l-4 border-primary/50 pl-4">
                <h4 className="font-inter font-semibold text-card-foreground mb-1">
                  Park Chalet
                </h4>
                <p className="text-sm text-muted-foreground">
                  Comfortable mountain chalets with stunning views
                </p>
              </div>
              <div className="border-l-4 border-primary/50 pl-4">
                <h4 className="font-inter font-semibold text-card-foreground mb-1">
                  Zirve Hotel
                </h4>
                <p className="text-sm text-muted-foreground">
                  Modern hotel facilities close to the slopes
                </p>
              </div>
            </div>
            
            <p className="mt-6 text-sm font-inter text-muted-foreground italic">
              Lunch will be served at Miras Restaurant (Shahdag Hotel & Spa)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
