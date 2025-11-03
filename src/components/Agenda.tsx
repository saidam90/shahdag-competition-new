import { useState } from "react";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const agendaData = [
  {
    day: "Tuesday, March 3 - Opening Championship",
    location: "",
    events: [
      { time: "18:00", title: "Captain meeting: Sprint/Mixed relay" },
      { time: "18:30", title: "Sprint race bibs distribution" },
      { time: "TBC", title: "Opening Ceremony" },
      { time: "TBC", title: "Dinner" },
    ],
  },
  {
    day: "Wednesday, March 4 - Sprint Race",
    location: "📍Shahdag Stadium",
    events: [
      { time: "09:00 - 10:00", title: "Senior, U23 Women, Men Qualification" },
      { time: "11:00 - 12:00", title: "Qualification U18 / U20 Women, Men" },
      {
        time: "13:00 - 15:00",
        title: "Final Senior, U23 Women, Men. Flowers ceremony at finals end",
      },
      {
        time: "15:15 - 17:30",
        title:
          "Youth Final U18 / U20 Women, Men. Flowers ceremony at the finals end",
      },
      { time: "18:00", title: "Awards Ceremony" },
      { time: "18:30", title: "Mixed Relay Bibs Distribution" },
    ],
  },
  {
    day: "Thursday, March 5 - Mixed Relay",
    location: "📍Shahdag Stadium Slope 2",
    events: [
      { time: "09:35 - 10:40", title: "Seniors, U23 Qualification" },
      { time: "11:15 - 12:00", title: "Seniors, U23 Finals B" },
      {
        time: "12:05 - 12:50",
        title: "Seniors, U23 Final A. Flower ceremony at the end",
      },
      { time: "13:30 - 14:40", title: "Youth Qualification" },
      { time: "15:00 - 15:55", title: "Youth Final B" },
      {
        time: "16:00 - 16:45",
        title: "Youth Final A. Flower ceremony at the end",
      },
      { time: "17:00", title: "Awards Ceremony" },
      { time: "18:00", title: "Individual Race Captain Meeting" },
      { time: "18:30", title: "Individual race bibs distribution" },
    ],
  },
  {
    day: "Friday, March 6 - Individual Race",
    location: "📍Top gondola 5",
    events: [
      { time: "09:00", title: "Senior Women / U23 Women Start" },
      { time: "09:10", title: "Senior Men / U23 Men Start" },
      { time: "09:15", title: "U20 Men Start" },
      { time: "09:30", title: "U18 Women Start" },
      { time: "09:40", title: "U18 Men / U20 Women Start" },
      { time: "17:00", title: "Awards Ceremony" },
    ],
  },
  {
    day: "Saturday, March 7 - Rest Day",
    location: "",
    events: [
      { time: "18:00", title: "Vertical Race Captain Meeting" },
      { time: "18:30", title: "Vertical Race Bibs Distribution" },
    ],
  },
  {
    day: "Sunday, March 8 - Vertical Race",
    location: "📍Top station lift 24",
    events: [
      { time: "09:00", title: "U18 Men Start" },
      { time: "09:10", title: "U18 Women Start" },
      { time: "09:30", title: "U20 Men Start" },
      { time: "09:35", title: "U20 Women Start" },
      { time: "10:00 - 10:10", title: "Flower Ceremony, 📍Top gondola 5" },
      {
        time: "11:00",
        title: "Seniors, U23 Women Start, 📍Top station lift 24",
      },
      { time: "11:30", title: "Seniors, U23 Men Start" },
      { time: "12:00 - 12:10", title: "Flower Ceremony, 📍Top gondola 5" },
      { time: "17:00", title: "Awards Ceremony" },
      { time: "TBC", title: "Closing Ceremony" },
    ],
  },
];

const Agenda = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? agendaData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === agendaData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <section id="agenda" className="md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center md:mb-16">
          <div className="inline-flex items-center gap-2 bg-icon-gold rounded-full px-4 py-2 mb-4">
            <Calendar className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">
              EVENT SCHEDULE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary my-4">
            Agenda
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Main Agenda Card Display */}
          <div className="relative mb-6">
            <div className="bg-card rounded-xl p-8 md:px-20 shadow-lg min-h-[400px]">
              <div className="mb-6 pb-4 border-b border-border">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {agendaData[currentIndex].day}
                </h3>
                {agendaData[currentIndex].location && (
                  <p className="text-md text-foreground">
                    {agendaData[currentIndex].location}
                  </p>
                )}
              </div>
              <div className="space-y-4">
                {agendaData[currentIndex].events.map((event, eventIdx) => (
                  <div key={eventIdx} className="flex gap-4 items-start group">
                    <div className="bg-primary/5 rounded-lg p-2">
                      <Clock className="w-4 h-4 text-icon-gold" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-black mb-1">
                        {event.time}
                      </p>
                      <p className="text-sm text-black">{event.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={goToPrevious}
              variant="ghost"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-[hsl(0,0%,20%)]/80 hover:bg-white dark:hover:bg-[hsl(0,0%,25%)] rounded-full w-10 h-10 md:w-12 md:h-12"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Button>

            <Button
              onClick={goToNext}
              variant="ghost"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-[hsl(0,0%,20%)]/80 hover:bg-white dark:hover:bg-[hsl(0,0%,25%)] rounded-full w-10 h-10 md:w-12 md:h-12"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>

            {/* Day Counter */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
              Day {currentIndex + 1} / {agendaData.length}
            </div>
          </div>

          {/* Day Navigation Dots */}
          <div className="flex justify-center gap-2">
            {agendaData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex
                    ? "bg-icon-gold w-8 h-3"
                    : "bg-gray-300 dark:bg-gray-600 w-3 h-3 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to day ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
