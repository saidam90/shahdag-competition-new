import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Agenda from "@/components/Agenda";
import Prizes from "@/components/Prizes";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <Hero />
      <Welcome />
      <Agenda />
      <Prizes />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
