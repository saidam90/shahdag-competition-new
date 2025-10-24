import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

// Import all gallery images
import img1 from "@/assets/gallery/DSC04750.jpg";
import img2 from "@/assets/gallery/DSC04972.jpg";
import img3 from "@/assets/gallery/DSC05318.jpg";
import img4 from "@/assets/gallery/DSC05357.jpg";
import img5 from "@/assets/gallery/DSC05550.jpg";
import img6 from "@/assets/gallery/DSC06576.jpg";
import img7 from "@/assets/gallery/DSC06618.jpg";
import img8 from "@/assets/gallery/DSC06630.jpg";
import img9 from "@/assets/gallery/DSC06643.jpg";
import img10 from "@/assets/gallery/DSC06713.jpg";
import img11 from "@/assets/gallery/DSC06758.jpg";
import img12 from "@/assets/gallery/WhatsApp Image 2025-05-08 at 12.09.32 (2).jpeg";
import img13 from "@/assets/gallery/WhatsApp Image 2025-05-08 at 12.09.34.jpeg";

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false); // Stop auto-play when user clicks thumbnail
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Gallery
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Main Image Display */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
            <img
              src={galleryImages[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />

            {/* Navigation Buttons */}
            <Button
              onClick={goToPrevious}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-[hsl(0,0%,20%)]/80 hover:bg-white dark:hover:bg-[hsl(0,0%,25%)] rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              onClick={goToNext}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-[hsl(0,0%,20%)]/80 hover:bg-white dark:hover:bg-[hsl(0,0%,25%)] rounded-full w-12 h-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-icon-gold scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
