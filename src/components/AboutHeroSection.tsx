import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.png";
import btnExploreProps from "@/assets/btn-explore-properties.png";

const AboutHeroSection = () => (
  <section className="relative min-h-[520px] flex items-center pb-24">
    {/* Background image */}
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutHero})` }} />
    {/* Overlay */}
    <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.45)]" />
    {/* Left shadow gradient */}
    <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

    <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px] py-12 sm:py-16 md:py-20">
      <h1
        className="text-primary-foreground font-bold tracking-[0] leading-[1.2] text-[52px] max-w-[889px] hero-heading"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        Trusted Platform for Bank
        <br />
        Auction Properties
      </h1>
      <p
        className="mt-4 sm:mt-6 text-primary-foreground/75 max-w-[760px] text-[14px] sm:text-[15px] md:text-[16px] leading-[150%] font-normal"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        We help investors discover verified bank auction properties with transparent details, secure processes, and
        valuable opportunities across major cities.
      </p>
      <Link to="/#live-auctions" replace aria-label="Jump to live auctions">
        <img
          src={btnExploreProps}
          alt="Explore Properties"
          className="mt-6 sm:mt-8 h-10 sm:h-12 w-auto cursor-pointer hover:opacity-90 transition-opacity"
        />
      </Link>
    </div>
  </section>
);

export default AboutHeroSection;
