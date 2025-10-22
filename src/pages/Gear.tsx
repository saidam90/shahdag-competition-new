import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        { name: "Glove", icon: "◎" }
      ]
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
        { name: "Bag", icon: "◎" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
              Technical details & rules
            </h1>
            
            <p className="text-center text-lg mb-8">
              The following equipment is mandatory and ISMF rules will be applied in the competition.
            </p>
            
            <div className="text-center mb-12">
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
                <Card key={idx} className="bg-primary text-primary-foreground overflow-hidden">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                      {category.title}
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-center gap-2">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-lg">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gear;
