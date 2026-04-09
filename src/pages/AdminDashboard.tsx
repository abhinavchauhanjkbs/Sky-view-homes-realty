import { Activity, BarChart3, ChevronDown, CreditCard, Home, Layers, LogOut, Menu, Plus, Settings, Users, Search, Bell, MessageCircle, TrendingUp, Building, Gavel, UserCheck, IndianRupee, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Sample data for recent registrations
  const recentRegistrations = [
    { user: "Neha Arora", email: "Nehaar78@gmail.com", phone: "+91 8950620040", date: "24 March 2026", status: "Open", statusColor: "text-green-500" },
    { user: "Sanjoli Miglani", email: "Neha8@gmail.com", phone: "+91 9728324347", date: "14 March 2024", status: "Upcoming", statusColor: "text-orange-500" },
    { user: "Rohan Kapoor", email: "rohan.kapoor@gmail.com", phone: "+91 9812345678", date: "08 April 2026", status: "Open", statusColor: "text-green-500" },
  ];

  // Sample data for user activity
  const userActivities = [
    { user: "Priya Mehta", action: "bid ₹2.78 Cr on", target: "Prestige 4B", time: "2 min ago" },
    { user: "Ravi Sharma", action: "completed", target: "KYC verification", time: "14 min ago" },
    { user: "Sunita Bose", action: "uploaded", target: "property docs", time: "24 min ago" },
  ];

  // Revenue chart data points (simplified)
  const chartData = [20, 30, 35, 50, 50, 45, 40, 42, 38, 55, 40, 48, 50, 55, 60, 55, 58, 65, 45, 65, 40, 42, 45, 50];
  const chartPoints = [
    { x: 4, y: 80, highlight: false },
    { x: 8, y: 72, highlight: false },
    { x: 12, y: 70, highlight: false },
    { x: 16, y: 58, highlight: false },
    { x: 20, y: 55, highlight: false },
    { x: 24, y: 50, highlight: false },
    { x: 28, y: 48, highlight: false },
    { x: 32, y: 42, highlight: false },
    { x: 36, y: 40, highlight: false },
    { x: 40, y: 35, highlight: false },
    { x: 44, y: 15, highlight: true },
    { x: 48, y: 35, highlight: false },
    { x: 52, y: 45, highlight: false },
    { x: 56, y: 50, highlight: false },
    { x: 60, y: 42, highlight: false },
    { x: 64, y: 38, highlight: false },
    { x: 68, y: 42, highlight: false },
    { x: 72, y: 38, highlight: false },
    { x: 76, y: 35, highlight: false },
    { x: 80, y: 32, highlight: false },
    { x: 84, y: 38, highlight: false },
    { x: 88, y: 35, highlight: false },
    { x: 92, y: 32, highlight: false },
    { x: 96, y: 30, highlight: false },
  ];
  const propertyStats = [
    { label: "Total Listed", value: "1,284", accent: "bg-emerald-100" },
    { label: "In Auction", value: "24", accent: "bg-amber-100" },
    { label: "Pending Approval", value: "37", accent: "bg-orange-100" },
    { label: "Sold This Month", value: "18", accent: "bg-violet-100" },
  ];
  const userStats = [
    { label: "Total Users", value: "18,540", accent: "bg-emerald-100" },
    { label: "KYC Verified", value: "14,280", accent: "bg-amber-100" },
    { label: "Pending KYC", value: "3,840", accent: "bg-orange-100" },
    { label: "Suspended", value: "420", accent: "bg-violet-100" },
  ];
  const userManagementRows = [
    { user: "Neha Arora", email: "Nehaar78@gmail.com", city: "Mumbai", bids: 14, date: "24 March 2026", kyc: "Verified", kycColor: "text-green-500" },
    { user: "Sanjoli Miglani", email: "Neha8@gmail.com", city: "Mumbai", bids: 0, date: "14 March 2024", kyc: "Verified", kycColor: "text-green-500" },
    { user: "Sanjoli Miglani", email: "Neha8@gmail.com", city: "Mumbai", bids: 7, date: "14 March 2024", kyc: "Verified", kycColor: "text-green-500" },
    { user: "Sanjoli Miglani", email: "Neha8@gmail.com", city: "Mumbai", bids: 2, date: "14 March 2024", kyc: "Pending", kycColor: "text-orange-400" },
    { user: "Sanjoli Miglani", email: "Neha8@gmail.com", city: "Mumbai", bids: 4, date: "14 March 2024", kyc: "Pending", kycColor: "text-orange-400" },
    { user: "Sanjoli Miglani", email: "Neha8@gmail.com", city: "Mumbai", bids: 1, date: "14 March 2024", kyc: "Verified", kycColor: "text-green-500" },
    { user: "Sanjoli Miglani", email: "Neha8@gmail.com", city: "Mumbai", bids: 2, date: "14 March 2024", kyc: "Verified", kycColor: "text-green-500" },
    { user: "Sanjoli Miglani", email: "Neha8@gmail.com", city: "Mumbai", bids: 0, date: "14 March 2024", kyc: "Verified", kycColor: "text-green-500" },
  ];
  const handleLogout = () => {
    logout();
    navigate("/admin", { replace: true });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (!isDropdownOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#57B6E00D' }}>
      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-30 bg-slate-900/20 xl:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-[260px] overflow-hidden border-r border-slate-200 bg-white shadow-lg transition-transform duration-300 xl:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ opacity: 1 }}
      >
        <div className="flex justify-center border-b border-slate-200 px-4 pb-4 pt-6 lg:p-4">
          <img src={logo} alt="Skyview Homes" className="h-20 w-auto object-contain sm:h-24" />
        </div>

        <div className="flex min-h-[calc(100vh-112px)] flex-col px-4 pt-4 space-y-2">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">Main</p>
            <div className="space-y-1">
              <button 
                onClick={() => handleTabChange("dashboard")}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left shadow-sm transition ${
                  activeTab === "dashboard" ? "bg-sky-400 text-white hover:bg-sky-500" : "bg-white text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Plus className="h-4 w-4" />
                <span className="text-sm font-medium">Dashboard</span>
              </button>
              <button 
                onClick={() => handleTabChange("auctions")}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition ${
                  activeTab === "auctions" ? "bg-sky-400 text-white" : "bg-white text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Activity className="h-4 w-4" />
                <span className="text-sm">Live Auctions</span>
              </button>
              <button 
                onClick={() => handleTabChange("properties")}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition ${
                  activeTab === "properties" ? "bg-sky-400 text-white" : "bg-white text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Home className="h-4 w-4" />
                <span className="text-sm">Properties</span>
              </button>
              <button 
                onClick={() => handleTabChange("users")}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition ${
                  activeTab === "users" ? "bg-sky-400 text-white" : "bg-white text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Users className="h-4 w-4" />
                <span className="text-sm">Users Management</span>
              </button>
            </div>
          </div>

          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">Operations</p>
            <div className="space-y-1">
              <button className="flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2 text-left text-slate-900 transition hover:bg-slate-50">
                <Layers className="h-4 w-4" />
                <span className="text-sm">Bidding Management</span>
              </button>
              <button className="flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2 text-left text-slate-900 transition hover:bg-slate-50">
                <CreditCard className="h-4 w-4" />
                <span className="text-sm">Payments</span>
              </button>
              <button className="flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2 text-left text-slate-900 transition hover:bg-slate-50">
                <BarChart3 className="h-4 w-4" />
                <span className="text-sm">Reports</span>
              </button>
              <button className="flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2 text-left text-slate-900 transition hover:bg-slate-50">
                <Settings className="h-4 w-4" />
                <span className="text-sm">Settings</span>
              </button>
            </div>
          </div>

          <div className="mt-auto border-t border-slate-200 pt-4">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen((open) => !open)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                <div className="flex items-center gap-1">
                  <p className="text-sm font-semibold text-slate-900">Admin</p>
                  <ChevronDown className="h-4 w-4 text-slate-500" />
                </div>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg z-50 w-32">
                  <button onClick={handleLogout} className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-slate-900 hover:bg-slate-50 rounded-lg">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="xl:ml-[260px]">
        {/* Header */}
        <div className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 xl:left-[260px] xl:px-6">
          <div className="flex flex-1 items-center gap-3">
            <button
              type="button"
              aria-label="Toggle sidebar"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 xl:hidden"
              onClick={() => setIsSidebarOpen((open) => !open)}
            >
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="relative hidden flex-1 max-w-md md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search products, orders..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <button
              type="button"
              aria-label="Search"
              className="text-slate-500 md:hidden"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50">
              <MessageCircle className="h-5 w-5 text-slate-600" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
            </button>
            <button className="relative p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50">
              <Bell className="h-5 w-5 text-slate-600" />
            </button>
            <button className="flex items-center gap-2 bg-sky-400 text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-sky-500 transition md:px-4">
              <Plus className="h-4 w-4" />
              <span className="md:hidden">Add</span>
              <span className="hidden md:inline">Add Property</span>
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className={activeTab === "users" ? "p-6 pt-[92px] bg-[#57B6E00D]" : "p-6 pt-[92px]"}>

        {/* Dashboard Overview */}
        <div className={activeTab === "properties" || activeTab === "users" ? "hidden" : "mb-6"}>
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Dashboard Overview</h1>
          <p className="text-sm text-slate-500 mb-4">Monday, 6 April 2026 • Last synced 2 min ago</p>
          
        </div>
        {activeTab === "properties" && (
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-1">Properties</h1>
            <p className="text-sm text-slate-500 mb-4">1,284 total properties across all cities</p>
          </div>
        )}
        {activeTab === "users" && (
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-1">User Management</h1>
            <p className="text-sm text-slate-500 mb-4">18,540 registered users · 312 new this week</p>
          </div>
        )}

        {activeTab === "dashboard" ? (
          <>
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {/* Total Properties */}
            <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="min-w-0">
                  <p className="text-sm text-slate-500 mb-1">Total Properties</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">1,276</h3>
                </div>
                <div className="p-2 bg-green-100 rounded-lg">
                  <Building className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>8.5%</span>
                <span className="text-slate-400 ml-1">Up from yesterday</span>
              </div>
            </div>

            {/* Live Auctions */}
            <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="mb-1 text-sm text-slate-500">
                    <span className="lg:hidden">
                      Live
                      <br />
                      Auctions
                    </span>
                    <span className="hidden lg:inline whitespace-nowrap">Live Auctions</span>
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">24</h3>
                </div>
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Gavel className="h-5 w-5 text-orange-500" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>8.5%</span>
                <span className="text-slate-400 ml-1">Up from yesterday</span>
              </div>
            </div>

            {/* Registered Users */}
            <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Registered Users</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">18,540</h3>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <UserCheck className="h-5 w-5 text-blue-500" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>8.5%</span>
                <span className="text-slate-400 ml-1">Up from yesterday</span>
              </div>
            </div>

            {/* Total Revenue */}
            <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="mb-1 text-sm text-slate-500">
                    <span className="lg:hidden">
                      Total
                      <br />
                      Revenue
                    </span>
                    <span className="hidden lg:inline whitespace-nowrap">Total Revenue</span>
                  </p>
                  <h3 className="whitespace-nowrap text-2xl md:text-3xl font-bold text-slate-900">₹84.2 Cr</h3>
                </div>
                <div className="shrink-0 p-2 bg-purple-100 rounded-lg mr-1 md:mr-0">
                  <IndianRupee className="h-5 w-5 text-purple-500" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>8.5%</span>
                <span className="text-slate-400 ml-1">Up from yesterday</span>
              </div>
            </div>
          </div>

        {/* Revenue Analytics Chart */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Revenue Analytics</h2>
            <select className="px-3 py-1 rounded-lg border border-slate-200 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400">
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
          
          {/* Revenue Analytics Chart */}
          <div className="overflow-x-auto pb-2 md:overflow-visible">
          <div className="relative h-64 min-w-[720px] md:h-80 md:min-w-0">
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-400 pr-2">
              <span>100L</span>
              <span>80L</span>
              <span>60L</span>
              <span>40L</span>
              <span>20L</span>
              <span>0</span>
            </div>
            <div className="relative ml-12 h-full flex items-end">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="0" x2="100" y2="0" stroke="#f1f5f9" strokeWidth="0.5" />
                <line x1="0" y1="20" x2="100" y2="20" stroke="#f1f5f9" strokeWidth="0.5" />
                <line x1="0" y1="40" x2="100" y2="40" stroke="#f1f5f9" strokeWidth="0.5" />
                <line x1="0" y1="60" x2="100" y2="60" stroke="#f1f5f9" strokeWidth="0.5" />
                <line x1="0" y1="80" x2="100" y2="80" stroke="#f1f5f9" strokeWidth="0.5" />
                <line x1="0" y1="100" x2="100" y2="100" stroke="#f1f5f9" strokeWidth="0.5" />
                
                {/* Area fill under line */}
                <polygon 
                  fill="url(#gradient)" 
                  opacity="0.4"
                  points="4,80 8,72 12,70 16,58 20,55 24,50 28,48 32,42 36,40 40,35 44,15 48,35 52,45 56,50 60,42 64,38 68,42 72,38 76,35 80,32 84,38 88,35 92,32 96,30 96,100 4,100"
                />
                
                {/* Chart line */}
                <polyline 
                  fill="none" 
                  stroke="#60a5fa" 
                  strokeWidth="0.3"
                  points="4,80 8,72 12,70 16,58 20,55 24,50 28,48 32,42 36,40 40,35 44,15 48,35 52,45 56,50 60,42 64,38 68,42 72,38 76,35 80,32 84,38 88,35 92,32 96,30"
                />
                
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="pointer-events-none absolute inset-0">
                {chartPoints.map((point, index) => (
                  <span
                    key={index}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400 ${
                      point.highlight ? "h-3 w-3" : "h-2.5 w-2.5"
                    }`}
                    style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="ml-12 mt-2 flex justify-between gap-4 text-xs text-slate-400">
              <span className="whitespace-nowrap">Jan</span>
              <span className="whitespace-nowrap">Feb</span>
              <span className="whitespace-nowrap">Mar</span>
              <span className="whitespace-nowrap">Apr</span>
              <span className="whitespace-nowrap">May</span>
              <span className="whitespace-nowrap">Jun</span>
              <span className="whitespace-nowrap">Jul</span>
              <span className="whitespace-nowrap">Aug</span>
              <span className="whitespace-nowrap">Sep</span>
              <span className="whitespace-nowrap">Oct</span>
              <span className="whitespace-nowrap">Nov</span>
              <span className="whitespace-nowrap">Dec</span>
            </div>
          </div>
          </div>
        </div>

        {/* Bottom Section: Recent Registrations and User Activity */}
        <div className="grid gap-6 xl:grid-cols-[1.7fr_0.9fr]">
          {/* Recent Registrations Table */}
          <div className="min-w-0 bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Registrations</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-slate-500 border-b border-slate-100">
                    <th className="pb-3 font-medium whitespace-nowrap">User</th>
                    <th className="pb-3 font-medium whitespace-nowrap">Email</th>
                    <th className="pb-3 font-medium whitespace-nowrap">Phone</th>
                    <th className="pb-3 font-medium whitespace-nowrap">Regist Date</th>
                    <th className="pb-3 font-medium whitespace-nowrap">Properties</th>
                    <th className="pb-3 font-medium whitespace-nowrap">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentRegistrations.map((user, index) => (
                    <tr key={index} className="text-sm">
                      <td className="py-3 pr-4 text-slate-900 whitespace-nowrap">{user.user}</td>
                      <td className="py-3 pr-4 text-slate-600 whitespace-nowrap">{user.email}</td>
                      <td className="py-3 pr-4 text-slate-600 whitespace-nowrap">{user.phone}</td>
                      <td className="py-3 pr-4 text-slate-600 whitespace-nowrap">{user.date}</td>
                      <td className="py-3 pr-4 whitespace-nowrap">
                        <span className={`text-xs font-medium ${user.statusColor}`}>{user.status}</span>
                      </td>
                      <td className="py-3 whitespace-nowrap">
                        <button className="text-green-500 hover:text-green-600 text-xs font-medium">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* User Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4">User Activity</h2>
            <div className="space-y-4">
              {userActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-slate-200 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-900">
                      <span className="font-medium">{activity.user}</span>
                      <span className="text-slate-600"> {activity.action} </span>
                      <span className="font-medium">{activity.target}</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
          </>
        ) : activeTab === "properties" ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {propertyStats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 md:p-5 shadow-sm">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <p className="mb-2 text-sm text-slate-500">{stat.label}</p>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</h3>
                    </div>
                    <div className={`h-8 w-8 rounded-2xl ${stat.accent}`} />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-green-500">
                    <TrendingUp className="h-4 w-4" />
                    <span>8.5%</span>
                    <span className="text-slate-400">Up from yesterday</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="min-h-[calc(100vh-300px)] rounded-xl bg-[#f7fbfd]" />
          </div>
        ) : activeTab === "users" ? (
          <div className="min-h-[calc(100vh-88px)] space-y-6">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {userStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white p-4 md:p-5 shadow-sm">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <p className="mb-2 text-sm text-slate-500">{stat.label}</p>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</h3>
                    </div>
                    <div className={`h-11 w-11 rounded-2xl ${stat.accent}`} />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-green-500">
                    <TrendingUp className="h-4 w-4" />
                    <span>8.5%</span>
                    <span className="text-slate-400">Up from yesterday</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
              <div className="px-6 py-5">
                <h2 className="text-[2rem] font-bold text-slate-900">Recent Registrations</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-sky-50/70 text-left text-sm text-slate-500">
                    <tr>
                      <th className="px-6 py-4 font-medium whitespace-nowrap">User</th>
                      <th className="px-6 py-4 font-medium whitespace-nowrap">Email</th>
                      <th className="px-6 py-4 font-medium whitespace-nowrap">City</th>
                      <th className="px-6 py-4 font-medium whitespace-nowrap">BIDs</th>
                      <th className="px-6 py-4 font-medium whitespace-nowrap">Regisest Date</th>
                      <th className="px-6 py-4 font-medium whitespace-nowrap">Kyc</th>
                      <th className="px-6 py-4 font-medium whitespace-nowrap">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userManagementRows.map((row, index) => (
                      <tr key={index} className="border-t border-slate-100 text-sm text-slate-700">
                        <td className="px-6 py-5 whitespace-nowrap">{row.user}</td>
                        <td className="px-6 py-5 whitespace-nowrap">{row.email}</td>
                        <td className="px-6 py-5 whitespace-nowrap">{row.city}</td>
                        <td className="px-6 py-5 whitespace-nowrap">{row.bids}</td>
                        <td className="px-6 py-5 whitespace-nowrap">{row.date}</td>
                        <td className={`px-6 py-5 whitespace-nowrap font-medium ${row.kycColor}`}>{row.kyc}</td>
                        <td className="px-6 py-5 whitespace-nowrap">
                          <button className="text-slate-900 hover:text-sky-500">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : activeTab === "auctions" ? (
          <div className="min-h-[calc(100vh-210px)] rounded-xl bg-[#f7fbfd]" />
        ) : null}
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
