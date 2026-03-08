import ctaBg from "@/assets/cta-banner.png";
import registerBtn from "@/assets/register-btn.png";

const CTABanner = () => (
  <section className="relative pb-0">
    <div className="bg-background h-[100px] sm:h-[120px] md:h-[140px]" />
    <div className="bg-black h-[100px] sm:h-[120px] md:h-[140px]" />
    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
      <div
        className="max-w-[1080px] w-full rounded-2xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="pt-32 sm:pt-40 md:pt-52 pb-6 sm:pb-8 px-4 sm:px-8 text-center flex flex-col items-center justify-end h-full">
          <img src={registerBtn} alt="Register to Bid" className="h-7 sm:h-8 md:h-10 cursor-pointer hover:opacity-90 transition-opacity" />
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
