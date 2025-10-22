import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-bold text-primary">
            Shahdag World Cup 2025
          </h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#welcome" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Welcome
          </a>
          <a href="#agenda" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Agenda
          </a>
          <a href="#prizes" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Prizes
          </a>
          <a href="#location" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Location
          </a>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
