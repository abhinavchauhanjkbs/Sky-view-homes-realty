import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useContact } from "@/contexts/ContactContext";

const ContactFormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { addSubmission } = useContact();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !email || !phone || !subject || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Add submission to context
    console.log('ContactFormSection - submitting:', { fullName: name, email, phone, subject, message });
    addSubmission({
      fullName: name,
      email,
      phone,
      subject,
      message
    });

    // Show success message
    toast({
      title: "Message sent",
      description: "Thanks for reaching out! We will get back to you shortly.",
    });

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contact-form" className="bg-white pt-12 sm:pt-16 pb-6 sm:pb-8">
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
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Full Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white border border-black/10 h-12 rounded-xl"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border border-black/10 h-12 rounded-xl"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Phone Number</label>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white border border-black/10 h-12 rounded-xl"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Subject</label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-white border border-black/10 h-12 rounded-xl"
                placeholder="Enter your subject"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-foreground mb-2 block">Message</label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white border border-black/10 min-h-[150px] rounded-xl"
                placeholder="Write your message here"
              />
            </div>
            <div className="md:col-span-2 pt-2">
              <Button
                type="submit"
                className="w-full bg-[#63BDE2] hover:bg-[#58b3db] text-white rounded-full h-12 text-sm font-semibold"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
