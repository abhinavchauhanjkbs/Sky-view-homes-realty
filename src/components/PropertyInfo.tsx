import { useState } from "react";
import iconRooms from "@/assets/icon-rooms.png";
import iconBedrooms from "@/assets/icon-bedrooms.png";
import iconBathrooms from "@/assets/icon-bathrooms.png";
import iconArea from "@/assets/icon-area.png";

const PropertyInfo = () => {
  const [expanded, setExpanded] = useState(false);

  const description =
    "Welcome to South Delhi - and welcome to a house that combines history, character, and an impressive amount of space. This detached single-family home, built in 1938, has been expanded several times over the decades and now offers approximately 251sq.ft of living space on a 1,850 m^2 plot";

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-10">
      {/* Title */}
      <h1
        className="text-[32px] md:text-[48px] leading-[120%] font-semibold text-[#010101] mb-6 max-w-[834px] md:w-[834px] md:h-[58px]"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        Elegantes Apartment - New Delhi
      </h1>

      {/* Stats row */}
      <div className="flex flex-wrap items-center gap-8 mb-10">
        <div className="flex items-center gap-2">
          <img src={iconRooms} alt="Rooms" className="w-5 h-5 object-contain" loading="lazy" decoding="async" />
          <span className="text-base font-semibold text-foreground">5 Rooms</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={iconBedrooms} alt="Bedrooms" className="w-5 h-5 object-contain" loading="lazy" decoding="async" />
          <span className="text-base font-semibold text-foreground">3 Bedrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={iconBathrooms} alt="Bathrooms" className="w-5 h-5 object-contain" loading="lazy" decoding="async" />
          <span className="text-base font-semibold text-foreground">2 Bathrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={iconArea} alt="Living Area" className="w-5 h-5 object-contain" loading="lazy" decoding="async" />
          <span className="text-base font-semibold text-foreground">~251sq.ft Living Area</span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-10">
        <h2
          className="text-[26px] md:text-[36px] leading-[150%] font-bold text-[#010101] mb-4 max-w-[984px] md:w-[984px] md:h-[54px]"
          style={{ fontFamily: "Urbanist, sans-serif" }}
        >
          Description
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base">
          {description}
          {!expanded && (
            <>
              {"  "}
              <button
                onClick={() => setExpanded(true)}
                className="text-[#57B6E0] font-medium underline"
              >
                Read More
              </button>
            </>
          )}
        </p>
        {expanded && (
          <p className="text-muted-foreground leading-relaxed text-base mt-3">
            The property features a beautifully landscaped garden, a private swimming pool, and a spacious terrace perfect for entertaining. The interior boasts high ceilings, hardwood floors throughout, and a modern kitchen that seamlessly blends with the home's historic charm.{" "}
            <button
              onClick={() => setExpanded(false)}
              className="text-[#57B6E0] font-medium underline"
            >
              Read Less
            </button>
          </p>
        )}
      </div>

      {/* Auction Details Table */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {/* Row 1 */}
        <div className="py-4 border-b border-border md:border-r md:pr-8">
          <span className="text-sm text-muted-foreground block">Bank Name</span>
          <span className="text-base font-semibold text-foreground">State Bank OF India</span>
        </div>
        <div className="py-4 border-b border-border md:border-r md:px-8">
          <span className="text-sm text-muted-foreground block">EMD Amount</span>
          <span className="text-base font-semibold text-foreground">INR 3,45,870</span>
        </div>
        <div className="py-4 border-b border-border md:pl-8">
          <span className="text-sm text-muted-foreground block">Reserve Price</span>
          <span className="text-base font-semibold text-foreground">INR 34,58,700</span>
        </div>

        {/* Row 2 */}
        <div className="py-4 border-b-0 md:border-r md:pr-8">
          <span className="text-sm text-muted-foreground block">Auction Start</span>
          <span className="text-base font-semibold text-foreground">12 March 2026 - 11:00 AM (IST)</span>
        </div>
        <div className="py-4 border-b-0 md:border-r md:px-8">
          <span className="text-sm text-muted-foreground block">Auction End</span>
          <span className="text-base font-semibold text-foreground">12 March 2026 - 01:00 PM (IST)</span>
        </div>
        <div className="py-4 border-b-0 md:pl-8">
          <span className="text-sm text-muted-foreground block">EMD Last Date & Time</span>
          <span className="text-base font-semibold text-foreground">11 March 2026 - 04:00 PM (IST)</span>
        </div>
      </div>
    </section>
  );
};

export default PropertyInfo;
