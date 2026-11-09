import { useState } from "react";
import sprint from "@/assets/sprints/sprint.jpeg";
import sprintElevation from "@/assets/sprints/sprint-elevation.jpeg";
import mixedRelay from "@/assets/sprints/mixed-relay.jpeg";
import mixedRelayElevation from "@/assets/sprints/mixed-relay-elevation.jpeg";
import teamRace from "@/assets/sprints/team-race.jpeg";
import teamRaceMenElevation from "@/assets/sprints/team-race-men-elevation.jpeg";
import teamRaceWomenElevation from "@/assets/sprints/team-race-women-elevation.jpeg";
import individualRace from "@/assets/sprints/individual-race.jpeg";
import individualRaceElevation from "@/assets/sprints/individual-race-elevation.jpeg";
import vertical from "@/assets/sprints/vertical.jpeg";
import verticalElevation from "@/assets/sprints/vertical-elevation.jpeg";

type RaceMap = { src: string; alt: string };

// Each race: its route map, then its elevation profile(s). The images carry
// their own titles, so they're shown without extra labels.
const raceCategories: { id: string; title: string; maps: RaceMap[] }[] = [
  {
    id: "sprint",
    title: "Sprint",
    maps: [
      { src: sprint, alt: "Sprint - Route Map" },
      { src: sprintElevation, alt: "Sprint - Elevation Profile" },
    ],
  },
  {
    id: "mixed-relay",
    title: "Mixed Relay",
    maps: [
      { src: mixedRelay, alt: "Mixed Relay - Route Map" },
      { src: mixedRelayElevation, alt: "Mixed Relay - Elevation Profile" },
    ],
  },
  {
    id: "team",
    title: "Team",
    maps: [
      { src: teamRace, alt: "Team Race - Route Map" },
      { src: teamRaceMenElevation, alt: "Team Race Men - Elevation Profile" },
      { src: teamRaceWomenElevation, alt: "Team Race Women - Elevation Profile" },
    ],
  },
  {
    id: "individual",
    title: "Individual",
    maps: [
      { src: individualRace, alt: "Individual Race - Route Map" },
      { src: individualRaceElevation, alt: "Individual Race - Elevation Profile" },
    ],
  },
  {
    id: "vertical",
    title: "Vertical",
    maps: [
      { src: vertical, alt: "Vertical - Route Map" },
      { src: verticalElevation, alt: "Vertical - Elevation Profile" },
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

                {/* Maps Display - Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.maps.map((map) => (
                    <div
                      key={map.src}
                      // An odd one out (Team's third image) sits centred.
                      className="overflow-hidden bg-white lg:last:odd:col-span-2 lg:last:odd:justify-self-center lg:last:odd:w-[calc(50%-0.75rem)]"
                    >
                      <img
                        src={map.src}
                        alt={map.alt}
                        loading="lazy"
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
