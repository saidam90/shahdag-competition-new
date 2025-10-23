import { Calendar, Clock } from "lucide-react";

const agendaData = [
  {
    day: "Wednesday, March 4 - Sprint Race",
    events: [
      { time: "09:00 - 10:00", title: "Senior, U23 Women, Men Qualification" },
      { time: "11:00 - 12:00", title: "Qualification U18 / U20 Women, Men" },
      { time: "13:00 - 15:00", title: "Final Senior, U23 Women, Men" },
      { time: "15:15 - 17:30", title: "Youth Final U18 / U20 Women, Men" },
      { time: "18:00", title: "Awards Ceremony" },
      { time: "18:30", title: "Mixed Relay Bibs Distribution" },
    ],
  },
  {
    day: "Thursday, March 5 - Mixed Relay",
    events: [
      { time: "09:35 - 10:40", title: "Seniors, U23 Qualification" },
      { time: "11:15 - 12:00", title: "Seniors, U23 Finals B" },
      { time: "12:05 - 12:50", title: "Seniors, U23 Final A" },
      { time: "13:30 - 14:40", title: "Youth Qualification" },
      { time: "15:00 - 15:55", title: "Youth Final B" },
      { time: "16:00 - 16:45", title: "Youth Final A" },
      { time: "17:00", title: "Awards Ceremony" },
      { time: "18:00", title: "Individual Race Captain Meeting" },
    ],
  },
  {
    day: "Friday, March 6 - Individual Race",
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
    events: [
      { time: "18:00", title: "Vertical Race Captain Meeting" },
      { time: "18:30", title: "Vertical Race Bibs Distribution" },
    ],
  },
  {
    day: "Sunday, March 8 - Vertical Race",
    events: [
      { time: "09:00", title: "U18 Men Start" },
      { time: "09:10", title: "U18 Women Start" },
      { time: "09:30", title: "U20 Men Start" },
      { time: "09:35", title: "U20 Women Start" },
      { time: "10:00 - 10:10", title: "Flower Ceremony" },
      { time: "11:00", title: "Seniors, U23 Women Start" },
      { time: "11:30", title: "Seniors, U23 Men Start" },
      { time: "12:00 - 12:10", title: "Flower Ceremony" },
      { time: "17:00", title: "Awards Ceremony" },
      { time: "TBC", title: "Closing Ceremony" },
    ],
  },
];

const Agenda = () => {
  return (
    <section id="agenda" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {agendaData.map((dayData, idx) => (
            <div
              key={idx}
              className={`bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all ${
                idx === agendaData.length - 1 && agendaData.length % 2 !== 0
                  ? "md:col-span-2 md:w-[600px] md:mx-auto"
                  : ""
              }`}
            >
              <h3 className="text-2xl font-bold text-primary mb-6 pb-4 border-b border-border">
                {dayData.day}
              </h3>
              <div className="space-y-4">
                {dayData.events.map((event, eventIdx) => (
                  <div key={eventIdx} className="flex gap-4 items-start group">
                    <div className="bg-primary/5 rounded-lg p-2">
                      <Clock className="w-4 h-4 text-icon-gold" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-black mb-1">
                        {event.time}
                      </p>
                      <p className="text-sm text-black">
                        {event.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
