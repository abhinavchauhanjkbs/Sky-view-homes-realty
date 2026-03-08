import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import btnViewLive from "@/assets/btn-view-live-auctions.png";

const HeroSection = () => (
  <section className="relative min-h-[500px] flex items-center pb-24">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.45)]" />
    {/* Left shadow gradient */}
    <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

    <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px] py-12 sm:py-16 md:py-20">
      <h1 className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[46px] font-bold text-primary-foreground max-w-[889px] leading-[1.15] tracking-tight">
        Find Verified Auction Properties at Unmatched Prices
      </h1>
      <p className="mt-4 sm:mt-6 text-primary-foreground/75 max-w-[760px] text-[14px] sm:text-[15px] md:text-[16px] leading-[150%] font-normal" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        Browse bank auctions, foreclosure deals, and distress properties with verified legal{" "}
        <span className="whitespace-nowrap">status, transparent</span> pricing, and expert guidance to
        secure high-value investments confidently.
      </p>
      <img src={btnViewLive} alt="View Live Auctions" className="mt-6 sm:mt-8 h-10 sm:h-12 cursor-pointer hover:opacity-90 transition-opacity" />
    </div>
  </section>
);

export default HeroSection;
