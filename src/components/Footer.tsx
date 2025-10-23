const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Shahdag World Cup 2025
            </h3>
            <p className="text-sm text-primary-foreground/80">
              International Ski-Mountaineering Federation (ISMF) World Cup Competition
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#welcome" className="hover:text-primary-foreground transition-colors">Welcome</a></li>
              <li><a href="#agenda" className="hover:text-primary-foreground transition-colors">Agenda</a></li>
              <li><a href="#prizes" className="hover:text-primary-foreground transition-colors">Prizes</a></li>
              <li><a href="#location" className="hover:text-primary-foreground transition-colors">Location</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Shahdag Mountain Resort</li>
              <li>Qusar District, Azerbaijan</li>
              <li>info@shahdagresort.com</li>
              <li>+994 (0) 12 404 88 88</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Shahdag World Cup. All rights reserved. | January 10-13, 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
