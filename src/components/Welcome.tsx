import winnersImage from "@/assets/winners.jpg";
import { Award, Trophy, Mountain } from "lucide-react";

const Welcome = () => {
  return (
    <section id="welcome" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-primary">
              Welcome to an exhilarating experience at Shahdag Mountain Resort!
            </h2>
            <p className="text-lg font-inter text-muted-foreground leading-relaxed">
              We invite you to be part of the Shahdag International Ski-Mountaineering World Cup, 
              a thrilling event that promises three days of excitement, competition, and camaraderie 
              amidst the breathtaking landscapes of Shahdag.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={winnersImage} 
              alt="Ski mountaineering competition"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Competition Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Mountain className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-montserrat font-bold text-card-foreground mb-3">
              Join the thrill
            </h3>
            <p className="text-muted-foreground font-inter">
              Embrace the challenge and conquer the mountain at Shahdag Mountain Resort!
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Trophy className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-montserrat font-bold text-card-foreground mb-3">
              Compete for glory
            </h3>
            <p className="text-muted-foreground font-inter">
              Participate for glory and substantial money prizes for the winners!
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-montserrat font-bold text-card-foreground mb-3">
              Reap the rewards
            </h3>
            <p className="text-muted-foreground font-inter">
              Showcase your skill and determination in this prestigious competition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
