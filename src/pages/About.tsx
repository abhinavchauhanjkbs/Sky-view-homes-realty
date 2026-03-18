import Navbar from "@/components/Navbar";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutContent from "@/components/AboutContent";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <AboutHeroSection />
    <AboutContent />
    <Footer />
  </div>
);

export default About;
