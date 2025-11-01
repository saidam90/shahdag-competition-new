import { useState } from "react";
import { MapPin, Download, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import shahdagMap from "@/assets/shahdag-map.webp";
import { Button } from "@/components/ui/button";

const Location = () => {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

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
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
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

  return (
    <section id="location" className="">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 bg-icon-gold">
            <MapPin className="w-5 h-5 text-white bg-icon-gold" />
            <span className="text-sm font-semibold text-white">VENUE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary my-4">
            Shahdag Mountain Resort
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Experience world-class ski mountaineering at Azerbaijan's premier
            mountain destination
          </p>

          <div className="max-w-5xl mx-auto mt-8">
            {/* Zoom Controls */}
            <div className="flex justify-center gap-2 mb-4">
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
              className="relative overflow-hidden rounded-xl border-2 border-border bg-muted mx-auto"
              style={{
                height: "700px",
                maxWidth: "780px",
                cursor:
                  scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
            >
              <img
                src={shahdagMap}
                alt="Shahdag Mountain Resort Map"
                className="absolute top-1/2 left-1/2 select-none transition-transform duration-200"
                style={{
                  transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  maxWidth: "none",
                  height: "700px",
                  width: "auto",
                }}
                draggable={false}
              />
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              {scale > 1
                ? "Click and drag to pan • Scroll to zoom"
                : "Click zoom buttons or scroll to zoom in"}
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href={shahdagMap} download="shahdag-map.png">
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
