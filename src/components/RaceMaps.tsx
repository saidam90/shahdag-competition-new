import { useState } from "react";
import sprintRace1 from "@/assets/sprints/Sprint race 1.webp";
import sprintRace2 from "@/assets/sprints/Sprint race 2.webp";
import mixedRelay1 from "@/assets/sprints/Mixed relay 1.webp";
import mixedRelay2 from "@/assets/sprints/Mixed relay 2.webp";
import verticalSenior1 from "@/assets/sprints/Vertical race Senior 1.webp";
import verticalSenior2 from "@/assets/sprints/Vertical race Senior 2.webp";
import individualSeniorM1 from "@/assets/sprints/Individual race Senior M 1.webp";
import individualSeniorM2 from "@/assets/sprints/Individual race Senior M 2.webp";
import individualSeniorW1 from "@/assets/sprints/Individual race Senior W 1.webp";
import individualSeniorW2 from "@/assets/sprints/Individual race Senior W 2.webp";

// Define race categories with their maps
const raceCategories: {
  id: string;
  title: string;
  groups: { label?: string; maps: string[] }[];
}[] = [
  {
    id: "sprint",
    title: "Sprint",
    groups: [{ maps: [sprintRace1, sprintRace2] }],
  },
  {
    id: "mixed-relay",
    title: "Mixed Relay",
    groups: [{ maps: [mixedRelay1, mixedRelay2] }],
  },
  {
    id: "team",
    title: "Team",
    groups: [{ maps: [] }],
  },
  {
    id: "individual",
    title: "Individual",
    groups: [
      { maps: [] },
      {
        label: "Senior M / U23 M",
        maps: [individualSeniorM1, individualSeniorM2],
      },
      {
        label: "Senior W / U23 M / W / U20 M / W",
        maps: [individualSeniorW1, individualSeniorW2],
      },
    ],
  },
  {
    id: "vertical",
    title: "Vertical",
    groups: [
      { maps: [] },
      {
        label: "Senior M / W / U23 M / W / U20 M / W",
        maps: [verticalSenior1, verticalSenior2],
      },
    ],
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
                  {category.title}
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

                {category.groups.map((group) => (
                  <div
                    key={group.label ?? category.id}
                    className="mb-12 last:mb-0"
                  >
                    {group.label && (
                      <h4 className="text-xl md:text-2xl font-semibold text-center mb-6 text-primary">
                        {group.label}
                      </h4>
                    )}

                    {group.maps.length === 0 && (
                      <p className="text-lg text-center text-muted-foreground">
                        Map coming soon
                      </p>
                    )}

                    {/* Maps Display - Side by Side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {group.maps.map((map, mapIndex) => (
                        <div
                          key={mapIndex}
                          className=" overflow-hidden bg-white"
                        >
                          <img
                            src={map}
                            alt={`${category.title}${
                              group.label ? ` ${group.label}` : ""
                            } - ${
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaceMaps;
