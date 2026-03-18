import propertyFront from "@/assets/property-front.png";
import propertySide from "@/assets/property-side.png";
import { Info } from "lucide-react";

const tags = ["Garden", "Garage", "Terrace", "Swimming Pool", "Fire Place", "Basement"];

const specs = [
  { label: "Object Type", value: "Detached House", label2: "Garages", value2: "2" },
  { label: "Condition", value: "Needs Rehabilitation", label2: "Parking Spaces", value2: "1" },
  { label: "Rooms", value: "5", label2: "Living Area", value2: "~251sq.ft" },
  { label: "Bedrooms", value: "3", label2: "Plot Surface", value2: "~1,850sq.ft" },
  { label: "Bathrooms", value: "2", label2: "Flooring", value2: "Carpet, Parquet, Tiles" },
  { label: "No. of Floors", value: "2", label2: "", value2: "" },
];

const energySpecs = [
  { label: "Construction year", value: "1938", label2: "Final energy demand", value2: "308.31 kWh/m^2a" },
  { label: "Energy efficiency class", value: "Needs Rehabilitation", label2: "Type of heating", value2: "Radiator" },
  { label: "Energy certificate available", value: "H", label2: "Energy source", value2: "Central heating, Oil heating", isTag: true },
  { label: "Energy certificate type", value: "Demand certificate", label2: "Energy includes hot water", value2: "Yes" },
];

const PropertyDetails = () => {
  return (
    <section className="w-full bg-[#57B6E00D] py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Title */}
        <h2
          className="text-[26px] md:text-[36px] leading-[150%] font-semibold text-[#010101] mb-5 max-w-[1140px] md:w-[1140px] md:h-[54px]"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Property Details
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full bg-[#F1F1F1] text-sm text-black font-medium shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          <div className="group md:col-span-3 rounded-xl overflow-hidden aspect-[16/9] bg-[#57B6E00D] shadow-sm">
            <img
              src={propertyFront}
              alt="Property front"
              className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.05]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="group md:col-span-2 rounded-xl overflow-hidden aspect-[16/9] bg-[#57B6E00D] shadow-sm">
            <img
              src={propertySide}
              alt="Property side"
              className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.05]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Specs Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {specs.map((row, i) => (
            <div key={i} className="contents">
              <div className="flex justify-between py-4 border-b border-[#3A3A3A]/30">
                <span className="text-sm text-[#6B6B6B]">{row.label}</span>
                <span className="text-sm font-medium text-[#6B6B6B]">{row.value}</span>
              </div>
              {(row.label2 || i < specs.length - 1) && (
                <div className="flex justify-between py-4 border-b border-[#3A3A3A]/30">
                  {row.label2 ? (
                    <>
                      <span className="text-sm text-[#6B6B6B]">{row.label2}</span>
                      <span className="text-sm font-medium text-[#6B6B6B]">{row.value2}</span>
                    </>
                  ) : (
                    <span />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Energy Efficiency */}
        <h2
          className="text-[26px] md:text-[36px] leading-[150%] font-bold text-[#010101] mt-12 mb-6 max-w-[477px] md:w-[477px] md:h-[54px]"
          style={{ fontFamily: "Urbanist, sans-serif" }}
        >
          Energy efficiency information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {energySpecs.map((row, i) => (
            <div key={i} className="contents">
              <div className="flex justify-between items-center py-4 border-b border-[#3A3A3A]/30">
                <span className="text-sm text-[#6B6B6B]">{row.label}</span>
                {row.isTag ? (
                  <div className="flex items-center gap-1.5">
                    <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-0.5 rounded">
                      {row.value}
                    </span>
                    <Info className="w-4 h-4 text-[#6B6B6B]" />
                  </div>
                ) : (
                  <span className="text-sm font-medium text-[#6B6B6B]">{row.value}</span>
                )}
              </div>
              <div className="flex justify-between py-4 border-b border-[#3A3A3A]/30">
                <span className="text-sm text-[#6B6B6B]">{row.label2}</span>
                <span className="text-sm font-medium text-[#6B6B6B]">{row.value2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
