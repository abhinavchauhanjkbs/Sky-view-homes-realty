import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchFilter from "@/components/SearchFilter";
import LiveAuctions from "@/components/LiveAuctions";
import HowItWorks from "@/components/HowItWorks";
import WhyInvest from "@/components/WhyInvest";
import AuctionSchedule from "@/components/AuctionSchedule";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => (
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

export default Index;
