import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Auction Properties", href: "/auction-properties" },
  { label: "How It Works", href: null },
  { label: "Banks", href: null },
  { label: "Services", href: null },
  { label: "Contact", href: "/contact" },
];
const categories = ["Residential Auctions", "Commercial Auctions", "Industrial Properties", "Land & Plots", "Luxury Properties", "Foreclosure Deals"];
const resources = ["Upcoming Auctions", "Download Auction List", "EMD Process Guide", "Legal Due Diligence", "Investment Tips", "FAQs"];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => (
  <footer className="bg-black text-white">
    <div className="max-w-[1080px] mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-[1.2fr_0.8fr_1fr_1fr] gap-8 sm:gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 sm:order-1 md:order-none">
          <img src={logoWhite} alt="Skyview Homes Reality" className="h-24 mb-4 opacity-70" />
          <p className="text-white/60 text-sm leading-relaxed">
            We specialize in verified bank auction and distress properties, offering legal clarity, transparent pricing, and high-return real estate investment.
          </p>
        </div>

        {/* Quick Links */}
        <div className="sm:order-2 md:order-none">
          <h4 className="font-semibold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={(event) => event.preventDefault()}
                    className="text-white/60 text-sm transition-colors cursor-default"
                  >
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Auction Categories */}
        <div className="text-left sm:order-3 md:order-none">
          <h4 className="font-semibold text-lg mb-5">Auction Categories</h4>
          <ul className="space-y-3 text-left">
            {categories.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onClick={(event) => event.preventDefault()}
                  className="text-white/60 hover:text-primary text-sm transition-colors cursor-default text-left"
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Investor Resources */}
        <div className="text-left sm:col-span-2 md:col-span-1 sm:order-4 md:order-none">
          <h4 className="font-semibold text-lg mb-5">Investor Resources</h4>
          <ul className="space-y-3 text-left">
            {resources.map((r) => (
              <li key={r}>
                <button
                  type="button"
                  onClick={(event) => event.preventDefault()}
                  className="text-white/60 hover:text-primary text-sm transition-colors cursor-default text-left"
                >
                  {r}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/10">
      <div className="mx-auto px-6 py-5 grid w-full grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
        <p className="text-white/50 text-sm text-center md:text-left leading-tight lg:whitespace-nowrap">
          <span className="block lg:inline">© 2026 Skyview Homes Reality.</span>
          <span className="block lg:inline"> All rights reserved.</span>
        </p>
        <p className="text-white/50 text-sm text-center md:justify-self-center md:-translate-x-6">
          Developed by
          <span className="md:block lg:inline text-white font-semibold"> Big Brand Bucket</span>
        </p>
        <div className="flex gap-4 md:gap-1 lg:gap-4 text-white/50 text-sm md:justify-self-end md:justify-end">
          <button
            type="button"
            onClick={(event) => event.preventDefault()}
            className="hover:text-primary transition-colors cursor-default"
          >
            Privacy Policy
          </button>
          <span className="mx-2 md:mx-0.5 lg:mx-2">|</span>
          <button
            type="button"
            onClick={(event) => event.preventDefault()}
            className="hover:text-primary transition-colors cursor-default"
          >
            Terms & Conditions
          </button>
          <span className="mx-2 md:mx-0.5 lg:mx-2">|</span>
          <button
            type="button"
            onClick={(event) => event.preventDefault()}
            className="hover:text-primary transition-colors cursor-default"
          >
            Disclaimer
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;














