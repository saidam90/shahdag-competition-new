import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Gallery from "@/components/Gallery";
import Video from "@/components/Video";
import Agenda from "@/components/Agenda";
// import Prizes from "@/components/Prizes";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FAQ from "./FAQ";
import Accommodation from "./Accommodation";
import Gear from "./Gear";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Welcome />
      <Location />
      <Agenda />
      <Accommodation />
      <Gear />
      <Video />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
