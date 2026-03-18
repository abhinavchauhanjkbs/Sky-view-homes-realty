import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const helpOptions = ["Expose", "Callback", "Viewing"] as const;

const ContactForm = () => {
  const [selected, setSelected] = useState<string>("Expose");

  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-16">
        <h2
          className="text-[28px] md:text-[36px] leading-[150%] font-bold text-[#010101] text-center mb-4 max-w-[771px] mx-auto"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Get more information about this property
        </h2>
        <p className="text-center text-muted-foreground mb-4">How can we help you?</p>

        {/* Option pills */}
        <div className="flex justify-center gap-3 mb-10">
          {helpOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selected === opt
                  ? "bg-[#57B6E0] text-white"
                  : "border border-[#E1E6EA] text-[#1E2F36] bg-white hover:bg-[#F7FBFD]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">First name</label>
            <Input className="bg-[#F9F9F9] border-0 h-14 rounded-xl" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Last name</label>
            <Input className="bg-[#F9F9F9] border-0 h-14 rounded-xl" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">E-mail</label>
            <Input type="email" className="bg-[#F9F9F9] border-0 h-14 rounded-xl" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Phone number</label>
            <Input type="tel" className="bg-[#F9F9F9] border-0 h-14 rounded-xl" />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-foreground mb-2 block">Your message</label>
          <Textarea className="bg-[#F9F9F9] border-0 min-h-[140px] rounded-xl" />
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          I agree to the processing of my data for the purpose of property search and being contacted by Fuderer Real Estate GmbH. If I provide my phone number, I also agree to being contacted by phone.
        </p>

        <Button className="bg-[#63BDE2] hover:bg-[#58b3db] text-white rounded-full px-7 h-11 text-sm font-semibold mb-6">
          Request details
        </Button>

        <p className="text-sm text-muted-foreground">
          Which data Fuderer Real Estate GmbH stores, what rights you have in this context, and how you can revoke your consent for the future at any time can be found in the Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
