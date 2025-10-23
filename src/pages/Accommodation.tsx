import { Button } from "@/components/ui/button";
import hotelRoomImage from "@/assets/hotel-room.jpg";
import apartmentRoomImage from "@/assets/apartment-room.jpg";
import budgetRoomImage from "@/assets/budget-room.jpg";

const Accommodation = () => {
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
            { name: "Triple Room", price: "320 EUR per night" },
          ],
        },
        {
          type: "Halfboard:",
          rooms: [
            { name: "Single Room", price: "170 EUR per night" },
            { name: "Double Room", price: "195 EUR per night" },
            { name: "Triple Room", price: "250 EUR per night" },
          ],
        },
      ],
      policy:
        "Tax: Rates include 18% VAT\nCancellation Policy: Reservations are non-refundable after 15th December. Any changes or cancellations must be made before this date.",
    },
    {
      title: "Apartment",
      image: apartmentRoomImage,
      rates: [
        {
          type: "Fullboard (includes all meals):",
          rooms: [
            { name: "Shared room for 4 adults", price: "95 EUR per night" },
            { name: "Shared room for 6 adults", price: "90 EUR per night" },
          ],
        },
        {
          type: "Halfboard:",
          rooms: [
            { name: "Shared room for 4 adults", price: "72 EUR per night" },
            { name: "Shared room for 6 adults", price: "67 EUR per night" },
          ],
        },
      ],
      policy:
        "Tax: Rates include 18% VAT\nCancellation Policy: Reservations are non-refundable after 15th December. Any changes or cancellations must be made before this date.",
    },
    {
      title: "Budget accommodation",
      image: budgetRoomImage,
      rates: [
        {
          type: "Full board (includes all meals):",
          rooms: [
            {
              name: "Rate per person (shared room)",
              price: "90 EUR per night",
            },
          ],
        },
        {
          type: "Halfboard:",
          rooms: [
            {
              name: "Rate per person (shared room)",
              price: "70 EUR per night",
            },
          ],
        },
      ],
      policy:
        "Tax: The rate includes 18% VAT\nCancellation Policy: Reservations are non-refundable after 15th December. Any changes or cancellations must be made before this date.",
    },
  ];

  return (
    <section id="accommodation" className="py-16 px-4 bg-background scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
          Accommodation
        </h1>

        <div className="space-y-16">
          {accommodationOptions.map((option, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-bold text-primary text-center mb-8">
                {option.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={option.image}
                    alt={`${option.title} accommodation`}
                    className="w-full h-auto"
                  />
                </div>

                <div className="space-y-6">
                  {option.rates.map((rate, rateIdx) => (
                    <div key={rateIdx}>
                      <h3 className="font-semibold text-lg mb-3">
                        {rate.type}
                      </h3>
                      {rate.rooms.map((room, roomIdx) => (
                        <p key={roomIdx} className="mb-2">
                          {room.name}:{" "}
                          <span className="font-semibold">{room.price}</span>
                        </p>
                      ))}
                    </div>
                  ))}

                  <div className="pt-4 space-y-2 whitespace-pre-line text-sm text-muted-foreground">
                    {option.policy}
                  </div>

                  <Button
                    size="lg"
                    className="w-full md:w-auto bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href="mailto:reservations@shahdag.az">
                      Book accommodation
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
