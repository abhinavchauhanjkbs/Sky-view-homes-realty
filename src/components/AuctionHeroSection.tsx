import auctionHero from "@/assets/auction-hero.png";
import btnBrowseListings from "@/assets/btn-browse-auction-listings.png";
import { Link } from "react-router-dom";

const AuctionHeroSection = () => (
  <section className="relative min-h-[520px] flex items-center pb-24">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${auctionHero})` }} />
    <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.55)]" />
    <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

    <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px] py-12 sm:py-16 md:py-20">
      <h1 className="text-[32px] sm:text-[38px] md:text-[46px] lg:text-[52px] font-bold text-primary-foreground max-w-[889px] leading-[1.15] tracking-tight hero-heading">
        Explore Verified Bank Auction
        <br />
        Properties
      </h1>
      <p
        className="mt-4 sm:mt-6 text-primary-foreground/75 max-w-[760px] text-[14px] sm:text-[15px] md:text-[16px] leading-[150%] font-normal"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        Browse a wide range of verified bank auction properties across multiple cities and discover valuable real estate
        investment opportunities at competitive reserve prices.
      </p>
      <Link to="/browse-auction-listings">
        <img
          src={btnBrowseListings}
          alt="Browse Auction Listings"
          className="mt-6 sm:mt-8 h-10 sm:h-12 w-auto cursor-pointer hover:opacity-90 transition-opacity"
        />
      </Link>
    </div>
  </section>
);

export default AuctionHeroSection;
