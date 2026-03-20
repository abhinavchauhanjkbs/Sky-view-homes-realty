import Navbar from "@/components/Navbar";
import AuctionHeroSection from "@/components/AuctionHeroSection";
import AuctionListingsSection from "@/components/AuctionListingsSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AuctionProperties = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        const targetY = el.getBoundingClientRect().top + window.scrollY + 120; // push slightly further down
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AuctionHeroSection />
      <AuctionListingsSection />
      <Footer />
    </div>
  );
};

export default AuctionProperties;
