import Header from "@/components/Header";
import Footer from "@/components/Footer";
import transportationImage from "@/assets/transportation.png";

const Transportation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
              Transportation
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={transportationImage} 
                  alt="Winter transportation with snow tires" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-lg">
                  For your convenience, <span className="font-semibold">a shuttle bus between Baku and Shahdag is available at a special rate.</span>
                </p>
                <p className="text-lg">
                  To reserve a seat, please contact us in advance at{" "}
                  <a 
                    href="mailto:info@wintersports.az" 
                    className="text-primary hover:underline font-medium"
                  >
                    info@wintersports.az
                  </a>
                  .
                </p>
                <p className="text-lg">
                  Enjoy a comfortable journey, allowing you to focus on the upcoming adventure. The schedule will be shared a week prior to the race.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Transportation;
