import winnersImage from "@/assets/winners.jpg";
import { Award, Trophy, Mountain } from "lucide-react";

const Welcome = () => {
  return (
    <section id="welcome" className="pt-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-center gap-12 items-center mb-20 md:mx-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary leading-[2]">
              Join the Championship
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              Join us for the ISMF European Championship - five days of
              excitement, competition, and camaraderie surrounded by the
              breathtaking beauty of Shahdag.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full md:w-auto">
            <img
              src={winnersImage}
              alt="Ski mountaineering competition"
              className="w-full md:w-[1500px] h-full object-contain"
            />
          </div>
        </div>

        {/* Competition Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card rounded-xl p-8  text-center">
            <div className="bg-icon-gold w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Mountain className="w-7 h-7 text-primary text-white" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              Join the thrill
            </h3>
            <p className="text-foreground">
              Embrace the challenge and conquer the mountain at Shahdag Mountain
              Resort!
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 text-center">
            <div className="bg-icon-gold w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Trophy className="w-7 h-7 text-primary text-white" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              Compete for glory
            </h3>
            <p className="text-foreground">
              Participate for glory and substantial money prizes for the
              winners!
            </p>
          </div>

          <div className="bg-card rounded-xl p-8  text-center">
            <div className="bg-icon-gold w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Award className="w-7 h-7 text-primary text-white" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              Reap the rewards
            </h3>
            <p className="text-foreground">
              Showcase your skill and determination in this prestigious
              competition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
