import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/about img.png";
import exploreBtn from "@/assets/explore button.png";
import avatarRow from "@/assets/avater.png";
import investors1 from "@/assets/investors-about1.jpg";
import investors2 from "@/assets/investors-about2.png";
import investors3 from "@/assets/investors-about3.png";
import missionImg from "@/assets/mission.png";
import visionImg from "@/assets/vision.avif";
import aboutWhy from "@/assets/about-why.png";
import iconTrusted from "@/assets/Traced Image.png";
import iconTransparent from "@/assets/Traced Image (1).png";
import iconBetter from "@/assets/Traced Image (2).png";
import iconDiscovery from "@/assets/Traced Image (2).png";
import featListings from "@/assets/Vector (1).png";
import featDocs from "@/assets/Vector (2).png";
import featReturns from "@/assets/Vector (3).png";

const stats = [
  { value: 500, label: "Auction Properties" },
  { value: 20, label: "Partner Banks" },
  { value: 15, label: "Cities Covered" },
  { value: 5000, label: "Investors" },
];

const AboutContent = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasAnimatedRef = useRef(false);
  const statsSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const target = statsSectionRef.current;
    if (!target) return;

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (prefersReducedMotion) {
      setCounts(stats.map((s) => s.value));
      hasAnimatedRef.current = true;
      return;
    }

    let start: number | null = null;
    const duration = 1200;
    let frameId = 0;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCounts(stats.map((stat) => Math.floor(progress * stat.value)));
      if (progress < 1) frameId = window.requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          frameId = window.requestAnimationFrame(animate);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const formatCount = (n: number) => new Intl.NumberFormat("en-IN").format(n);

  return (
  <>
    <section className="bg-white text-foreground py-14 sm:py-16">
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px]">
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden border border-white/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
              <img
                src={aboutImg}
                alt="About Sky View Homes"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="absolute top-20 right-[-6px] transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute -left-8 -top-6 w-32 h-32 rounded-3xl bg-black/10 blur-2xl -z-10" />
              <div className="bg-white text-foreground rounded-2xl px-5 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.25)] transition-shadow duration-300 hover:shadow-[0_22px_60px_rgba(15,23,42,0.3)]">
                <p className="text-xs font-medium text-muted-foreground">Monthly Auctions</p>
                <p className="text-xl font-semibold text-foreground">5000+</p>
              </div>
            </div>

            <div className="absolute -bottom-7 left-6 sm:left-10 bg-white text-foreground rounded-2xl px-4 py-3 shadow-lg flex flex-col items-start gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.3)]">
              <img
                src={avatarRow}
                alt="Investor reviews"
                className="h-8 w-auto"
                loading="lazy"
                decoding="async"
              />
              <span className="text-sm font-semibold pl-1">8000+ reviews</span>
            </div>
          </div>

          <div className="relative">
            <h2 className="text-[26px] sm:text-[30px] md:text-[34px] font-semibold">Who We Are</h2>
            <p className="mt-5 text-foreground/70 text-[14px] sm:text-[15px] md:text-[16px] leading-[165%]">
              We are a trusted platform dedicated to helping investors and homebuyers discover verified bank auction
              properties across multiple cities. Our goal is to simplify the auction process by providing transparent
              property details, reliable information, and easy access to ongoing auctions so users can confidently
              explore valuable real estate investment opportunities.
            </p>
            <p className="mt-4 text-foreground/70 text-[14px] sm:text-[15px] md:text-[16px] leading-[165%]">
              Our platform connects investors with genuine bank auction listings, offering clear information, legal
              transparency, and structured bidding opportunities. We focus on building trust and helping users identify
              high-value properties at competitive reserve prices.
            </p>
            <a href="/contact#contact-form" aria-label="Go to contact form">
            <Link to="/auction-properties#available-auctions" aria-label="Go to available auction properties">
              <img
                src={exploreBtn}
                alt="Explore Auction Properties"
                className="mt-6 h-11 sm:h-12 w-auto cursor-pointer"
                loading="lazy"
                decoding="async"
              />
            </Link>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section
      ref={(el) => {
        statsSectionRef.current = el;
      }}
      className="bg-primary text-primary-foreground py-10 sm:py-12"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center md:text-left ${index !== 0 ? "md:border-l md:border-white/30 md:pl-10" : ""}`}
            >
              <p className="text-3xl sm:text-4xl font-semibold tabular-nums">
                {formatCount(counts[index] ?? 0)}+
              </p>
              <p className="text-sm sm:text-base text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white text-foreground py-14 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px]">
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold">What We Offer</h2>
          <p className="mt-3 text-foreground/70 text-sm sm:text-base max-w-[820px] mx-auto">
            We provide verified auction property listings, transparent information, and valuable tools that help
            investors discover and secure profitable real estate opportunities.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3 text-center">
          {[
            {
              icon: featListings,
              title: "Verified Auction Listings",
              desc: "Explore genuine bank auction properties from trusted institutions across multiple cities with complete transparency.",
            },
            {
              icon: featDocs,
              title: "Transparent Property Details",
              desc: "Access clear information including reserve price, property specifications, legal documents, and auction schedules.",
            },
            {
              icon: featReturns,
              title: "Investment Opportunities",
              desc: "Discover valuable real estate deals with competitive reserve prices and strong potential investment returns.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-4 rounded-2xl p-6 bg-white"
            >
              <img src={item.icon} alt="" className="w-14 h-14" loading="lazy" decoding="async" />
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-foreground/70 leading-[160%]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white text-foreground py-14 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
          <div>
            <h2 className="text-[26px] sm:text-[30px] md:text-[34px] font-semibold">
              Driving Our Purpose
              <br />
              and Future Goals
            </h2>
          </div>
          <p className="text-foreground/70 text-sm sm:text-base leading-[165%]">
            Our mission and vision guide our commitment to making bank property auctions transparent, accessible, and
            valuable for investors seeking reliable opportunities.
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="relative rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
            <img src={missionImg} alt="Our mission" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute left-6 right-6 bottom-6 bg-white text-foreground rounded-2xl p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.25)]">
              <h3 className="text-lg sm:text-xl font-semibold">Our Mission</h3>
              <p className="mt-2 text-sm sm:text-[15px] text-muted-foreground leading-[155%]">
                To simplify property auctions by providing verified listings, transparent information, and secure
                opportunities for investors and homebuyers.
              </p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
            <img src={visionImg} alt="Our vision" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute left-6 right-6 bottom-6 bg-white text-foreground rounded-2xl p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.25)]">
              <h3 className="text-lg sm:text-xl font-semibold">Our Vision</h3>
              <p className="mt-2 text-sm sm:text-[15px] text-muted-foreground leading-[155%]">
                To become a trusted platform helping investors discover valuable auction properties and build strong
                real estate investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-primary text-primary-foreground py-14 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px]">
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold">Why Choose Us</h2>
          <p className="mt-3 text-white/90 text-sm sm:text-base max-w-[820px] mx-auto">
            We are committed to providing reliable auction property listings with transparent information, helping
            investors make confident and profitable real estate decisions.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center">
          <div className="space-y-6">
            {[
              {
                icon: iconTrusted,
                title: "Trusted Property Listings",
                desc: "All auction properties are carefully verified to ensure reliable information and genuine investment opportunities.",
              },
              {
                icon: iconTransparent,
                title: "Transparent Auction Process",
                desc: "We provide clear property details, legal documents, and auction schedules for better decision making.",
              },
              {
                icon: iconBetter,
                title: "Better Investment Opportunities",
                desc: "Discover valuable real estate properties with competitive reserve prices and strong market potential.",
              },
              {
                icon: iconDiscovery,
                title: "Easy Property Discovery",
                desc: "Advanced search filters help investors quickly find suitable auction properties based on location and budget.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <img src={item.icon} alt="" className="w-10 h-10 mt-1 flex-shrink-0" loading="lazy" decoding="async" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm sm:text-[15px] text-white/90 leading-[160%]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.35)]">
            <img src={aboutWhy} alt="Why choose us" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white text-foreground py-14 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px]">
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold">How It Helps Investors</h2>
          <p className="mt-3 text-foreground/70 text-sm sm:text-base max-w-[820px] mx-auto">
            Our platform helps investors discover verified auction properties, compare prices, and make smarter real
            estate investment decisions with confidence.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
            <img src={investors1} alt="Market growth analytics" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-white text-foreground p-6 sm:p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.18)]">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary to-primary/85" />
            <h3 className="text-lg sm:text-xl font-semibold relative z-10 transition-colors duration-300 group-hover:text-white">Verified Property Information</h3>
            <p className="mt-3 text-sm sm:text-[15px] text-muted-foreground leading-[165%] relative z-10 transition-colors duration-300 group-hover:text-white">
              Our platform provides complete property details including legal documents, reserve price, and auction
              schedules, helping investors carefully evaluate each opportunity and make confident decisions before
              participating in property auctions.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
            <img src={investors3} alt="City investment insights" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-white text-foreground p-6 sm:p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.18)]">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary to-primary/85" />
            <h3 className="text-lg sm:text-xl font-semibold relative z-10 transition-colors duration-300 group-hover:text-white">Better Investment Opportunities</h3>
            <p className="mt-3 text-sm sm:text-[15px] text-muted-foreground leading-[165%] relative z-10 transition-colors duration-300 group-hover:text-white">
              Investors can explore auction properties offered at attractive reserve prices, creating opportunities to
              purchase valuable real estate assets below market value and maximize long-term returns through strategic
              property investments.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
            <img src={investors2} alt="Property legal review" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-white text-foreground p-6 sm:p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.18)]">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary to-primary/85" />
            <h3 className="text-lg sm:text-xl font-semibold relative z-10 transition-colors duration-300 group-hover:text-white">Smarter Investment Decisions</h3>
            <p className="mt-3 text-sm sm:text-[15px] text-muted-foreground leading-[165%] relative z-10 transition-colors duration-300 group-hover:text-white">
              By comparing reserve prices with market values and reviewing property details, investors can identify
              profitable opportunities, reduce risks, and make well-informed real estate investment decisions with
              greater confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

};

export default AboutContent;
