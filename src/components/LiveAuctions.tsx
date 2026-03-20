import { ArrowUpRight, MapPin } from "lucide-react";
import propertyImg from "@/assets/property-card.png";

const properties = [
  { id: 1, location: "Gurgaon, Delhi NCR", bank: "HDFC", title: "3BHK Luxury Apartment", desc: "Fully furnished apartment in prime location with clear title, bank approval, and strong resale potential.", price: "₹35,00,000" },
  { id: 2, location: "Gurgaon, Delhi NCR", bank: "HDFC", title: "3BHK Luxury Apartment", desc: "Fully furnished apartment in prime location with clear title, bank approval, and strong resale potential.", price: "₹35,00,000" },
  { id: 3, location: "Gurgaon, Delhi NCR", bank: "HDFC", title: "3BHK Luxury Apartment", desc: "Fully furnished apartment in prime location with clear title, bank approval, and strong resale potential.", price: "₹35,00,000" },
];

const PropertyCard = ({ p }: { p: typeof properties[0] }) => (
  <div className="live-auction-card ipad-property-card rounded-2xl bg-background border border-border shadow-sm overflow-hidden min-w-[260px] w-[260px] sm:min-w-[340px] sm:w-[340px] md:min-w-[364px] md:w-[364px] md:h-[523px] md:rounded-[16px] xl:min-w-[364px] xl:w-[364px] shrink-0">
    <div className="relative">
      <img
        src={propertyImg}
        alt={p.title}
        className="w-full h-[220px] sm:h-[260px] object-cover"
        loading="lazy"
        decoding="async"
      />
      <span className="absolute top-4 left-0 bg-[#01010166] text-primary-foreground pl-4 pr-4 py-1.5 rounded-r-full text-sm font-medium">
        Legal Verified
      </span>
    </div>
    <div className="p-5">
      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
        <MapPin className="w-4 h-4 text-primary" />
        <span className="whitespace-nowrap">{p.location}</span>
        <span className="mx-1">|</span>
        <span>{p.bank}</span>
      </div>
      <h3 className="text-lg font-bold text-foreground mt-2">{p.title}</h3>
      <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{p.desc}</p>
      <div className="border-t border-border mt-4 pt-4 flex items-center justify-between">
        <div>
          <span className="text-muted-foreground text-xs">Reserved Price</span>
          <p className="text-[#57B6E0] font-bold text-xl">{p.price}</p>
        </div>
        <button className="flex items-center gap-1 text-black font-semibold text-sm hover:underline">
          View Details <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

const LiveAuctions = ({ title = "Live Auction Opportunities" }: { title?: string }) => (
  <section id="live-auctions" className="pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 bg-background">
    {/* remove horizontal padding to align cards to viewport edges */}
    <div className="max-w-[1400px] mx-auto px-0 tablet-live-auctions-container">
        <h2
          className="text-[32px] md:text-[48px] leading-[120%] font-semibold text-[#000000] text-center max-w-[754px] md:w-[754px] md:h-[58px] mx-auto"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          {title}
        </h2>
        <p className="text-muted-foreground text-center mt-3 sm:mt-4 max-w-[700px] mx-auto text-[14px] sm:text-[15px] leading-relaxed">
          Explore verified bank auction properties with reserve prices, prime locations, and upcoming bidding schedules across major cities.
        </p>

        <div className="relative mt-8 sm:mt-12">
          {/* Auto marquee (all devices, keep desktop layout width) */}
          {/* marquee spans full viewport; no parent padding means no extra margins required */}
          <div className="overflow-hidden live-auctions-marquee w-[100vw] relative left-1/2 -translate-x-1/2">
            <div className="flex justify-start gap-4 xl:gap-6 animate-marquee ipad-marquee">
              {[...properties, ...properties].map((p, i) => (
                <PropertyCard key={`marquee-${i}`} p={p} />
              ))}
            </div>
          </div>

        </div>
    </div>
  </section>
);

export default LiveAuctions;
