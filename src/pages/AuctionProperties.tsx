import Navbar from "@/components/Navbar";
import AuctionHeroSection from "@/components/AuctionHeroSection";
import AuctionListingsSection from "@/components/AuctionListingsSection";
import Footer from "@/components/Footer";

const AuctionProperties = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <AuctionHeroSection />
    <AuctionListingsSection />
    <Footer />
  </div>
);

export default AuctionProperties;
