import { useState } from "react";
import { Star } from "lucide-react";
import avatarImg from "@/assets/avatar-placeholder.png";

const testimonials = [
  {
    name: "Rajesh Mehta",
    location: "Gurgaon",
    text: "Purchased my first auction apartment smoothly with full legal guidance. Transparent process, verified documents, and exceptional support helped me secure property confidently below market value.",
  },
  {
    name: "Neha Arora",
    location: "Delhi",
    text: "Excellent platform for serious investors. Clear auction timelines, accurate reserve pricing, and responsive team ensured hassle-free participation and successful commercial property acquisition without complications.",
  },
  {
    name: "Amit Verma",
    location: "Noida",
    text: "Verified listings saved research time and reduced risk significantly. Won residential plot confidently with proper documentation, fair bidding environment, and complete post-auction assistance from experts.",
  },
];

const TestimonialCard = ({ t, hoveredIndex, i, setHoveredIndex }: { t: typeof testimonials[0]; hoveredIndex: number | null; i: number; setHoveredIndex: (i: number | null) => void }) => (
  <div
    onMouseEnter={() => setHoveredIndex(i)}
    onMouseLeave={() => setHoveredIndex(null)}
    className={`rounded-xl border bg-[#FAFAFA] p-[18px] flex flex-col justify-between transition-all duration-300 cursor-pointer min-w-[300px] w-[300px] sm:min-w-[340px] sm:w-[340px] md:min-w-[364px] md:w-[364px] md:h-[308px] md:rounded-[12px] xl:min-w-[364px] xl:w-[364px] shrink-0 ${
      hoveredIndex === i ? "border-primary" : "border-border"
    }`}
  >
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, s) => (
        <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">{t.text}</p>
    <div className="flex items-center gap-3">
      <img src={avatarImg} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" decoding="async" />
      <div>
        <p className="font-semibold text-foreground text-[15px]">{t.name}</p>
        <p className="text-muted-foreground text-sm">{t.location}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      {/* remove horizontal padding so cards span full viewport */}
      <div className="max-w-7xl mx-auto px-0">
        <div className="w-[100vw] relative left-1/2 -translate-x-1/2">
          <h2
            className="text-[32px] md:text-[48px] leading-[120%] font-semibold text-[#000000] mb-3 text-center max-w-[866px] md:w-[866px] md:h-[58px] mx-auto"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Trusted by Smart Auction Investors
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14 text-[15px]">
            Real success stories from buyers who secured verified auction properties with confidence and profitable investment outcomes.
          </p>
        </div>

        <div className="relative flex items-center justify-center gap-4 sm:gap-6">
          {/* Auto marquee (all devices, keep desktop layout width) */}
          {/*
            With no padding on the outer container the marquee already fills
            the viewport; negative margins are no longer required.
          */}
          <div className="overflow-hidden w-[100vw] relative left-1/2 -translate-x-1/2">
            <div className="flex justify-start gap-4 md:gap-6 xl:gap-8 animate-marquee">
              {[...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard key={`marquee-${i}`} t={t} hoveredIndex={hoveredIndex} i={i % testimonials.length} setHoveredIndex={setHoveredIndex} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
