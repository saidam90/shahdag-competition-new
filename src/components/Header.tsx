import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#agenda", label: "Agenda" },
    // { href: "/#circuits", label: "Circuits" },
    { href: "/#accommodation", label: "Accommodation" },
    { href: "/#gear", label: "Gear" },
    { href: "/#faq", label: "FAQ" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("/#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-end gap-4">
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="hidden md:flex"
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setOpen(false);
                  }}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="ghost"
                onClick={toggleTheme}
                className="mt-4 justify-start"
                aria-label="Toggle dark mode"
              >
                {theme === "light" ? (
                  <>
                    <Moon className="h-5 w-5 mr-2" />
                    Dark Mode
                  </>
                ) : (
                  <>
                    <Sun className="h-5 w-5 mr-2" />
                    Light Mode
                  </>
                )}
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
