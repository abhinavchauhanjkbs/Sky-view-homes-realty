import Navbar from "@/components/Navbar";
import PropertyGallery from "@/components/PropertyGallery";
import PropertyInfo from "@/components/PropertyInfo";
import PropertyDetails from "@/components/PropertyDetails";
import InDetail from "@/components/InDetail";
import ContactForm from "@/components/ContactForm";
import LiveAuctions from "@/components/LiveAuctions";
import Footer from "@/components/Footer";

const BrowseAuctionListings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PropertyGallery />
      <PropertyInfo />
      <PropertyDetails />
      <InDetail />
      <ContactForm />
      <LiveAuctions title="Similar Auction Opportunities" />
      <Footer />
    </div>
  );
};

export default BrowseAuctionListings;
