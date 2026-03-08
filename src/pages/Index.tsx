import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchFilter from "@/components/SearchFilter";
import LiveAuctions from "@/components/LiveAuctions";
import HowItWorks from "@/components/HowItWorks";
import WhyInvest from "@/components/WhyInvest";
import AuctionSchedule from "@/components/AuctionSchedule";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Navbar />
    <HeroSection />
    <SearchFilter />
    <LiveAuctions />
    <HowItWorks />
    <WhyInvest />
    <AuctionSchedule />
    <Testimonials />
    <CTABanner />
    <Footer />
  </div>
);

export default Index;
