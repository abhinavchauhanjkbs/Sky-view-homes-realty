import { Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground border-b border-input py-2 px-4 sm:px-6 md:px-10 lg:px-[100px] flex items-center justify-between text-xs sm:text-sm">
    <span className="font-medium truncate">Bank Auction Specialists | Verified Legal Properties</span>
    <div className="hidden md:flex items-center md:flex-col md:items-end md:gap-0.5 lg:flex-row lg:items-center lg:gap-6">
      <a href="tel:+917204457727" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
        <Phone className="w-3.5 h-3.5" /> (720) 445-7727
      </a>
      <a href="mailto:info@skyviewhomes.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
        <Mail className="w-3.5 h-3.5" /> info@skyviewhomes.com
      </a>
    </div>
  </div>
);

export default TopBar;
