import { useState } from "react";
import { MapPin, Download, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import shahdagMap from "@/assets/shahdag-map.webp";
import { Button } from "@/components/ui/button";

const Location = () => {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [initialPinchDistance, setInitialPinchDistance] = useState<
    number | null
  >(null);
  const [initialPinchScale, setInitialPinchScale] = useState(1);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 1));
    if (scale <= 1.25) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const getPinchDistance = (touches: React.TouchList) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    } else if (e.touches.length === 2) {
      setIsDragging(false);
      const distance = getPinchDistance(e.touches);
      setInitialPinchDistance(distance);
      setInitialPinchScale(scale);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.touches.length === 1 && isDragging) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    } else if (e.touches.length === 2 && initialPinchDistance) {
      const distance = getPinchDistance(e.touches);
      const scaleChange = distance / initialPinchDistance;
      const newScale = Math.max(
        1,
        Math.min(3, initialPinchScale * scaleChange)
      );
      setScale(newScale);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setInitialPinchDistance(null);
  };

  return (
    <section id="location" className="py-8 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-3 bg-icon-gold">
            <MapPin className="w-5 h-5 text-white bg-icon-gold" />
            <span className="text-sm font-semibold text-white">VENUE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-2 md:my-4">
            Shahdag Mountain Resort
          </h2>
          <p className="text-base md:text-lg text-foreground max-w-2xl mx-auto mb-4 md:mb-8">
            Experience world-class ski mountaineering at Azerbaijan's premier
            mountain destination
          </p>

          <div className="max-w-5xl mx-auto">
            {/* Zoom Controls */}
            <div className="flex justify-center gap-2 mb-2 md:mb-4">
              <Button
                onClick={handleZoomIn}
                variant="outline"
                size="icon"
                disabled={scale >= 3}
                className="bg-background"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleZoomOut}
                variant="outline"
                size="icon"
                disabled={scale <= 1}
                className="bg-background"
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                size="icon"
                disabled={scale === 1}
                className="bg-background"
              >
                <Maximize2 className="w-4 h-4" />
              </Button>
              <span className="flex items-center px-4 py-2 bg-background border rounded-md text-sm font-medium">
                {Math.round(scale * 100)}%
              </span>
            </div>

            {/* Interactive Map Container */}
            <div
              className="relative overflow-hidden rounded-xl border-2 border-border bg-white mx-auto h-[300px] md:h-[550px] touch-none select-none"
              style={{
                maxWidth: "780px",
                cursor: isDragging ? "grabbing" : "grab",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={shahdagMap}
                alt="Shahdag Mountain Resort Map"
                className="absolute top-1/2 left-1/2 select-none"
                style={{
                  transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  maxWidth: "none",
                  width: "100%",
                  height: "auto",
                  transition: isDragging ? "none" : "transform 0.1s ease-out",
                }}
                draggable={false}
              />
            </div>

            <p className="text-sm text-muted-foreground mt-2 md:mt-4">
              Drag to pan • Pinch to zoom
            </p>
          </div>

          <div className="flex justify-center mt-3 md:mt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href={shahdagMap} download="shahdag-map.webp">
                <Download className="w-5 h-5 mr-2" />
                Download Map
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
