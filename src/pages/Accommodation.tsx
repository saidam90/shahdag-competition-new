import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hotelRoomImage from "@/assets/hotel-room.webp";
import hotelRoomImageMedium from "@/assets/hotel-room-medium.webp";
import hotelRoomImageSmall from "@/assets/hotel-room-small.webp";
import apartmentRoomImage from "@/assets/apartment-room.webp";
import apartmentRoomImageMedium from "@/assets/apartment-room-medium.webp";
import apartmentRoomImageSmall from "@/assets/apartment-room-small.webp";
import budgetRoomImage from "@/assets/budget-room.webp";
import budgetRoomImageMedium from "@/assets/budget-room-medium.webp";
import budgetRoomImageSmall from "@/assets/budget-room-small.webp";

const Accommodation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const accommodationOptions = [
    {
      title: "Hotel",
      image: hotelRoomImage,
      imageMedium: hotelRoomImageMedium,
      imageSmall: hotelRoomImageSmall,
      rates: [
        {
          type: "Fullboard (includes all meals):",
          rooms: [
            { name: "Single Room", price: "€190 per night" },
            { name: "Double Room", price: "€235 per night" },
            { name: "Triple Room", price: "€320 per night" },
          ],
        },
        {
          type: "Halfboard:",
          rooms: [
            { name: "Single Room", price: "€170 per night" },
            { name: "Double Room", price: "€195 per night" },
            { name: "Triple Room", price: "€250 per night" },
          ],
        },
      ],
      policy:
        "Tax: Rates include 18% VAT\nCancellation Policy: Reservations are non-refundable after 15th December. Any changes or cancellations must be made before this date.",
    },
    // {
    //   title: "Apartment",
    //   image: apartmentRoomImage,
    //   imageMedium: apartmentRoomImageMedium,
    //   imageSmall: apartmentRoomImageSmall,
    //   rates: [
    //     {
    //       type: "Fullboard (includes all meals):",
    //       rooms: [
    //         { name: "Shared room for 4 adults", price: "€95 per night" },
    //         { name: "Shared room for 6 adults", price: "€90 per night" },
    //       ],
    //     },
    //     {
    //       type: "Halfboard:",
    //       rooms: [
    //         { name: "Shared room for 4 adults", price: "€72 per night" },
    //         { name: "Shared room for 6 adults", price: "€67 per night" },
    //       ],
    //     },
    //   ],
    //   policy:
    //     "Tax: Rates include 18% VAT\nCancellation Policy: Reservations are non-refundable after 15th December. Any changes or cancellations must be made before this date.",
    // },
    {
      title: "Budget accommodation",
      image: budgetRoomImage,
      imageMedium: budgetRoomImageMedium,
      imageSmall: budgetRoomImageSmall,
      rates: [
        {
          type: "Full board (includes all meals):",
          rooms: [
            {
              name: "Rate per person (shared room)",
              price: "€90 per night",
            },
          ],
        },
        {
          type: "Halfboard:",
          rooms: [
            {
              name: "Rate per person (shared room)",
              price: "€70 per night",
            },
          ],
        },
      ],
      policy:
        "Tax: The rate includes 18% VAT\nCancellation Policy: Reservations are non-refundable after 15th December. Any changes or cancellations must be made before this date.",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? accommodationOptions.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === accommodationOptions.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="accommodation"
      className="py-16 px-4 bg-background scroll-mt-20"
    >
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
          Accommodation
        </h1>

        {/* Mobile: Card navigation */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {accommodationOptions.map((option, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2">
                  <div className="bg-card rounded-2xl shadow-md overflow-hidden flex flex-col">
                    <div className="overflow-hidden">
                      <img
                        srcSet={`${option.imageSmall} 800w, ${option.imageMedium} 1200w, ${option.image} 1600w`}
                        sizes="100vw"
                        src={option.image}
                        alt={`${option.title} accommodation`}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        {option.title}
                      </h2>

                      <div className="space-y-4 mb-4 flex-1">
                        {option.rates.map((rate, rateIdx) => (
                          <div key={rateIdx}>
                            <h3 className="font-semibold text-sm mb-2">
                              {rate.type}
                            </h3>
                            {rate.rooms.map((room, roomIdx) => (
                              <p key={roomIdx} className="mb-1 text-sm">
                                {room.name}:{" "}
                                <span className="font-semibold">
                                  {room.price}
                                </span>
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border mb-4">
                        <p className="text-xs text-muted-foreground whitespace-pre-line">
                          {option.policy}
                        </p>
                      </div>

                      <Button
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90"
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

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 z-10"
            aria-label="Previous accommodation"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 z-10"
            aria-label="Next accommodation"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {accommodationOptions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to accommodation ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {accommodationOptions.map((option, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  srcSet={`${option.imageSmall} 800w, ${option.imageMedium} 1200w, ${option.image} 1600w`}
                  sizes="(max-width: 1200px) 400px, 500px"
                  src={option.image}
                  alt={`${option.title} accommodation`}
                  className="w-full h-64 md:h-72 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {option.title}
                </h2>

                <div className="space-y-4 mb-4 flex-1">
                  {option.rates.map((rate, rateIdx) => (
                    <div key={rateIdx}>
                      <h3 className="font-semibold text-sm mb-2">
                        {rate.type}
                      </h3>
                      {rate.rooms.map((room, roomIdx) => (
                        <p key={roomIdx} className="mb-1 text-sm">
                          {room.name}:{" "}
                          <span className="font-semibold">{room.price}</span>
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border mb-4">
                  <p className="text-xs text-muted-foreground whitespace-pre-line">
                    {option.policy}
                  </p>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href="mailto:reservations@shahdag.az">
                    Book accommodation
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
