import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useContact } from "@/contexts/ContactContext";
import { toast } from "sonner";

const helpOptions = ["Expose", "Callback", "Viewing"] as const;

const ContactForm = () => {
  const [selected, setSelected] = useState<string>("Expose");
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { addSubmission } = useContact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    addSubmission({
      ...formData
    });

    toast.success("Form submitted successfully!");
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setSelected("Expose");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
              <Input 
                className="bg-[#F9F9F9] border-0 h-14 rounded-xl" 
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">E-mail</label>
              <Input 
                type="email" 
                className="bg-[#F9F9F9] border-0 h-14 rounded-xl" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Phone number</label>
              <Input 
                type="tel" 
                className="bg-[#F9F9F9] border-0 h-14 rounded-xl" 
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
              <Input 
                className="bg-[#F9F9F9] border-0 h-14 rounded-xl" 
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium text-foreground mb-2 block">Your message</label>
            <Textarea 
              className="bg-[#F9F9F9] border-0 min-h-[140px] rounded-xl" 
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
            />
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            I agree to the processing of my data for the purpose of property search and being contacted by Fuderer Real Estate GmbH. If I provide my phone number, I also agree to being contacted by phone.
          </p>

          <Button type="submit" className="bg-[#63BDE2] hover:bg-[#58b3db] text-white rounded-full px-7 h-11 text-sm font-semibold mb-6">
            Request details
          </Button>

          <p className="text-sm text-muted-foreground">
            Which data Fuderer Real Estate GmbH stores, what rights you have in this context, and how you can revoke your consent for the future at any time can be found in the Privacy Policy.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
