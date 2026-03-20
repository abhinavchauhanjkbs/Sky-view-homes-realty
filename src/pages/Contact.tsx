import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHeroSection from "@/components/ContactHeroSection";
import ContactFormSection from "@/components/ContactFormSection";
import ContactInfoSection from "@/components/ContactInfoSection";
import ContactMapSection from "@/components/ContactMapSection";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 40; // align near the form box
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <ContactMapSection />
      <Footer />
    </div>
  );
};

export default Contact;
