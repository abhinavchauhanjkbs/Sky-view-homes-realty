import serviceIcon from "@/assets/service-icon.png";

const cards = [
  { title: "Below Market Price", desc: "Acquire properties significantly lower than prevailing market rates through transparent bank auctions designed to maximize value for informed real estate investors.", highlight: false },
  { title: "High ROI Potential", desc: "Benefit from strong rental yields and long-term appreciation in high-demand locations suitable for both residential buyers and commercial property investors.", highlight: true },
  { title: "Legal Transparency", desc: "Every property undergoes detailed document verification, ensuring clear titles, compliance, and a secure auction process without hidden legal complications or risks.", highlight: false },
  { title: "Approved Listings", desc: "Listings sourced directly from authorized banks eliminate intermediaries, providing authentic opportunities with reliable reserve pricing and structured auction participation guidelines.", highlight: false },
];

const WhyInvest = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-background">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 xl:px-[150px]">
      <h2 className="section-heading text-foreground text-center">
        Why Invest in Auction Properties
      </h2>
      <p className="text-muted-foreground text-center mt-3 sm:mt-4 max-w-[750px] mx-auto text-[14px] sm:text-[15px] leading-relaxed">
        Auction properties offer below market pricing, verified documentation, and strong long-term appreciation potential for smart investors.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center gap-3 mt-8 sm:mt-10 md:mt-14">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group relative min-h-[300px] rounded-xl p-[24px_20px] border border-border bg-background text-foreground overflow-hidden cursor-pointer transition-colors duration-500 hover:bg-primary hover:border-primary hover:text-primary-foreground"
          >
            {/* Bottom-to-top sweep overlay */}
            <div className="absolute inset-0 bg-primary origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-xl" />
            <div className="relative z-10 flex flex-col gap-3">
              <img
                src={serviceIcon}
                alt=""
                className="w-12 h-12 group-hover:brightness-0 group-hover:invert transition-all duration-500"
              />
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary-foreground transition-colors duration-500">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/85 transition-colors duration-500">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyInvest;
