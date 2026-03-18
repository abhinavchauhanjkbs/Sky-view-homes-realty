import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactFormSection = () => (
  <section className="bg-white pt-12 sm:pt-16 pb-6 sm:pb-8">
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-10">
      <div className="text-center mb-8 sm:mb-10">
        <h2
          className="text-[48px] leading-[120%] font-semibold text-black text-center tracking-[0%]"
          style={{ fontFamily: "Sora, sans-serif", fontWeight: "600" }}
        >
          Send Us a Message
        </h2>
        <p className="mt-2 text-sm sm:text-[15px] text-muted-foreground">
          Fill out the form below and our team will get back to you as soon as possible.
        </p>
      </div>
      <div className="rounded-2xl border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.12)] p-6 sm:p-8 md:p-10">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">Full Name</label>
            <Input className="bg-white border border-black/10 h-12 rounded-xl" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">Email</label>
            <Input type="email" className="bg-white border border-black/10 h-12 rounded-xl" placeholder="Enter your email address" />
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">Phone Number</label>
            <Input type="tel" className="bg-white border border-black/10 h-12 rounded-xl" placeholder="Enter your phone number" />
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">Subject</label>
            <Input className="bg-white border border-black/10 h-12 rounded-xl" placeholder="Enter your subject" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-foreground mb-2 block">Message</label>
            <Textarea className="bg-white border border-black/10 min-h-[150px] rounded-xl" placeholder="Write your message here" />
          </div>
          <div className="md:col-span-2 pt-2">
            <Button className="w-full bg-[#63BDE2] hover:bg-[#58b3db] text-white rounded-full h-12 text-sm font-semibold">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactFormSection;
