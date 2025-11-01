import { useState } from "react";
import sprintRace1 from "@/assets/sprints/Sprint race 1.webp";
import sprintRace2 from "@/assets/sprints/Sprint race 2.webp";
import mixedRelay1 from "@/assets/sprints/Mixed relay 1.jpg";
import mixedRelay2 from "@/assets/sprints/Mixed relay 2.jpg";
import verticalU18M1 from "@/assets/sprints/Vertical race U18M 1.jpg";
import verticalU18M2 from "@/assets/sprints/Vertical race U18M 2.jpg";
import verticalSenior1 from "@/assets/sprints/Vertical race Senior 1.jpg";
import verticalSenior2 from "@/assets/sprints/Vertical race Senior 2.jpg";
import individual1 from "@/assets/sprints/Individual 1.jpg";
import individual2 from "@/assets/sprints/Individual 2.jpg";
import individualSeniorM1 from "@/assets/sprints/Individual race Senior M 1.jpg";
import individualSeniorM2 from "@/assets/sprints/Individual race Senior M 2.jpg";
import individualSeniorW1 from "@/assets/sprints/Individual race Senior W 1.jpg";
import individualSeniorW2 from "@/assets/sprints/Individual race Senior W 2.jpg";

// Define race categories with their maps
const raceCategories = [
  {
    id: "sprint",
    title: "Sprint Race",
    shortTitle: "Sprint Race",
    maps: [sprintRace1, sprintRace2],
  },
  {
    id: "mixed-relay",
    title: "Mixed Relay",
    shortTitle: "Mixed Relay",
    maps: [mixedRelay1, mixedRelay2],
  },
  {
    id: "vertical-u18",
    title: "Vertical Race U18M / U18W",
    shortTitle: "Vertical U18",
    maps: [verticalU18M1, verticalU18M2],
  },
  {
    id: "vertical-senior",
    title: "Vertical Race Senior M / W / U23 M / W / U20 M / W",
    shortTitle: "Vertical Senior",
    maps: [verticalSenior1, verticalSenior2],
  },
  {
    id: "individual-u18",
    title: "Individual Race U18 M / W",
    shortTitle: "Individual U18",
    maps: [individual1, individual2],
  },
  {
    id: "individual-senior-m",
    title: "Individual Race Senior M / U23 M",
    shortTitle: "Individual Senior M",
    maps: [individualSeniorM1, individualSeniorM2],
  },
  {
    id: "individual-senior-w",
    title: "Individual Race Senior W / U23 M / W / U20 M / W",
    shortTitle: "Individual Senior W",
    maps: [individualSeniorW1, individualSeniorW2],
  },
];

const RaceMaps = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="race-maps" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Race Maps
        </h2>

        <div className="max-w-7xl mx-auto">
          {/* Tabs Navigation */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {raceCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 font-medium transition-all relative ${
                    activeTab === index
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <span className="hidden md:inline">{category.title}</span>
                  <span className="md:hidden">{category.shortTitle}</span>
                  {activeTab === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-icon-gold" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            {raceCategories.map((category, index) => (
              <div
                key={category.id}
                className={`${activeTab === index ? "block" : "hidden"}`}
              >
                {/* Category Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
                  {category.title}
                </h3>

                {/* Maps Display - Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.maps.map((map, mapIndex) => (
                    <div key={mapIndex} className=" overflow-hidden bg-white">
                      <img
                        src={map}
                        alt={`${category.title} - ${
                          mapIndex === 0 ? "Route Map" : "Elevation Profile"
                        }`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaceMaps;
