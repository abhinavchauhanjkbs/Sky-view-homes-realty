const ContactMapSection = () => (
  <section className="bg-white">
    <div className="w-full">
      <div className="w-full overflow-hidden">
        <div className="w-full h-[320px] sm:h-[380px] md:h-[440px]">
          <iframe
            title="Skyview Realtor Location"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=28.5799255,77.0466615&z=13&output=embed"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactMapSection;
