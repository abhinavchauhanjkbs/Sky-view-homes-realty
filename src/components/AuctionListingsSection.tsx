import propertyCard from "@/assets/property-card.png";
import shortlistIcon from "@/assets/Vector (4).png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const filters = ["Location / City", "Property Type", "Budget Range", "Bank Name", "Auction Date"];

const AuctionListingsSection = () => (
  <section
    id="available-auctions"
    className="bg-white text-foreground py-14 sm:py-16"
  >
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <h2
        className="mx-auto text-center text-[48px] leading-[1.2] tracking-[0] font-semibold text-foreground max-w-[754px]"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        Available Auction Properties
      </h2>
      <p className="mt-2 text-center text-foreground/70 text-sm sm:text-base max-w-[820px] mx-auto">
        Explore verified auction listings with detailed information including property location, reserve price, bank
        details, and auction schedule.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-[240px_minmax(0,1fr)] items-start">
        {/* Filters for All Devices */}
        <aside className="w-full md:w-[240px] md:sticky md:top-24 md:h-fit">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">Filters</h3>
              <button
                type="button"
                aria-label="Clear filters"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {filters.map((label) => (
              <button
                key={label}
                className="w-full flex items-center justify-between text-left text-sm text-foreground/80 px-3 py-2.5 border border-border rounded-md bg-background shadow-sm hover:border-foreground/30 transition-colors"
                type="button"
              >
                <span>{label}</span>
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 text-foreground/50"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}

            <button
              type="button"
              className="w-full mt-4 bg-[#63BDE2] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#58b3db] transition-colors shadow-[0_10px_24px_rgba(99,189,226,0.35)]"
            >
              Apply Filters
            </button>
            <button
              type="button"
              className="w-full border border-[#63BDE2] text-[#63BDE2] rounded-xl py-3 text-sm font-semibold bg-white hover:bg-[#F0FAFF] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </aside>

        {/* Property Cards - Mobile Carousel / Desktop Grid */}
        {/* Property Cards Grid - All Devices */}
        <div className="max-h-[450px] md:max-h-[450px] xl:max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] border border-border group"
              >
              <div className="relative overflow-hidden">
                <img
                  src={propertyCard}
                  alt="Auction property"
                  className="w-full h-auto object-cover transition-transform duration-200 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute left-3 bottom-3 text-white text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <img src={shortlistIcon} alt="" className="w-5 h-5" loading="lazy" decoding="async" />
                  987+ People Shortlist This Property
                </div>
              </div>

              <div className="p-4 sm:p-5 text-foreground">
                <h3 className="text-base sm:text-lg font-semibold">3BHK Luxury Apartment</h3>
                <p className="mt-2 text-xs text-muted-foreground">Reserved Price</p>
                <p className="text-lg sm:text-xl font-semibold text-[#57B6E0]">₹35,00,000</p>

                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">Auction Date</p>
                    <p className="font-medium">28 Feb 2026 - 12:00 PM</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Bank</p>
                    <p className="font-medium">State Bank Of India</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Area</p>
                    <p className="font-medium">1450 sq.ft</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Possession</p>
                    <p className="font-medium">Physical</p>
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                <button
                  type="button"
                  className="w-full bg-primary text-primary-foreground rounded-lg py-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AuctionListingsSection;
