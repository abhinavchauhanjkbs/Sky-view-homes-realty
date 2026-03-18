import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHeroSection from "@/components/ContactHeroSection";
import ContactFormSection from "@/components/ContactFormSection";
import ContactInfoSection from "@/components/ContactInfoSection";
import ContactMapSection from "@/components/ContactMapSection";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <ContactHeroSection />
    <ContactFormSection />
    <ContactInfoSection />
    <ContactMapSection />
    <Footer />
  </div>
);

export default Contact;
