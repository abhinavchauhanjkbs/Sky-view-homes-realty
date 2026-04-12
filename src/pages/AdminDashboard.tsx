import { Activity, BarChart3, ChevronDown, CreditCard, Home, Layers, LogOut, Menu, Plus, Settings, Users, Search, Bell, MessageCircle, TrendingUp, Building, Gavel, UserCheck, IndianRupee, X, Clock, Calendar, Filter } from "lucide-react";
import logo from "@/assets/logo.png";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notificationToggles, setNotificationToggles] = useState({
    emailOnNewBid: true,
    newUserRegistration: true,
    auctionEndAlerts: true,
    paymentFailures: true,
    kycFlaggedDocs: true,
    weeklyRevenueReport: true,
  });
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
    { label: "Total Listed", value: "1,284", accent: "bg-[#d8f5e6]" },
    { label: "In Auction", value: "24", accent: "bg-[#fff1c7]" },
    { label: "Pending Approval", value: "37", accent: "bg-[#ffd9c9]" },
    { label: "Sold This Month", value: "18", accent: "bg-[#ded9ff]" },
  ];
  const userStats = [
    { label: "Total Users", value: "18,540", accent: "bg-[#d8f5e6]" },
    { label: "KYC Verified", value: "14,280", accent: "bg-[#fff1c7]" },
    { label: "Pending KYC", value: "3,840", accent: "bg-[#ffd9c9]" },
    { label: "Suspended", value: "420", accent: "bg-[#ded9ff]" },
  ];
  const paymentStats = [
    { label: "Total Collected", value: "₹84.2 Cr", accent: "bg-[#d8f5e6]" },
    { label: "EMDs Held", value: "₹12.4 Cr", accent: "bg-[#fff1c7]" },
    { label: "Pending Settlements", value: "₹3.7 Cr", accent: "bg-[#ffd9c9]" },
    { label: "Refunds Issued", value: "₹1.1 Cr", accent: "bg-[#ded9ff]" },
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
  const liveAuctionRows = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    property: "Prestige Towers 4B",
    type: "Residential",
    city: "Mumbai",
    area: "1,850 sqft",
    listedPrice: "₹2.4 Cr",
    status: "Live",
    action: "Edit",
  }));
  const liveAuctionCards = Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    property: "Prestige Towers 4B",
    location: "Mumbai · Ends 4h 22m",
    status: "Live",
    currentPrice: "₹2.78 Cr",
    reserveText: "Reserve: ₹2.4 Cr · 14 bids",
    progress: 72,
    minPrice: "₹2.4 Cr",
    progressLabel: "72% of target",
    targetPrice: "₹3.4 Cr",
  }));
  const bidFeedRows = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    user: "Priya Mehta",
    time: "Just now",
    amount: "₹2.78 Cr",
    status: index === 0 ? "Top Bid" : "Out Bid",
    statusColor: index === 0 ? "text-sky-400" : "text-slate-400",
  }));
  const auctionSummary = [
    { label: "Total bids today", value: "182" },
    { label: "Unique bidders", value: "62" },
    { label: "Avg. bid increment", value: "₹3.2 L" },
    { label: "Highest single bid", value: "₹5.55 Cr" },
    { label: "Auto-bids active", value: "28" },
    { label: "Flagged bids", value: "3" },
  ];
  const activeAuctionsList = [
    { name: "Prestige 4B", meta: "14 bids · 4h left" },
    { name: "DLF Villa 22", meta: "9 bids · 6h left" },
    { name: "Lodha Suite 7", meta: "21 bids · 11h left" },
    { name: "Hiranandani 3A", meta: "2 bids · 18h left" },
  ];
  const bidVolumeBars = [
    { label: "8AM", value: 26 },
    { label: "9AM", value: 44 },
    { label: "10AM", value: 35 },
    { label: "11AM", value: 54 },
    { label: "12AM", value: 42 },
    { label: "1PM", value: 30 },
    { label: "2PM", value: 33 },
    { label: "3PM", value: 46 },
    { label: "4PM", value: 32 },
    { label: "5PM", value: 35 },
    { label: "6PM", value: 35 },
  ];
  const paymentRows = [
    { id: "#TXN-9841", user: "Priya Mehta", type: "EMD", amount: "₹24,000", property: "Prestige Towers 4B", date: "Apr 6, 9:05 AM", status: "Confirmed" },
    { id: "#TXN-9841", user: "Priya Mehta", type: "Bid Payment", amount: "₹5.55 Cr", property: "Prestige Towers 4B", date: "Apr 6, 9:05 AM", status: "Pending" },
    { id: "#TXN-9841", user: "Priya Mehta", type: "Refund", amount: "-₹20,000", property: "Prestige Towers 4B", date: "Apr 6, 9:05 AM", status: "Refunded" },
    { id: "#TXN-9841", user: "Priya Mehta", type: "EMD", amount: "₹5.55 Cr", property: "Prestige Towers 4B", date: "Apr 6, 9:05 AM", status: "Confirmed" },
    { id: "#TXN-9841", user: "Priya Mehta", type: "EMD", amount: "₹5.55 Cr", property: "Prestige Towers 4B", date: "Apr 6, 9:05 AM", status: "Confirmed" },
    { id: "#TXN-9841", user: "Priya Mehta", type: "Bid Payment", amount: "₹5.55 Cr", property: "Prestige Towers 4B", date: "Apr 6, 9:05 AM", status: "Confirmed" },
    { id: "#TXN-9841", user: "Priya Mehta", type: "Bid Payment", amount: "₹5.55 Cr", property: "Prestige Towers 4B", date: "Apr 6, 9:05 AM", status: "Confirmed" },
    { id: "#TXN-9841", user: "Priya Mehta", type: "Bid Payment", amount: "₹24,000", property: "Prestige Towers 4B", date: "Apr 6, 9:05 AM", status: "Confirmed" },
  ];
  const notificationSettings = [
    { key: "emailOnNewBid", title: "Email on new bid", description: "Notify admin on every bid placed" },
    { key: "newUserRegistration", title: "New user registration", description: "Daily digest of signups" },
    { key: "auctionEndAlerts", title: "Auction end alerts", description: "Alert when auction closes" },
    { key: "paymentFailures", title: "Payment failures", description: "Instant alert on failed txn" },
    { key: "kycFlaggedDocs", title: "KYC flagged docs", description: "When doc mismatch detected" },
    { key: "weeklyRevenueReport", title: "Weekly revenue report", description: "Sent every Monday" },
  ];
  const handleLogout = () => {
    logout();
    navigate("/admin", { replace: true });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsSidebarOpen(false);
  };

  const toggleNotification = (key: keyof typeof notificationToggles) => {
    setNotificationToggles((current) => ({
      ...current,
      [key]: !current[key],
    }));
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
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition ${
                  activeTab === "dashboard" ? "bg-sky-400 text-white hover:bg-sky-500" : "bg-white text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Plus className="h-4 w-4" />
                <span className="text-sm">Dashboard</span>
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
              <button
                onClick={() => handleTabChange("bidding")}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition ${
                  activeTab === "bidding" ? "bg-sky-400 text-white" : "bg-white text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Layers className="h-4 w-4" />
                <span className="text-sm">Bidding Management</span>
              </button>
              <button
                onClick={() => handleTabChange("payments")}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition ${
                  activeTab === "payments" ? "bg-sky-400 text-white" : "bg-white text-slate-900 hover:bg-slate-50"
                }`}
              >
                <CreditCard className="h-4 w-4" />
                <span className="text-sm">Payments</span>
              </button>
              <button
                onClick={() => handleTabChange("reports")}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition ${
                  activeTab === "reports" ? "bg-sky-400 text-white" : "bg-white text-slate-900 hover:bg-slate-50"
                }`}
              >
                <BarChart3 className="h-4 w-4" />
                <span className="text-sm">Reports</span>
              </button>
              <button
                onClick={() => handleTabChange("settings")}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition ${
                  activeTab === "settings" ? "bg-sky-400 text-white" : "bg-white text-slate-900 hover:bg-slate-50"
                }`}
              >
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
        <div className={activeTab === "properties" || activeTab === "users" || activeTab === "auctions" || activeTab === "bidding" || activeTab === "payments" || activeTab === "settings" || activeTab === "reports" ? "hidden" : "mb-6"}>
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
                <div className="aspect-square h-12 md:h-[60.75px] rounded-[16px] bg-[#d8f5e6]" />
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
                <div className="aspect-square h-12 md:h-[60.75px] rounded-[16px] bg-[#fff1c7]" />
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
                <div className="aspect-square h-12 md:h-[60.75px] rounded-[16px] bg-[#ffd9c9]" />
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
                <div className="mr-1 aspect-square h-12 shrink-0 rounded-[16px] bg-[#ded9ff] md:mr-0 md:h-[60.75px]" />
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>8.5%</span>
                <span className="text-slate-400 ml-1">Up from yesterday</span>
              </div>
            </div>
          </div>

        {/* Revenue Analytics Chart */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-6 mt-6">
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
              <table className="min-w-[760px] w-full">
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
                    <div className={`aspect-square h-12 md:h-[60.75px] rounded-[16px] ${stat.accent}`} />
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
              <div className="px-8 pb-6 pt-7">
                <h1
                  className="text-[24px] font-semibold leading-[120%] tracking-[0px] text-[#201f23]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Property Listings
                </h1>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-[900px] border-separate border-spacing-0">
                  <thead className="bg-[#edf7fd]">
                    <tr>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">Property</th>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">Type</th>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">City</th>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">Area</th>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">Listed Price</th>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">Status</th>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {liveAuctionRows.map((row) => (
                      <tr key={row.id} className="text-[15px] text-slate-900">
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap">{row.property}</td>
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap">{row.type}</td>
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap">{row.city}</td>
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap">{row.area}</td>
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap">{row.listedPrice}</td>
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap font-medium text-[#2fd474]">{row.status}</td>
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
                    <div className={`aspect-square h-12 md:h-[60.75px] rounded-[16px] ${stat.accent}`} />
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
                <table className="min-w-[820px] w-full">
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
          <div className="min-h-[calc(100vh-210px)]">
            <div className="mb-5">
              <h1
                className="text-[24px] font-semibold leading-[120%] tracking-[0px] text-[#201f23]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Live Auctions
              </h1>
              <p
                className="mt-1 text-[14px] font-normal leading-[150%] tracking-[0.03em] text-[#202224]/70"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                4 auctions running now · 8 upcoming
              </p>
            </div>
            <div className="mb-6 grid gap-5 md:grid-cols-3 xl:grid-cols-3">
              {liveAuctionCards.map((card) => (
                <div
                  key={card.id}
                  className="flex h-[191px] w-full flex-col overflow-hidden rounded-[16px] border border-slate-200 border-l-[2px] border-l-[#57b6e0] bg-white px-6 py-5 shadow-sm md:max-w-none xl:max-w-[361px]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h2
                        className="truncate text-[14px] font-semibold leading-[100%] tracking-[0px] text-[#202224]"
                        style={{ fontFamily: '"Nunito Sans", sans-serif' }}
                      >
                        {card.property}
                      </h2>
                      <p className="mt-1 text-[16px] leading-tight text-slate-500">{card.location}</p>
                    </div>
                    <span className="mt-1 whitespace-nowrap text-[16px] font-medium text-[#5dd087]">&bull; {card.status}</span>
                  </div>
                  <p
                    className="mt-4 text-[28.32px] font-bold leading-[100%] tracking-[0px] text-[#202224]"
                    style={{ fontFamily: '"Nunito Sans", sans-serif' }}
                  >
                    {card.currentPrice}
                  </p>
                  <p className="mt-5 text-[15px] leading-none text-slate-500">{card.reserveText}</p>
                  <div className="mt-auto">
                    <div className="mt-1 h-[12px] overflow-hidden rounded-full bg-[#eaebed]">
                      <div className="h-full rounded-full bg-[#20a848]" style={{ width: `${card.progress}%` }} />
                    </div>
                    <div className="mt-3 grid grid-cols-3 items-center text-[14px] leading-tight text-slate-500">
                      <span>{card.minPrice}</span>
                      <span className="whitespace-nowrap text-center">{card.progressLabel}</span>
                      <span className="text-right">{card.targetPrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
              <div className="px-8 pb-6 pt-7">
                <h1
                  className="text-[24px] font-semibold leading-[120%] tracking-[0px] text-[#201f23]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  All Auctions
                </h1>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-[900px] w-full border-separate border-spacing-0">
                  <thead className="bg-[#edf7fd]">
                    <tr>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">Property</th>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">Type</th>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">City</th>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">Area</th>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">Listed Price</th>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">Status</th>
                      <th className="px-8 py-6 text-left text-[15px] font-medium text-[#214b56]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {liveAuctionRows.map((row) => (
                      <tr key={row.id} className="text-[15px] text-slate-900">
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap">{row.property}</td>
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap">{row.type}</td>
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap">{row.city}</td>
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap">{row.area}</td>
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap">{row.listedPrice}</td>
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap font-medium text-[#2fd474]">{row.status}</td>
                        <td className="border-b border-[#d9e3ea] px-8 py-7 whitespace-nowrap">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : activeTab === "bidding" ? (
          <div className="space-y-5">
            <div>
              <h1
                className="text-[24px] font-semibold leading-[120%] tracking-[0px] text-[#201f23]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Bidding Management
              </h1>
              <p
                className="mt-1 text-[14px] font-normal leading-[150%] tracking-[0.03em] text-[#202224]/70"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Monitor all bids across live auctions in real time
              </p>
            </div>
            <div className="grid gap-4 xl:grid-cols-[1.9fr_0.9fr]">
              <div className="space-y-4">
                <div className="rounded-[22px] bg-white shadow-sm">
                  <div className="flex items-start justify-between border-b border-slate-200 px-5 py-4">
                    <div>
                      <h2 className="text-[18px] font-semibold text-[#2a2a2a]">Live Bid Feed</h2>
                      <p className="mt-1 text-sm text-slate-500">Prestige Towers 4B · Mumbai</p>
                    </div>
                    <span className="mt-2 whitespace-nowrap text-sm font-medium text-[#6bd18f]">• Live</span>
                  </div>
                  <div className="overflow-x-auto whitespace-nowrap" style={{ touchAction: 'pan-x' }}>
                    <table className="min-w-[640px] w-full border-separate border-spacing-0 whitespace-nowrap">
                      <thead className="sr-only">
                        <tr>
                          <th>User</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {bidFeedRows.map((bid) => (
                          <tr key={bid.id}>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-3 min-w-[175px]">
                                <div className="h-8 w-8 rounded-full bg-sky-400" />
                                <div className="min-w-0">
                                  <p className="text-sm font-semibold text-slate-800">{bid.user}</p>
                                  <p className="text-xs text-slate-500">{bid.time}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-center whitespace-nowrap text-sm font-semibold text-slate-700">{bid.amount}</td>
                            <td className={`px-4 py-4 text-right whitespace-nowrap text-sm font-semibold ${bid.statusColor}`}>{bid.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">Swipe left to view the full row on mobile</p>
                </div>
                <div className="rounded-[22px] bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-5 py-4">
                    <h2 className="text-[18px] font-semibold text-[#2a2a2a]">Bid Volume Today</h2>
                  </div>
                  <div className="overflow-x-auto px-5 pb-6 pt-8" style={{ touchAction: 'pan-x' }}>
                    <div className="relative h-[180px] w-[560px] min-w-[560px]">
                      <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400">
                        {[60, 50, 40, 30, 20, 10, 0].map((tick) => (
                          <div key={tick} className="relative">
                            <span className="absolute -left-1 -translate-x-full text-slate-500">{tick}</span>
                            <div className="border-t border-slate-100" />
                          </div>
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-8 right-0 flex h-[150px] items-end justify-between gap-3">
                        {bidVolumeBars.map((bar) => (
                          <div key={bar.label} className="flex flex-1 flex-col items-center justify-end gap-2">
                            <div
                              className="w-full max-w-[22px] rounded-t-[6px] bg-sky-400"
                              style={{ height: `${bar.value * 2.2}px` }}
                            />
                            <span className="text-[10px] text-slate-500">{bar.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-[22px] bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-5 py-4">
                    <h2 className="text-[18px] font-semibold text-[#2a2a2a]">Auction Summary</h2>
                  </div>
                  <div className="space-y-3 px-5 py-4">
                    {auctionSummary.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-4 text-sm">
                        <span className="text-slate-500">{item.label}</span>
                        <span className="font-semibold text-slate-700">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="overflow-hidden rounded-[22px] bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-5 py-4">
                    <h2 className="text-[18px] font-semibold text-[#2a2a2a]">Active Auctions</h2>
                  </div>
                  <div className="space-y-4 px-5 py-4">
                    {activeAuctionsList.map((auction) => (
                      <div key={auction.name} className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[16px] font-semibold text-slate-700">{auction.name}</p>
                          <p className="mt-1 text-sm text-slate-500">{auction.meta}</p>
                        </div>
                        <span className="mt-1 whitespace-nowrap text-sm font-medium text-[#6bd18f]">• Live</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeTab === "payments" ? (
          <div className="space-y-5">
            <div>
              <h1
                className="text-[24px] font-semibold leading-[120%] tracking-[0px] text-[#201f23]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Payments
              </h1>
              <p
                className="mt-1 text-[14px] font-normal leading-[150%] tracking-[0.03em] text-[#202224]/70"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                All transactions, EMDs, and settlements
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {paymentStats.map((stat) => (
                <div key={stat.label} className="rounded-[22px] bg-white p-4 shadow-sm md:p-5">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="mb-2 text-sm text-slate-500">{stat.label}</p>
                      <h3 className="text-[24px] font-bold text-slate-900 md:text-[26px]">{stat.value}</h3>
                    </div>
                    <div className={`aspect-square h-12 md:h-[60.75px] rounded-[16px] ${stat.accent}`} />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-green-500">
                    <TrendingUp className="h-4 w-4" />
                    <span>8.5%</span>
                    <span className="text-slate-400">Up from yesterday</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-[28px] bg-white shadow-sm">
              <div className="flex items-center justify-between px-5 py-5 md:px-6">
                <h2 className="text-[18px] font-semibold text-[#2a2a2a] md:text-[20px]">Transaction History</h2>
                <button className="text-sm font-medium text-sky-400 hover:text-sky-500">Export CSV</button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-[980px] border-separate border-spacing-0">
                  <thead className="bg-[#edf7fd]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#214b56]">Txn ID</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#214b56]">Users</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#214b56]">Type</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#214b56]">Amount</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#214b56]">Property</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#214b56]">Date</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#214b56]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {paymentRows.map((row, index) => (
                      <tr key={`${row.id}-${index}`} className="text-[15px] text-slate-900">
                        <td className="border-b border-[#d9e3ea] px-6 py-5 whitespace-nowrap">{row.id}</td>
                        <td className="border-b border-[#d9e3ea] px-6 py-5 whitespace-nowrap">{row.user}</td>
                        <td className="border-b border-[#d9e3ea] px-6 py-5 whitespace-nowrap">{row.type}</td>
                        <td className="border-b border-[#d9e3ea] px-6 py-5 whitespace-nowrap">{row.amount}</td>
                        <td className="border-b border-[#d9e3ea] px-6 py-5 whitespace-nowrap">{row.property}</td>
                        <td className="border-b border-[#d9e3ea] px-6 py-5 whitespace-nowrap">{row.date}</td>
                        <td className="border-b border-[#d9e3ea] px-6 py-5 whitespace-nowrap">{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : activeTab === "settings" ? (
          <div className="space-y-5">
            <div>
              <h1
                className="text-[24px] font-semibold leading-[120%] tracking-[0px] text-[#201f23]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Settings
              </h1>
              <p
                className="mt-1 text-[14px] font-normal leading-[150%] tracking-[0.03em] text-[#202224]/70"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Platform configuration and preferences
              </p>
            </div>
            <div className="grid gap-4 xl:grid-cols-[1.9fr_0.95fr]">
              <div className="space-y-4">
                <div className="rounded-[22px] bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-5 py-4">
                    <h2 className="text-[18px] font-semibold text-[#2a2a2a]">Platform Settings</h2>
                  </div>
                  <div className="space-y-4 px-5 py-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Platform Name</span>
                        <input value="" readOnly className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none" />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Support Email</span>
                        <input value="" readOnly className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none" />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Default Currency</span>
                        <input value="" readOnly className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none" />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Time Zone</span>
                        <input value="" readOnly className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none" />
                      </label>
                    </div>
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">Platform Description</span>
                      <textarea
                        value=""
                        readOnly
                        className="min-h-[100px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none"
                      />
                    </label>
                    <div className="flex justify-end gap-3">
                      <button className="rounded-xl border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-500">Cancel</button>
                      <button className="rounded-xl bg-sky-400 px-7 py-3 text-sm font-semibold text-white">Save Changes</button>
                    </div>
                  </div>
                </div>
                <div className="rounded-[22px] bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-5 py-4">
                    <h2 className="text-[18px] font-semibold text-[#2a2a2a]">Auction Rules</h2>
                  </div>
                  <div className="space-y-4 px-5 py-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Min. EMD Amount (₹)</span>
                        <input value="" readOnly className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none" />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Bid Increment (₹)</span>
                        <input value="" readOnly className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none" />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Auction Duration (hrs)</span>
                        <input value="" readOnly className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none" />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Extension Time (min)</span>
                        <input value="" readOnly className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none" />
                      </label>
                    </div>
                    <div className="flex justify-end gap-3">
                      <button className="rounded-xl border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-500">Cancel</button>
                      <button className="rounded-xl bg-sky-400 px-7 py-3 text-sm font-semibold text-white">Save Rules</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-[22px] bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-5 py-4">
                    <h2 className="text-[18px] font-semibold text-[#2a2a2a]">Notifications</h2>
                  </div>
                  <div className="space-y-4 px-5 py-4">
                    {notificationSettings.map((item) => (
                      <div key={item.title} className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[15px] font-semibold text-slate-700">{item.title}</p>
                          <p className="mt-1 text-sm text-slate-400">{item.description}</p>
                        </div>
                        <button
                          type="button"
                          aria-pressed={notificationToggles[item.key as keyof typeof notificationToggles]}
                          onClick={() => toggleNotification(item.key as keyof typeof notificationToggles)}
                          className={`mt-1 h-6 w-10 rounded-full p-[2px] transition ${
                            notificationToggles[item.key as keyof typeof notificationToggles] ? "bg-sky-400" : "bg-slate-300"
                          }`}
                        >
                          <span
                            className={`block h-5 w-5 rounded-full bg-white transition-transform ${
                              notificationToggles[item.key as keyof typeof notificationToggles] ? "translate-x-4" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[22px] bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-5 py-4">
                    <h2 className="text-[18px] font-semibold text-[#2a2a2a]">Admin Profile</h2>
                  </div>
                  <div className="space-y-4 px-5 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-sky-400" />
                      <div>
                        <p className="text-[16px] font-semibold text-slate-700">Arjun Kapoor</p>
                        <p className="text-sm text-slate-400">Super Admin · arjun@estateauct.in</p>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">First Name</span>
                        <input value="" readOnly className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none" />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Last Name</span>
                        <input value="" readOnly className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none" />
                      </label>
                    </div>
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">Email</span>
                      <input value="" readOnly className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none" />
                    </label>
                    <div className="flex justify-end gap-3">
                      <button className="rounded-xl border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-500">Cancel</button>
                      <button className="rounded-xl bg-sky-400 px-7 py-3 text-sm font-semibold text-white">Update Profile</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeTab === "reports" ? (
          <div className="min-h-[calc(100vh-210px)]">
            <div>
              <h1
                className="text-[24px] font-semibold leading-[120%] tracking-[0px] text-[#201f23]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Reports
              </h1>
              <p
                className="mt-1 text-[14px] font-normal leading-[150%] tracking-[0.03em] text-[#202224]/70"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Download and schedule platform analytics
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
