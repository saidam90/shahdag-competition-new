import { Card, CardContent } from "@/components/ui/card";

const Gear = () => {
  const gearCategories = [
    {
      title: "Vertical mandatory equipment",
      items: [
        { name: "Identity", icon: "◎" },
        { name: "Ski", icon: "◎" },
        { name: "Binding", icon: "◎" },
        { name: "Boots", icon: "◎" },
        { name: "Batons", icon: "◎" },
        { name: "Seals", icon: "◎" },
        { name: "Helmet", icon: "◎" },
        { name: "Glove", icon: "◎" },
      ],
    },
    {
      title: "Speed racing mandatory equipment",
      items: [
        { name: "Identity", icon: "◎" },
        { name: "Ski", icon: "◎" },
        { name: "Binding", icon: "◎" },
        { name: "Boots", icon: "◎" },
        { name: "Batons", icon: "◎" },
        { name: "Seals", icon: "◎" },
        { name: "Helmet", icon: "◎" },
        { name: "Glove", icon: "◎" },
        { name: "Bag", icon: "◎" },
      ],
    },
  ];

  return (
    <section id="gear" className="py-16 px-4 bg-background scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">
          Gear & Technical details
        </h1>

        <p className="text-center text-lg my-4">
          The following equipment is mandatory and ISMF rules will be applied in
          the competition.
        </p>

        <div className="text-center mb-6">
          <a
            href="https://www.ismf-ski.org/rules/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-lg font-medium"
          >
            ISMF Rules
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {gearCategories.map((category, idx) => (
            <Card key={idx} className="bg-icon-gold text-gray overflow-hidden">
              <CardContent className="px-8 py-12 md:px-12 md:py-16">
                <h2 className="text-xl font-bold mb-8 text-center">
                  {category.title}
                </h2>

                <div className="flex flex-col items-center gap-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2">
                      <span className="text-md">{item.icon}</span>
                      <span className="text-md">{item.name}</span>
                    </div>
                  ))}
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
