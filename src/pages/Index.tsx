import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchFilter from "@/components/SearchFilter";
import LiveAuctions from "@/components/LiveAuctions";
import HowItWorks from "@/components/HowItWorks";
import WhyInvest from "@/components/WhyInvest";
import AuctionSchedule from "@/components/AuctionSchedule";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SearchFilter />
      <LiveAuctions />
      <HowItWorks />
      <WhyInvest />
      <AuctionSchedule />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
