import { MapPin, Mail, Phone, Mountain, Globe } from "lucide-react";
import footerBg from "@/assets/footer.webp";

const Footer = () => {
  return (
    <footer className="relative bg-primary dark:bg-[hsl(0,0%,16%)] text-primary-foreground dark:text-white py-12 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/90 dark:bg-[hsl(0,0%,16%)]/95" />
      <div className="container mx-auto px-4 md:px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8 pl-6 md:pl-0">
          <div>
            <h3 className="text-xl font-bold mb-4">
              ISMF European Championship <br />
              World Cup Shahdag 2026
            </h3>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80 dark:text-white">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#agenda"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Agenda
                </a>
              </li>
              <li>
                <a
                  href="#race-maps"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Race Maps
                </a>
              </li>
              <li>
                <a
                  href="#accommodation"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Accommodation
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#gear"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Gear
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80 dark:text-white">
              <li className="flex items-center gap-2">
                <Mountain className="w-4 h-4" />
                Shahdag Mountain Resort
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Qusar District, Azerbaijan
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@shahdagresort.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  reservations@shahdag.az
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+994123101110"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +994 (0) 12 310 11 10
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <a
                  href="https://www.shahdag.az"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  www.shahdag.az
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 dark:border-white/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60 dark:text-white">
            © 2025 Shahdag Mountain Resort. All rights reserved. | ISMF European
            Championship World Cup Shahdag. March 3-8, 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
