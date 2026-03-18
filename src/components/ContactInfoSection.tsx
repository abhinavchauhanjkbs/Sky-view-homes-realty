const ContactInfoSection = () => (
  <section className="bg-white py-12 sm:py-16">
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 text-center">
      <h2
        className="text-[48px] leading-[120%] font-semibold text-black text-center tracking-[0%]"
        style={{ fontFamily: "Sora, sans-serif", fontWeight: "600" }}
      >
        Contact Information
      </h2>
      <p className="mt-2 text-sm sm:text-[15px] text-muted-foreground max-w-[820px] mx-auto">
        Reach out to our team through the following contact details for quick assistance regarding auction properties and
        platform support.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
        <div className="md:pr-6 md:border-r md:border-border">
          <div className="text-center max-w-[288px] mx-auto">
            <p
              className="text-[16px] leading-[150%] text-[#010101]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Office Location:
            </p>
            <p
              className="text-[16px] leading-[150%] text-[#010101]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              123 Business Avenue, New Delhi, India
            </p>
          </div>
        </div>
        <div className="md:px-6 md:border-r md:border-border">
          <div className="text-center max-w-[288px] mx-auto">
            <p
              className="text-[16px] leading-[150%] text-[#010101]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Phone Number:
            </p>
            <p
              className="text-[16px] leading-[150%] text-[#010101]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              +91 98765 43210
            </p>
          </div>
        </div>
        <div className="md:pl-6">
          <div className="text-center max-w-[288px] mx-auto">
            <p
              className="text-[16px] leading-[150%] text-[#010101]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Email:
            </p>
            <p
              className="text-[16px] leading-[150%] text-[#010101]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              support@auctionproperties.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactInfoSection;
