import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import btnRegisterNav from "@/assets/btn-register-nav.png";
import { useState } from "react";

const navLinks = ["Home", "Auction Properties", "How It Works", "Banks", "Services", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-background py-3 sm:py-4 px-4 sm:px-6 md:px-10 lg:px-[100px] flex items-center justify-between relative">
      <img src={logo} alt="Sky View Homes Reality" className="h-10 sm:h-12 md:h-16 w-auto" />

      {/* Desktop */}
      <ul className="hidden xl:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link}>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <img src={btnRegisterNav} alt="Register to Bid" className="hidden xl:block h-11 cursor-pointer hover:opacity-90 transition-opacity" />

      {/* Mobile / Tablet / iPad Pro toggle */}
      <button className="xl:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile / Tablet / iPad Pro menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-background shadow-lg z-50 p-6 xl:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <img src={btnRegisterNav} alt="Register to Bid" className="mt-4 h-11 cursor-pointer hover:opacity-90 transition-opacity" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
