import { Menu, X, LogOut } from "lucide-react";
import logo from "@/assets/logo.png";
import btnRegisterNav from "@/assets/btn-register-nav.png";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Auction Properties", href: "/auction-properties" },
  { label: "How It Works", href: "#" },
  { label: "Banks", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-background py-3 sm:py-4 px-4 sm:px-6 md:px-10 lg:px-[100px] flex items-center justify-between relative">
      <img src={logo} alt="Sky View Homes Reality" className="h-10 sm:h-12 md:h-16 w-auto" />

      {/* Desktop */}
      <ul className="hidden xl:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              onClick={(event) => {
                if (link.href === "#") event.preventDefault();
              }}
              className={`transition-colors text-black text-sm hover:text-primary ${
                location.pathname === link.href ? "font-bold" : "font-medium"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden xl:flex items-center gap-4">
        <img src={btnRegisterNav} alt="Register to Bid" className="h-11 cursor-pointer hover:opacity-90 transition-opacity" />
        <button 
          onClick={handleLogout}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors group"
          title="Logout"
        >
          <LogOut className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
        </button>
      </div>

      {/* Mobile / Tablet / iPad Pro actions */}
      <div className="flex items-center gap-3 xl:hidden">
        <img
          src={btnRegisterNav}
          alt="Register to Bid"
          className="h-8 sm:h-10 md:h-11 w-auto cursor-pointer hover:opacity-90 transition-opacity"
        />
        <button className="text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile / Tablet / iPad Pro menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-background shadow-lg z-50 p-6 xl:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`transition-colors text-black hover:text-foreground ${
                    location.pathname === link.href ? "font-bold" : "font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-4">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              <LogOut className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">Logout</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
