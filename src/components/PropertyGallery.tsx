import { ArrowRight } from "lucide-react";
import propertyFront from "@/assets/property-front.png";
import propertySide from "@/assets/property-side.png";
import propertyAerial from "@/assets/property-aerial.png";
import propertyKitchen from "@/assets/property-kitchen.png";
import propertyPool from "@/assets/property-pool.png";
import iconShare from "@/assets/icon-share.png";
import iconHeart from "@/assets/icon-heart.png";

const PropertyGallery = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-8">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Top Left - Main Image */}
        <div className="group relative rounded-xl overflow-hidden aspect-[4/3]">
          <img
            src={propertyFront}
            alt="Modern luxury home front view at dusk"
            className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.05]"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          {/* Action buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src={iconHeart} alt="Favorite" className="w-10 h-10" loading="lazy" decoding="async" />
            </button>
            <button className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src={iconShare} alt="Share" className="w-10 h-10" loading="lazy" decoding="async" />
            </button>
          </div>
        </div>

        {/* Top Right */}
        <div className="group rounded-xl overflow-hidden aspect-[4/3]">
          <img
            src={propertySide}
            alt="Modern luxury home side view at dusk"
            className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.05]"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Bottom Row - 3 images */}
        <div className="md:col-span-2 grid grid-cols-3 gap-3">
          <div className="group rounded-xl overflow-hidden aspect-[4/3]">
          <img
            src={propertyAerial}
            alt="Aerial view of modern luxury home at night"
            className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.05]"
            loading="lazy"
            decoding="async"
          />
          </div>
          <div className="group rounded-xl overflow-hidden aspect-[4/3]">
          <img
            src={propertyKitchen}
            alt="Modern minimalist kitchen interior"
            className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.05]"
            loading="lazy"
            decoding="async"
          />
          </div>
          <div className="group relative rounded-xl overflow-hidden aspect-[4/3]">
          <img
            src={propertyPool}
            alt="Luxury swimming pool at night"
            className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.05]"
            loading="lazy"
            decoding="async"
          />
            {/* See More overlay */}
            <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center cursor-pointer hover:bg-foreground/50 transition-colors">
              <span className="text-primary-foreground text-lg font-medium flex items-center gap-3">
                See More <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;


