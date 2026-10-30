import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Camera, Mail, Video } from "lucide-react";

const Media = () => {
  const guidelines = [
    {
      title: "Media accreditation",
      icon: BadgeCheck,
      text: "Please submit your accreditation application at least 30 working days before your trip.",
    },
    {
      title: "Drones & location filming",
      icon: Video,
      text: "Media accreditation does not cover drone use or filming at specific locations, so these need a separate application. Drone approval can take up to two months, so please apply early.",
    },
    {
      title: "Contact",
      icon: Mail,
      text: (
        <>
          For media enquiries, please email{" "}
          <a
            href="mailto:info@wintersports.az"
            className="text-primary hover:underline font-medium"
          >
            info@wintersports.az
          </a>
          .{/* Phone number to be added */}
        </>
      ),
    },
  ];

  return (
    <section id="media" className="py-16 px-4 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-icon-gold rounded-full px-4 py-2 mb-4 md:mb-8">
            <Camera className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">MEDIA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Media Guidelines
          </h1>
        </div>

        <Card
          className="bg-card border-2 border-border animate-fade-in-up"
          style={{ opacity: 0 }}
        >
          <CardContent className="p-8 space-y-6">
            {guidelines.map((guideline, idx) => {
              const Icon = guideline.icon;
              return (
                <div
                  key={idx}
                  className={idx > 0 ? "border-t border-border pt-6" : ""}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-icon-gold/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-icon-gold" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      {guideline.title}
                    </h2>
                  </div>
                  <p className="text-lg text-foreground">{guideline.text}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Media;
