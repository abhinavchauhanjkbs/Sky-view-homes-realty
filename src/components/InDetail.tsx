import cardPhotos from "@/assets/card-photos.jpg";
import cardFloorplan from "@/assets/card-floorplan.jpg";
import cardMap from "@/assets/card-map.jpg";
import iconPhotos from "@/assets/icon-photos.png";
import iconFloorplan from "@/assets/icon-floorplan.png";
import iconMap from "@/assets/icon-map.png";

const cards = [
  { image: cardPhotos, icon: iconPhotos, title: "Photos", desc: "A collection of images" },
  { image: cardFloorplan, icon: iconFloorplan, title: "Floor Plan", desc: "A detailed layout" },
  { image: cardMap, icon: iconMap, title: "Map", desc: "Location and surrounding" },
];

const InDetail = () => {
  return (
    <section className="w-full bg-background py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <h2
          className="text-[26px] md:text-[36px] leading-[150%] font-semibold text-[#010101] mb-8 max-w-[732px] md:w-[732px] md:h-[54px]"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          In Detail
        </h2>
        <div className="flex flex-col md:flex-row md:flex-nowrap md:gap-4 gap-6 md:justify-start">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col items-center bg-[#F7FBFD] rounded-xl p-5 cursor-pointer transition-shadow hover:shadow-lg"
              style={{ width: "222px", height: "217px" }}
            >
              <div className="relative w-[86px] h-[77px] rounded-[3px] overflow-hidden mb-5 bg-[#57B6E00D]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.12]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <img src={card.icon} alt="" className="w-[22.5px] h-[22.5px] object-contain" loading="lazy" decoding="async" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InDetail;
