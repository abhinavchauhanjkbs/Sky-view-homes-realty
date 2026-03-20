import type { CSSProperties } from "react";
import auctionGuide from "@/assets/auction-guide.png";
import checkIcon from "@/assets/check-icon.png";
import btnGetGuidance from "@/assets/btn-get-auction-guidance.png";

const steps = [
  { num: "01", title: "Find Property", desc: "Browse verified bank auction listings filtered by city, budget, and property type." },
  { num: "02", title: "Legal Due Diligence", desc: "Our experts verify title, documents, and auction terms before you proceed." },
  { num: "03", title: "Submit EMD", desc: "Pay refundable earnest money deposit to become eligible for bidding." },
  { num: "04", title: "Participate & Win", desc: "Join auction, place bids strategically, and secure property at lowest price." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="bg-primary py-12 sm:py-16 md:py-20">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:pl-[70px] lg:pr-[30px] xl:px-[150px]">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <h2 className="section-heading text-primary-foreground">
            How Auction Buying Works
          </h2>
          <p className="text-primary-foreground/75 mt-4 max-w-[550px] text-[15px] leading-relaxed">
            Simple step-by-step process to help you participate confidently and secure verified auction properties without complications.
          </p>
        </div>
        <a href="/contact#contact-form" aria-label="Go to contact form">
          <img
            src={btnGetGuidance}
            alt="Get Auction Guidance"
            className="hidden lg:block h-12 cursor-pointer hover:opacity-90 transition-opacity"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left - Image with checklist */}
        <div className="relative">
          <img
            src={auctionGuide}
            alt="Auction guidance"
            className="w-full max-w-[500px] rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="howitworks-checklist absolute -bottom-10 right-0 md:-right-6 bg-primary-foreground rounded-xl p-4 md:p-5 shadow-lg w-[220px] md:w-[270px]">
            <h4 className="font-bold text-foreground text-base mb-3">Auction Checklist</h4>
            <div className="space-y-2.5">
              {["Verify legal title", "Review reserve price", "Check auction date"].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <img src={checkIcon} alt="" className="w-5 h-5" loading="lazy" decoding="async" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Steps */}
        <div>
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="how-it-works-step flex gap-4 md:gap-6"
                style={{ "--step-delay": `${i * 2.6}s` } as CSSProperties}
              >
                <div className="flex flex-col items-center shrink-0">
                  <span className="how-it-works-num how-it-works-num-circle text-primary-foreground font-bold text-sm md:text-base leading-none">{step.num}</span>
                  {i < steps.length - 1 && <div className="how-it-works-line w-px flex-1" />}
                </div>
                <div className={i < steps.length - 1 ? "pb-8 md:pb-10" : ""}>
                  <h3 className="text-primary-foreground font-bold text-lg md:text-xl leading-none">{step.title}</h3>
                  <p className="text-primary-foreground/75 mt-2 text-sm md:text-[15px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
