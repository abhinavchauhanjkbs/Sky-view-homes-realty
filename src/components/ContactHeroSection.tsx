import contactHero from "@/assets/contact-hero.png";
import btnMessage from "@/assets/btn-message.png";

const ContactHeroSection = () => (
  <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-start pt-16 sm:pt-18 md:pt-20 pb-10">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${contactHero})` }}
    />
    <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.45)]" />
    <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

    <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px]">
      <h1
        className="text-primary-foreground font-semibold tracking-[0] leading-[1.2] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] max-w-[820px]"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        Get in Touch With Our Team
      </h1>
      <p
        className="mt-4 sm:mt-6 text-primary-foreground/75 max-w-[720px] text-[14px] sm:text-[15px] md:text-[16px] leading-[150%]"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        Have questions about auction properties or need assistance? Our team is here to help you with reliable
        information and support.
      </p>
      <a href="#contact-form" aria-label="Jump to contact form">
        <img
          src={btnMessage}
          alt="Send Us a Message"
          className="mt-6 sm:mt-8 h-10 sm:h-12 w-auto cursor-pointer hover:opacity-90 transition-opacity"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </a>
    </div>
  </section>
);

export default ContactHeroSection;
