import Header from "@/components/Header";
import Footer from "@/components/Footer";
import circuitSprintImage from "@/assets/circuit-sprint.png";

const Circuits = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
              Circuit 1: Sprint Race
            </h1>
            
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={circuitSprintImage} 
                alt="Sprint Race Circuit Map and Profile" 
                className="w-full"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Circuits;
