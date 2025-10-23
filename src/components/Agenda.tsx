import { Calendar, Clock } from "lucide-react";

const agendaData = [
  {
    day: "Thu, January 9",
    events: [
      { time: "07:00 - 10:00", title: "Breakfast" },
      { time: "17:00 - 17:45", title: "Sprint race captains meeting" },
      {
        time: "18:00 - 19:00",
        title: "Official announcement of first 5 racers",
      },
    ],
  },
  {
    day: "Fri, January 10",
    events: [
      { time: "06:30 - 09:30", title: "Breakfast" },
      { time: "10:45", title: "Official opening" },
      {
        time: "11:15",
        title: "Race Recognition - All categories (Women | Men)",
      },
      { time: "12:15", title: "Qualification Women" },
      { time: "12:35", title: "Qualification Men" },
      { time: "15:20", title: "Flower Ceremony" },
      { time: "15:30", title: "Lunch at Miras (Shahdag Hotel & Spa)" },
    ],
  },
  {
    day: "Sat, January 11",
    events: [
      { time: "06:30 - 09:30", title: "Breakfast" },
      { time: "10:00", title: "Vertical race captains meeting" },
      { time: "11:30", title: "Race Recognition - All categories" },
      { time: "12:00", title: "Women Start" },
      { time: "13:00", title: "Men Start" },
      { time: "15:00", title: "Flower Ceremony" },
      { time: "15:30", title: "Lunch at Miras" },
    ],
  },
  {
    day: "Sun, January 12",
    events: [
      { time: "06:30 - 09:30", title: "Breakfast" },
      { time: "09:30", title: "Individual race captains meeting" },
      { time: "11:00", title: "Race Recognition - All categories" },
      { time: "11:30", title: "Women Start" },
      { time: "12:30", title: "Men Start" },
      { time: "16:00", title: "Flower Ceremony" },
      { time: "16:30", title: "Lunch at Miras" },
    ],
  },
];

const Agenda = () => {
  return (
    <section id="agenda" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-lato font-semibold text-primary">
              EVENT SCHEDULE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 mt-4">
            Agenda
          </h2>
          <p className="text-lg font-lato text-black max-w-2xl mx-auto">
            Four days of intense competition and celebration at Shahdag Mountain
            Resort
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {agendaData.map((dayData, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-lato font-bold text-black mb-6 pb-4 border-b border-border">
                {dayData.day}
              </h3>
              <div className="space-y-4">
                {dayData.events.map((event, eventIdx) => (
                  <div key={eventIdx} className="flex gap-4 items-start group">
                    <div className="bg-primary/10 rounded-lg p-2 group-hover:bg-primary/20 transition-colors">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-lato font-semibold text-black mb-1">
                        {event.time}
                      </p>
                      <p className="text-sm font-lato text-black">
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
