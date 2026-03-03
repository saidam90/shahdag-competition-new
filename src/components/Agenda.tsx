import { useState } from "react";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

type AgendaEvent =
  | { section: string; time?: undefined; title?: undefined; subsection?: undefined; note?: undefined }
  | { subsection: string; time?: undefined; title?: undefined; section?: undefined; note?: undefined }
  | { note: string; time?: undefined; title?: undefined; section?: undefined; subsection?: undefined }
  | { time: string; title: string; section?: undefined; subsection?: undefined; note?: undefined };

const agendaData: { day: string; date: string; events: AgendaEvent[] }[] = [
  {
    day: "Day 1 – Opening Program",
    date: "Tuesday, March 3, 2026",
    events: [
      { time: "18:00–19:00", title: "Bib distribution & Team Captains Meeting" },
      { time: "19:00–20:00", title: "Opening Ceremony" },
      { time: "20:00–21:00", title: "Dinner" },
    ],
  },
  {
    day: "Day 2 – Sprint",
    date: "Wednesday, March 4, 2026",
    events: [
      { section: "Youth Sprint" },
      { time: "08:40", title: "Pre-start TCM" },
      { time: "09:00", title: "Course inspection (U18)" },
      { time: "09:15", title: "Course inspection (U20)" },
      { subsection: "Qualifications" },
      { time: "09:55", title: "U18 Women" },
      { time: "10:03", title: "U18 Men" },
      { time: "10:12", title: "U20 Women" },
      { time: "10:19", title: "U20 Men" },
      { subsection: "Finals" },
      { time: "10:39", title: "U18 Women Final" },
      { time: "10:49", title: "U18 Men Final" },
      { time: "10:59", title: "U20 Women Final" },
      { time: "11:09", title: "U20 Men Final" },
      { time: "11:19", title: "Flower Ceremony (U18 & U20)" },
      { section: "Senior Sprint" },
      { time: "11:37", title: "Pre-start TCM" },
      { time: "11:57–12:12", title: "Course inspection" },
      { subsection: "Qualifications" },
      { time: "12:27", title: "Women" },
      { time: "12:44", title: "Men" },
      { subsection: "Final Rounds" },
      { time: "13:20", title: "Men Quarterfinals" },
      { time: "13:50", title: "Live broadcast start" },
      { time: "14:02", title: "Women Semifinals" },
      { time: "14:17", title: "Men Semifinals" },
      { time: "14:32", title: "Women Final" },
      { time: "14:37", title: "Women Flower Ceremony" },
      { time: "14:47", title: "Men Final" },
      { time: "14:52", title: "Men Flower Ceremony" },
      { section: "Evening" },
      { time: "18:00", title: "Awards Ceremony" },
      { time: "19:00", title: "Dinner" },
    ],
  },
  {
    day: "Day 3 – Mixed Relay",
    date: "Thursday, March 5, 2026",
    events: [
      { section: "Youth Mixed Relay" },
      { time: "09:02", title: "Pre-start TCM" },
      { time: "09:22–09:42", title: "Course inspection" },
      { subsection: "Qualifications" },
      { time: "10:02", title: "Women" },
      { time: "10:16", title: "Men" },
      { time: "10:50", title: "Final A" },
      { time: "11:45", title: "Flower Ceremony" },
      { section: "Senior Mixed Relay" },
      { time: "12:12", title: "Pre-start TCM" },
      { time: "12:32–12:52", title: "Course inspection" },
      { subsection: "Qualifications" },
      { time: "13:12", title: "Women" },
      { time: "13:26", title: "Men" },
      { time: "14:00", title: "Live broadcast start" },
      { time: "14:10", title: "Final A" },
      { time: "14:47", title: "Flower Ceremony" },
      { time: "15:15", title: "Final B (if required)" },
      { section: "Evening" },
      { time: "17:00–18:00", title: "Bib distribution & Team Captains Meeting" },
      { time: "18:00", title: "Awards Ceremony" },
      { time: "19:00", title: "Dinner" },
    ],
  },
  {
    day: "Day 4 – Individual",
    date: "Friday, March 6, 2026",
    events: [
      { time: "08:50", title: "Pre-start TCM" },
      { subsection: "Races" },
      { time: "09:00", title: "U18 Women & Men / U20 Women" },
      { time: "10:30", title: "Flower Ceremony" },
      { time: "10:45", title: "U20 Men / Senior Women" },
      { time: "12:15", title: "Flower Ceremony" },
      { time: "12:30", title: "Senior Men" },
      { time: "13:45", title: "Flower Ceremony" },
      { section: "Evening" },
      { time: "18:00", title: "Awards Ceremony" },
      { time: "19:00", title: "Dinner" },
    ],
  },
  {
    day: "Day 5 – Rest Day",
    date: "Saturday, March 7, 2026",
    events: [
      { note: "Rest Day" },
      { time: "19:00", title: "Dinner" },
    ],
  },
  {
    day: "Day 6 – Vertical",
    date: "Sunday, March 8, 2026",
    events: [
      { time: "09:20", title: "Pre-start TCM" },
      { subsection: "Races" },
      { time: "09:30", title: "U18 Women & Men" },
      { time: "09:50", title: "U20 Women & Men" },
      { time: "10:35", title: "Senior Women" },
      { time: "11:10", title: "Senior Men" },
      { note: "Flower ceremonies follow each race." },
      { time: "14:00", title: "Awards Ceremony" },
      { section: "Evening" },
      { time: "19:00", title: "Gala Dinner" },
    ],
  },
];

const Agenda = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? agendaData.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === agendaData.length - 1 ? 0 : prevIndex + 1,
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
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {agendaData[currentIndex].day}
                </h3>
                <p className="text-md text-foreground">
                  {agendaData[currentIndex].date}
                </p>
              </div>
              <div className="space-y-3">
                {agendaData[currentIndex].events.map((event, eventIdx) => {
                  if ("section" in event && event.section) {
                    return (
                      <p key={eventIdx} className="text-sm font-bold text-primary uppercase tracking-wide pt-2">
                        {event.section}
                      </p>
                    );
                  }
                  if ("note" in event && event.note) {
                    return (
                      <p key={eventIdx} className="text-xs italic text-muted-foreground pl-1">
                        {event.note}
                      </p>
                    );
                  }
                  if ("subsection" in event && event.subsection) {
                    return (
                      <p key={eventIdx} className="text-xs font-semibold text-[hsl(45,23%,42%)] uppercase tracking-wide pl-1">
                        {event.subsection}
                      </p>
                    );
                  }
                  return (
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
                  );
                })}
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
