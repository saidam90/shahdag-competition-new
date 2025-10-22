import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Agenda from "@/components/Agenda";
import Prizes from "@/components/Prizes";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import circuitSprintImage from "@/assets/circuit-sprint.png";
import hotelRoomImage from "@/assets/hotel-room.png";
import apartmentRoomImage from "@/assets/apartment-room.png";
import budgetRoomImage from "@/assets/budget-room.png";
import transportationImage from "@/assets/transportation.png";

const Index = () => {
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

  const accommodationOptions = [
    {
      title: "Hotel",
      image: hotelRoomImage,
      rates: [
        {
          type: "Fullboard (includes all meals):",
          rooms: [
            { name: "Single Room", price: "190 EUR per night" },
            { name: "Double Room", price: "235 EUR per night" },
            { name: "Triple Room", price: "320 EUR per night" }
          ]
        },
        {
          type: "Halfboard:",
          rooms: [
            { name: "Single Room", price: "170 EUR per night" },
            { name: "Double Room", price: "195 EUR per night" },
            { name: "Triple Room", price: "250 EUR per night" }
          ]
        }
      ],
      policy: "Tax: Rates include 18% VAT\nCancellation Policy: Reservations are non-refundable after 15th December. Any changes or cancellations must be made before this date."
    },
    {
      title: "Apartment",
      image: apartmentRoomImage,
      rates: [
        {
          type: "Fullboard (includes all meals):",
          rooms: [
            { name: "Shared room for 4 adults", price: "95 EUR per night" },
            { name: "Shared room for 6 adults", price: "90 EUR per night" }
          ]
        },
        {
          type: "Halfboard:",
          rooms: [
            { name: "Shared room for 4 adults", price: "72 EUR per night" },
            { name: "Shared room for 6 adults", price: "67 EUR per night" }
          ]
        }
      ],
      policy: "Tax: Rates include 18% VAT\nCancellation Policy: Reservations are non-refundable after 15th December. Any changes or cancellations must be made before this date."
    },
    {
      title: "Budget accommodation",
      image: budgetRoomImage,
      rates: [
        {
          type: "Full board (includes all meals):",
          rooms: [
            { name: "Rate per person (shared room)", price: "90 EUR per night" }
          ]
        },
        {
          type: "Halfboard:",
          rooms: [
            { name: "Rate per person (shared room)", price: "70 EUR per night" }
          ]
        }
      ],
      policy: "Tax: The rate includes 18% VAT\nCancellation Policy: Reservations are non-refundable after 15th December. Any changes or cancellations must be made before this date."
    }
  ];

  const faqs = [
    {
      question: "Do I need a visa to Azerbaijan?",
      answer: (
        <>
          <p className="mb-4">
            You can check whether you need a visa to Azerbaijan based on your country by visiting{" "}
            <a 
              href="https://www.evisa.gov.az/en/check-visa-requirement" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              this link
            </a>
            .
          </p>
          <p className="mb-4">
            If a visa is required, you can obtain an e-visa for 26 USD (22.98 EUR) within 3 days in just three simple steps: application, payment, and download. Urgent visas can be processed in as little as 3 hours for a fee of 60 USD (55.15 EUR). You can apply for an e-visa through the following link:{" "}
            <a 
              href="https://evisa.gov.az/en/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              https://evisa.gov.az/en/
            </a>
          </p>
        </>
      )
    },
    {
      question: "How can I book accommodation?",
      answer: (
        <p>
          To book accommodation, simply select one of the options mentioned above and email us at{" "}
          <a 
            href="mailto:reservations@shahdag.az" 
            className="text-primary hover:underline font-medium"
          >
            reservations@shahdag.az
          </a>
          .
        </p>
      )
    },
    {
      question: "I have questions. Who can I contact?",
      answer: (
        <>
          <p className="mb-2">
            If you have any questions about the race, feel free to reach out to us at{" "}
            <a 
              href="mailto:info@wintersports.az" 
              className="text-primary hover:underline font-medium"
            >
              info@wintersports.az
            </a>
          </p>
          <p>
            If you have any questions about the accommodation, you can always contact us at{" "}
            <a 
              href="mailto:reservations@shahdag.az" 
              className="text-primary hover:underline font-medium"
            >
              reservations@shahdag.az
            </a>
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Welcome />
      <Agenda />
      <Prizes />
      <Location />
      
      {/* Circuits Section */}
      <section id="circuits" className="py-12 md:py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-8 md:mb-12">
            Circuit 1: Sprint Race
          </h2>
          
          <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
            <img 
              src={circuitSprintImage} 
              alt="Sprint Race Circuit Map and Profile" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Gear Section */}
      <section id="gear" className="py-12 md:py-20 px-4 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-4">
            Technical details & rules
          </h2>
          
          <p className="text-center text-base md:text-lg mb-6 md:mb-8 px-4">
            The following equipment is mandatory and ISMF rules will be applied in the competition.
          </p>
          
          <div className="text-center mb-8 md:mb-12">
            <a 
              href="https://www.ismf-ski.org/rules/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline text-base md:text-lg font-medium"
            >
              ISMF Rules
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {gearCategories.map((category, idx) => (
              <Card key={idx} className="bg-primary text-primary-foreground overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-3 md:gap-y-4">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2">
                        <span className="text-lg md:text-xl">{item.icon}</span>
                        <span className="text-base md:text-lg">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="py-12 md:py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-8 md:mb-12">
            Accommodation
          </h2>
          
          <div className="space-y-12 md:space-y-16">
            {accommodationOptions.map((option, idx) => (
              <div key={idx}>
                <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6 md:mb-8">
                  {option.title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
                  <div className="rounded-2xl overflow-hidden shadow-lg order-1">
                    <img 
                      src={option.image} 
                      alt={`${option.title} accommodation`} 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <div className="space-y-4 md:space-y-6 order-2">
                    {option.rates.map((rate, rateIdx) => (
                      <div key={rateIdx}>
                        <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3">{rate.type}</h4>
                        {rate.rooms.map((room, roomIdx) => (
                          <p key={roomIdx} className="mb-2 text-sm md:text-base">
                            {room.name}: <span className="font-semibold">{room.price}</span>
                          </p>
                        ))}
                      </div>
                    ))}
                    
                    <div className="pt-4 space-y-2 whitespace-pre-line text-xs md:text-sm text-muted-foreground">
                      {option.policy}
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full md:w-auto bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href="mailto:reservations@shahdag.az">Book accommodation</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section id="transportation" className="py-12 md:py-20 px-4 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-8 md:mb-12">
            Transportation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={transportationImage} 
                alt="Winter transportation with snow tires" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="space-y-4">
              <p className="text-base md:text-lg">
                For your convenience, <span className="font-semibold">a shuttle bus between Baku and Shahdag is available at a special rate.</span>
              </p>
              <p className="text-base md:text-lg">
                To reserve a seat, please contact us in advance at{" "}
                <a 
                  href="mailto:info@wintersports.az" 
                  className="text-primary hover:underline font-medium break-all"
                >
                  info@wintersports.az
                </a>
                .
              </p>
              <p className="text-base md:text-lg">
                Enjoy a comfortable journey, allowing you to focus on the upcoming adventure. The schedule will be shared a week prior to the race.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-8 md:mb-12">
            FAQ
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            {faqs.map((faq, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-primary">
                    • {faq.question}
                  </h3>
                  <div className="text-sm md:text-base text-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
