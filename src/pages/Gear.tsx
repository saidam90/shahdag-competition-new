import { Card, CardContent } from "@/components/ui/card";
import {
  CreditCard,
  Link2,
  Footprints,
  Wand2,
  Layers,
  HardHat,
  Hand,
  Backpack,
  Mountain,
} from "lucide-react";

// Custom Ski Icon Component
const SkiIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Two crossed skis */}
    <line x1="4" y1="20" x2="20" y2="4" />
    <line x1="4" y1="4" x2="20" y2="20" />
    {/* Ski poles */}
    <line x1="2" y1="22" x2="2" y2="12" />
    <line x1="22" y1="22" x2="22" y2="12" />
    {/* Pole grips */}
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
  </svg>
);

const Gear = () => {
  const gearCategories = [
    {
      title: "Vertical mandatory equipment",
      items: [
        { name: "Identity", icon: CreditCard },
        { name: "Ski", icon: SkiIcon },
        { name: "Binding", icon: Link2 },
        { name: "Boots", icon: Footprints },
        { name: "Batons", icon: Wand2 },
        { name: "Seals", icon: Layers },
        { name: "Helmet", icon: HardHat },
        { name: "Glove", icon: Hand },
      ],
    },
    {
      title: "Speed racing mandatory equipment",
      items: [
        { name: "Identity", icon: CreditCard },
        { name: "Ski", icon: SkiIcon },
        { name: "Binding", icon: Link2 },
        { name: "Boots", icon: Footprints },
        { name: "Batons", icon: Wand2 },
        { name: "Seals", icon: Layers },
        { name: "Helmet", icon: HardHat },
        { name: "Glove", icon: Hand },
        { name: "Bag", icon: Backpack },
      ],
    },
  ];

  return (
    <section id="gear" className="py-16 px-4 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-icon-gold rounded-full px-4 py-2 mb-4 md:mb-8">
            <Mountain className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">EQUIPMENT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Gear & Technical Details
          </h1>

          <p className="text-center text-lg text-foreground max-w-2xl mx-auto mb-6">
            The following equipment is mandatory and ISMF rules will be applied
            in the competition.
          </p>

          <a
            href="https://www.ismf-ski.org/rules/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-lg font-medium transition-colors"
          >
            View ISMF Rules →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {gearCategories.map((category, idx) => (
            <Card
              key={idx}
              className="bg-card border-2 border-border hover:shadow-2xl transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
            >
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-primary group-hover:text-icon-gold transition-colors">
                  {category.title}
                </h2>

                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={itemIdx}
                        className="flex items-center gap-2 rounded-lg"
                      >
                        <div className="w-10 h-10 rounded-full bg-icon-gold/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-icon-gold" />
                        </div>
                        <span className="text-md font-medium text-foreground">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gear;
